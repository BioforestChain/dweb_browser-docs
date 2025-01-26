import OpenAI from "openai";
import { func_remember, str_trim_indent } from "@gaubee/util";
import { z } from "zod";
import { parseArgs } from "@std/cli/parse-args";
import { import_meta_ponyfill } from "import-meta-ponyfill";
import fs from "node:fs";
import path from "node:path";
import { config } from "dotenv";
import { execSync } from "node:child_process";

const zTranslateOptions = z.object({
  file: z.string().array().nonempty(),
  language: z.string().array().nonempty(),
  mode: z.enum(["full", "increment"]),
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
/** 差异信息，一种基于git-diff的内容 */
const zGitDiff = z.string();
/** 补丁信息，一种基于git-patch的内容 */
const zGitPatch = z.string();
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
async function translate(args: z.TypeOf<typeof zTranslateOptions>) {
  const cwd = process.cwd();
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
    const output = zModes.full.output.parse(
      await getOpenaiOutput(JSON.stringify(input))
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
    const output = zModes.increment.output.parse(
      await getOpenaiOutput(JSON.stringify(input))
    );
    /// 处理输出
    output.files.forEach((file) => {
      fs.mkdirSync(path.dirname(file.filepath), { recursive: true });
      fs.writeFileSync(file.filepath, file.content);
    });
  }
}

const getOpenaiOutput = async (user_content: string) => {
  const openai = new OpenAI({
    baseURL: z
      .string({ required_error: "required env.AI_GATEWAY_ENDPOINT" })
      .parse(process.env.AI_GATEWAY_ENDPOINT),
    apiKey: z
      .string({ required_error: "required env.OPENAI_API_KEY" })
      .parse(process.env.OPENAI_API_KEY),
  });

  const stream = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: str_trim_indent(
          `
                You are a sophisticated translation engine with expertise in GitHub content,
                capable of translating texts accurately into the specified target language, 
                preserving technical terms, code snippets, markdown formatting, and platform-specific language.
                Do not add any explanations or annotations to the translated text.`
        ),
      },
      {
        role: "system",
        content: str_trim_indent(`
          ## 全量翻译的输入输出规范
          输入格式（JSON Schema）：
          \`\`\`json
          {
            "mode": "full",
            "files": [{
              "filepath": "<输入路径>",
              "language": "<输入语言>",
              "content": "<文件内容>"
            }],
            "outputs": [{
              "filepath": "<目标路径>",
              "language": "<目标语言>"
            }]
          }
          \`\`\`
      
          输出格式（JSON Schema）：
          \`\`\`json
          {
            "outputs": [
              {
                "filepath": "<目标路径>",
                "language": "<目标语言>",
                "content": "<翻译后的完整内容>"
              }
            ]
          }
          \`\`\`

          ## 增量翻译的输入输出规范
          输入格式（JSON Schema）：
          \`\`\`json
          {
            "mode": "full",
            // 这些是有过变更的文件内容
            "changes": [{
              "filepath": "<输入路径>",
              "language": "<输入语言>",
              "content": "<输入文件内容>",
              "diff": "<输入文件的变更信息>"
            }],
            // 这些是没有变更的文件内容
            "files": [{
              "filepath": "<目标路径>",
              "language": "<目标语言>",
              "content": "<目标文件内容（可能是空的；也有可能是上一次翻译的内容；也可能是翻译到中途断掉的）>"
            }]
          }
          \`\`\`
          输出格式（JSON Schema）：
          \`\`\`json
          {
            "files": [
              {
                "filepath": "<目标路径> or <目标路径.patch>",
                "language": "en",
                "content": "<翻译后的完整内容> or <git apply 格式的内容>"
              }
            ]
          }
          \`\`\`
      
          ## 翻译规则
          1. 结构保留：
          - Markdown：保留标题层级、代码块、列表结构、链接锚点
          - JSON：保持键名不变，仅翻译值（含转义字符处理）
          - 注释标记：保留 <!-- i18n-ignore --> 等标记的原始位置
      
          2. 标记处理：
          • 忽略区块：
          <!-- i18n-ignore-start -->...<!-- i18n-ignore-end --> → 保持原样
      
          • 本土化标记：
          <!-- i11n-start: {提示} -->...<!-- i11n-end --> → 
          - 根据提示进行创意改编（如：中文成语 → 等效英文谚语）
          - 在翻译后添加 <!-- i11n-reason: 改编说明 -->
      
          3. JSON特殊字段：
          "//key": ["i18n-ignore"] → 跳过对应键值的翻译
          "//key": ["i11n: 提示"] → 按提示本地化翻译，保留原始键
      
          4. 混合内容处理：
          [中文]（原文） → [英文]（翻译） // 保留注释
          "key": "值" // 保留行尾注释
          
          5. 对于增量翻译模式，需要理解参数和返回值的含义：
          - 首先是changes参数，它是指某一个文件的变更记录，使用\`git diff\`获得的差异信息
          - 然后是files参数，是指其它没有变更的文件。
          - 最后关于返回值files，会有两种格式：
          - 第一种是翻译完成的目标文件，包含了全量的内容；
          - 第二种是 patch 文件后缀，它是可以通过\`git apply\`作用到目标文件的补丁文件，因为如果变更不多，只是几行，那么返回第一种全量内容就没太大意义，所以使用patch格式，可以获得更快的输出结果；
          -
          - 关于changes参数的变更内容，主要关注这两种可能：
          - 第一种是只修改了一种语言，这种情况下，输出的files和输入的files是一一对应的。
          - 第二种是同时修改了多种语言，这就意味着，变更者是知道多语言的，只不过根据顺序，排在前面的文件，作为源文件的优先级更高。这时候要注意的是，有可能changes[0]改动了第二行，然后changes[1]改动了第10行，那么最终输出的files中，也应该包含这两个changes文件，因为需要将changes[0]改动的第3行翻译给changes[1]，同时也要讲changes[1]改动的第10行翻译给changes[0]。
          - 
          - 关于files参数的内容，要关注这有三种可能：
          - 第一种是，它是一个空文件，那么此时要参考changes[0]的完整内容，做完整的翻译
          - 第二种是，它是一个翻译到一半就断开的内容，可能是人为的翻译不完整，也有可能是上一次翻译输出不完整，不论如何，仍然是优先参考changes[0]的完整内容，然后参照现有的内容，对剩余没有翻译的部分做补全，通常会返回补丁，但是如果补丁的内容长度已经接近甚至超过翻译后的原文，这时候直接返回原文即可。
          - 第三种是，它是一个完整的翻译后的内容，这时候主要参考changes[0]的diff内容，来返回补丁内容。

          ## 质量要求
          • 术语一致性：保持相同上下文术语统一
          • 格式对齐：译文长度与原文段落结构匹配
          • 动态内容：{variable} 占位符保持原样
          • 文化适配：日期格式、度量单位自动转换
        `),
      },
      {
        role: "user",
        content: user_content,
      },
    ],
    model: "deepseek-chat",
    response_format: {
      type: "json_object",
    },
    stream: true,
  });
  let res = "";
  for await (const chunk of stream) {
    const part = chunk.choices[0].delta.content ?? "";
    res += part;
    process.stdout.write(part);
  }
  return JSON.parse(res);
};

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
    string: ["mode", "commit"],
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
 * `node .\scripts\i18n.ts -f .\docs\intro.md -f .\docs\en\intro.md -l zh-Hans -l en`
 * `node .\scripts\i18n.ts --mode increment -f .\docs\intro.md -f .\docs\en\intro.md -l zh-Hans -l en`
 */
