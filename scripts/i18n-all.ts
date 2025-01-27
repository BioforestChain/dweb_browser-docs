import { parseArgs } from "@std/cli/parse-args";
import { import_meta_ponyfill } from "import-meta-ponyfill";
import { z } from "zod";
import { walkFiles } from "@gaubee/nodekit";
import { translate, type TranslateOptions } from "./i18n.ts";
import { config } from "dotenv";
import { fileURLToPath } from "url";

const zTranslateAllOptions = z.object({
  language: z.string().array().min(2),
  mode: z.enum(["full", "increment"]),
  model: z.enum(["google", "deepseek"]).optional(),
  commit: z.string().optional(),
});
const importMeta = import_meta_ponyfill(import.meta);
export const translateAll = async (
  options: z.infer<typeof zTranslateAllOptions>
) => {
  /// 全量翻译模式，遍历全部内容，做翻译
  if (options.mode === "full") {
    const allTasks: TranslateOptions[] = [];
    /// 遍历所有的 md 文件 和必要 的json配置文件
    const allMdFiles = walkFiles(importMeta.nodeResolve("../docs"), {
      ignore(entry) {
        const IGNORE = true;
        const PICK = false;
        /// .开头的文件或者文件夹都忽略
        if (entry.name.startsWith(".")) {
          return IGNORE;
        }
        if (entry.isDirectory) {
          /// i18n开头的文件夹都忽略
          if (entry.name.startsWith("i18n")) {
            return IGNORE;
          }
          /// 其它文件夹继续遍历
          return PICK;
        } else {
          /// 只处理 .md 文件 和 .json 文件
          return (
            PICK === entry.name.endsWith(".md") || entry.name.endsWith(".json")
          );
        }
      },
    });
    for (const mdFile of allMdFiles) {
      allTasks.push({
        file: [
          mdFile.path,
          ...options.language
            .slice(1)
            .map((lang) =>
              fileURLToPath(
                importMeta.nodeResolve(
                  `../docs/i18n/${lang}/${mdFile.relativePath}`
                )
              )
            ),
        ],
        ...options,
      });
    }

    // 还有特殊的vitepress配置文件
    allTasks.push({
      file: [
        fileURLToPath(
          importMeta.nodeResolve(
            `../docs/.vitepress/i18n/${options.language[0]}.json`
          )
        ),
        ...options.language
          .slice(1)
          .map((lang) =>
            fileURLToPath(
              importMeta.nodeResolve(`../docs/.vitepress/i18n/${lang}.json`)
            )
          ),
      ],
      ...options,
    });

    console.log(`tasks: ${allTasks.length}`);
    const restTasks = allTasks.slice();
    const translateQueue = async () => {
      while (true) {
        const task = restTasks.shift();
        if (task == null) {
          break;
        }
        console.log(`translate:`, task.file[0], "=>", task.file.slice(1));
        await translate(task);
        console.log(
          (
            ((allTasks.length - restTasks.length) / allTasks.length) *
            100
          ).toFixed(2) + "%"
        );
      }
    };
    await Promise.all([
      // 四路并发
      translateQueue(),
      translateQueue(),
      translateQueue(),
      translateQueue(),
    ]);
  }
};

if (importMeta.main) {
  const args = parseArgs(process.argv.slice(2), {
    string: ["mode", "commit", "model"],
    collect: ["language", "env-file"],
    alias: {
      m: "mode",
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

  translateAll(zTranslateAllOptions.parse(args));
}

/**
 * eg:
 * `node ./scripts/i18n-all.ts -l zh-Hans -l en`
 */
