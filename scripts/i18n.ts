import OpenAI from "openai";
import { str_trim_indent } from "@gaubee/util";
import "dotenv/config";
import { z } from "zod";
import { parseArgs } from "@std/cli/parse-args";
import { import_meta_ponyfill } from "import-meta-ponyfill";
import fs from "node:fs";
import path from "node:path";

const openai = new OpenAI({
  baseURL: z
    .string({ required_error: "required env.AI_GATEWAY_ENDPOINT" })
    .parse(process.env.AI_GATEWAY_ENDPOINT),
  apiKey: z
    .string({ required_error: "required env.OPENAI_API_KEY" })
    .parse(process.env.OPENAI_API_KEY),
});

const zTranslateOptions = z.object({
  file: z.string().array().nonempty(),
  language: z.string().array().nonempty(),
  mode: z.enum(["full", "increment"]),
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
    output: zFileWithContent.array(),
  },
  increment: {
    input: z.object({
      mode: z.enum(["increment"]),
      /** 输入的文件内容 */
      files: zFileWithContent.array(),
      diffs: zGitDiff,
      /** 输出的文件路径 */
      outputs: zFile.array(),
    }),
    /** 返回参数：翻译好的文件内容 */
    output: zGitPatch,
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
    const result = zModes.full.output.parse(
      await getOutput(JSON.stringify(input))
    );
    result.forEach((file) => {
      fs.mkdirSync(path.dirname(file.filepath), { recursive: true });
      fs.writeFileSync(file.filepath, file.content);
    });
  } else {
    // TODO
  }
}

const getOutput = async (user_content: string) => {
  const completion = await openai.chat.completions.create({
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
          # Translation Protocol v1.2
      
          ## 输入输出规范
          输入格式（JSON Schema）：
          {
            "mode": "full",
            "files": [{
              "filepath": "docs/zh-CN/guide.md",
              "language": "zh-CN",
              "content": "文件内容"
            }],
            "outputs": [{
              "filepath": "docs/en/guide.md",
              "language": "en"
            }]
          }
      
          输出格式（严格遵循）：
          [
            {
              "filepath": "输出路径",
              "language": "目标语言",
              "content": "翻译后的完整内容"
            }
          ]
      
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
  });
  return JSON.parse(completion.choices[0].message.content!);
};

if (import_meta_ponyfill(import.meta).main) {
  const args = parseArgs(process.argv.slice(2), {
    string: ["mode"],
    collect: ["file", "language"],
    alias: {
      m: "mode",
      f: "file",
      l: "language",
    },
    default: {
      mode: "full",
    },
  });

  console.log("args", args);

  translate(zTranslateOptions.parse(args));
}
