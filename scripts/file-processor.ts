import fs from "fs";
import path from "path";
import frontmatter from "front-matter";
import { I18nConfig } from "./config.ts";

export class FileProcessor {
  constructor(private config: I18nConfig) {}

  processMarkdown(content: string) {
    const { attributes, body } = frontmatter(content);
    const { ignoreBlocks, i11nBlocks } = this.parseComments(body);

    return {
      frontmatter: attributes,
      content: body,
      ignoreBlocks,
      i11nBlocks,
    };
  }

  processJson(content: string) {
    const data = JSON.parse(content);
    const ignoredKeys = new Set<string>();
    const i11nKeys = new Map<string, string>();

    for (const [key, value] of Object.entries(data)) {
      if (key.startsWith("//")) {
        if (Array.isArray(value) && value.includes("i18n-ignore")) {
          ignoredKeys.add(key.replace("//", ""));
        }
        if (Array.isArray(value) && value.some((v) => v.startsWith("i11n:"))) {
          const msg =
            value.find((v) => v.startsWith("i11n:"))?.split(":")[1] || "";
          i11nKeys.set(key.replace("//", ""), msg);
        }
      }
    }

    return { data, ignoredKeys, i11nKeys };
  }

  private parseComments(content: string) {
    const ignoreRegex =
      /<!-- i18n-ignore-start -->([\s\S]*?)<!-- i18n-ignore-end -->/g;
    const i11nRegex = /<!-- i11n-start: (.*?) -->([\s\S]*?)<!-- i11n-end -->/g;

    return {
      ignoreBlocks: [...content.matchAll(ignoreRegex)],
      i11nBlocks: [...content.matchAll(i11nRegex)],
    };
  }

  walkDir(dir: string) {
    const results: string[] = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (this.config.ignore?.some((isIgnore) => isIgnore(fullPath))) return;

      if (stat?.isDirectory()) {
        results.push(...this.walkDir(fullPath));
      } else if (this.isTargetFile(fullPath)) {
        results.push(fullPath);
      }
    });

    return results;
  }

  private isTargetFile(filePath: string) {
    const ext = path.extname(filePath);
    return [".md", ".json"].includes(ext);
  }
}
