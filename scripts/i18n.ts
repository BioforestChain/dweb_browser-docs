import { func_remember, str_trim_indent } from "@gaubee/util";
import { z } from "zod";
import { parseArgs } from "@std/cli/parse-args";
import { import_meta_ponyfill } from "import-meta-ponyfill";
import fs from "node:fs";
import path from "node:path";
import { config } from "dotenv";
import { execSync } from "node:child_process";
import { Diff, type ParsedDiff, applyPatch, formatPatch } from "diff";
import { getAiOutput, getOpenaiOutput } from "./i18n-ai-core.ts";
import * as models from "./ai-model.ts";

export type TranslateOptions = z.TypeOf<typeof zTranslateOptions>
export const zTranslateOptions = z.object({
  file: z.string().array().min(2),
  language: z.string().array().min(2),
  mode: z.enum(["full", "increment"]),
  model: z.enum(["google", "deepseek"]).optional(),
  commit: z.string().optional(),
});
/**定义一个源文件 */
const zFile = z.object({
  filepath: z.string(),
  language: z.string(),
});
const zFileWithContent = zFile.merge(
  z.object({
    content: z.string(),
  })
);
const zFileWithContentAndDiff = zFileWithContent.merge(
  z.object({
    diff: z.string(),
  })
);
/**
 * 两种模式的输入输出
 */
const zModes = {
  /** 全量翻译，输入一些文件，输出一些翻译后的文件 */
  full: {
    /** 输入参数 */
    input: z.object({
      mode: z.enum(["full"]),
      /** 输入的文件内容 */
      files: zFileWithContent.array(),
      /** 输出的文件路径 */
      outputs: zFile.array(),
    }),
    /** 返回参数：翻译好的文件内容 */
    output: z.object({ outputs: zFileWithContent.array() }),
  },
  increment: {
    input: z.object({
      mode: z.enum(["increment"]),
      /** 输入的文件内容 */
      changes: zFileWithContentAndDiff.array(),
      /** 输出的文件路径 */
      files: zFileWithContent.array(),
    }),
    /** 返回参数：翻译内容的更新补丁 */
    output: z.object({ files: zFileWithContent.array() }),
  },
};
export async function translate(args: TranslateOptions) {
  const cwd = process.cwd();
  const model = models[args.model ?? "deepseek"];
  if (args.mode === "full") {
    type InputType = z.TypeOf<typeof zModes.full.input>;
    const files: InputType["files"] = [];
    const outputs: InputType["outputs"] = [];
    if (args.file.length !== args.language.length) {
      throw new Error("file and language must be same length");
    }
    for (let [index, filepath] of args.file.entries()) {
      let isOutput = true;
      filepath = path.resolve(cwd, filepath);
      if (fs.existsSync(filepath)) {
        const content = fs.readFileSync(filepath, "utf-8");
        if (content.trim() !== "") {
          isOutput = false;
          files.push({
            filepath: filepath,
            language: args.language[index],
            content: content,
          });
        }
      }
      if (isOutput) {
        outputs.push({
          filepath: filepath,
          language: args.language[index],
        });
      }
    }
    const input: InputType = {
      mode: args.mode,
      files: files,
      outputs: outputs,
    };
    /// 发送给AI，获得输出
    const output = await getAiOutput(
      await model(),
      zModes.full.output,
      JSON.stringify(input)
    );
    /// 处理输出
    output.outputs.forEach((file) => {
      fs.mkdirSync(path.dirname(file.filepath), { recursive: true });
      fs.writeFileSync(file.filepath, file.content);
    });
  } else {
    type InputType = z.TypeOf<typeof zModes.increment.input>;
    const files: InputType["files"] = [];
    const changes: InputType["changes"] = [];
    if (args.file.length !== args.language.length) {
      throw new Error("file and language must be same length");
    }
    for (let [index, filepath] of args.file.entries()) {
      filepath = path.resolve(cwd, filepath);
      let isFiles = true;
      let content = "";
      if (fs.existsSync(filepath)) {
        content = fs.readFileSync(filepath, "utf-8");
        if (content.trim() !== "") {
          const diff = await generateFilePatch({
            filepath,
            commit: args.commit,
          });
          if (diff !== "") {
            isFiles = false;
            changes.push({
              filepath: filepath,
              language: args.language[index],
              diff: diff,
              content: content,
            });
          }
        }
      }
      if (isFiles) {
        files.push({
          filepath: filepath,
          language: args.language[index],
          content: content,
        });
      }
    }
    const input: InputType = {
      mode: args.mode,
      changes: changes,
      files: files,
    };
    // console.log("input", input);

    /// 发送给AI，获得输出
    const output = await getAiOutput(
      await model(),
      zModes.increment.output,
      JSON.stringify(input)
    );
    /// 处理输出
    output.files.forEach((file) => {
      fs.mkdirSync(path.dirname(file.filepath), { recursive: true });
      const suffix = ".patch.json";
      if (file.filepath.endsWith(suffix)) {
        const targetFilepath = file.filepath.slice(0, -suffix.length);
        const parsedDiff = (JSON.parse(file.content) as ParsedDiff[])[0];
        parsedDiff.hunks.forEach((hunk) => {
          hunk.lines = hunk.lines.map((line) => {
            return line[0] === "=" ? " " + line.slice(1) : line;
          });
        });
        const result = applyPatch(
          fs.readFileSync(targetFilepath, "utf-8"),
          parsedDiff
        );
        if (result === false) {
          console.error("fail to apply patch", parsedDiff);
          return;
        }
        fs.writeFileSync(targetFilepath, result);
      } else {
        fs.writeFileSync(file.filepath, file.content);
      }
    });
  }
}

interface GeneratePatchOptions {
  /** 目标文件路径（绝对或相对路径） */
  filepath: string;
  /** 目标提交 hash 或引用（默认 HEAD） */
  commit?: string;
  /** git 仓库目录 */
  gitRoot?: string;
}

const gitRootDir = func_remember(() =>
  execSync("git rev-parse --show-toplevel", { encoding: "utf-8" }).trim()
);
export async function generateFilePatch(
  options: GeneratePatchOptions
): Promise<string> {
  const { filepath, commit = "HEAD" } = options;

  // 获取 Git 仓库根目录
  const rootDir = options.gitRoot ?? gitRootDir(); // execSync('git rev-parse --show-toplevel', { encoding: 'utf-8' }).trim()

  // 解析绝对路径并验证文件存在
  const absolutePath = path.resolve(process.cwd(), filepath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }

  // 转换为仓库相对路径
  const relativePath = path.relative(rootDir, absolutePath);

  try {
    // 生成补丁命令
    const cmd = `git diff ${commit} -- ${JSON.stringify(relativePath)}`;

    // 执行并返回补丁内容
    return execSync(cmd, {
      cwd: rootDir,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"], // 忽略 stderr
    }).trim();
  } catch (error) {
    // 处理常见错误
    if (error instanceof Error) {
      if (/unknown revision/.test(error.message)) {
        throw new Error(`Invalid commit hash: ${commit}`);
      }
      if (/bad revision/.test(error.message)) {
        throw new Error(`Cannot find parent commit for: ${commit}`);
      }
    }
    throw new Error(
      `Failed to generate patch: ${
        error instanceof Error ? error.message : error
      }`
    );
  }
}

if (import_meta_ponyfill(import.meta).main) {
  const args = parseArgs(process.argv.slice(2), {
    string: ["mode", "commit", "model"],
    collect: ["file", "language", "env-file"],
    alias: {
      m: "mode",
      f: "file",
      l: "language",
    },
    default: {
      mode: "full",
      "env-file": [".env.local"],
      commit: "HEAD~1",
    },
  });

  console.log("args", args);

  config({ path: [".env", ...(args["env-file"] as string[])], override: true });

  translate(zTranslateOptions.parse(args));
}

/**
 * eg:
 * `node ./scripts/i18n.ts -f ./docs/intro.md -f ./docs/en/intro.md -l zh-Hans -l en`
 * `node ./scripts/i18n.ts --mode increment -f ./docs/intro.md -f ./docs/en/intro.md -l zh-Hans -l en`
 */
