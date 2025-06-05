import { type DefaultTheme } from "vitepress";
export function navPlugins(
  sidebarPlugins: DefaultTheme.SidebarItem[]
): (DefaultTheme.NavItemChildren | DefaultTheme.NavItemWithLink)[] {
  let navItems: (
    | DefaultTheme.NavItemChildren
    | DefaultTheme.NavItemWithLink
  )[] = [];

  for (let [_, item] of sidebarPlugins.entries()) {
    const base = item.base ?? "";
    if (Array.isArray(item.items)) {
      navItems = navItems.concat(
        item.items.map((it) => {
          if (Array.isArray(it.items)) {
            return {
              text: it.text!,
              items: it.items.map((child) => {
                return { text: child.text!, link: base + child.link! };
              }),
            };
          } else {
            return { text: it.text!, link: base + it.link! };
          }
        })
      );
    } else {
      navItems.push({ text: item.text!, link: base + item.link! });
    }
  }

  return navItems;
}
import fs from "node:fs";
import path from "node:path";

/**
 * 注意，如果要修改这个函数，要注意几个点：
 * 1. link必须和vitepress最终生成的link完全匹配，否则“pre-page/next-page”会异常 https://github.com/vuejs/vitepress/issues/3377
 * @param dir
 * @param parent_base
 * @returns
 */
export const dirToSilderItem = (dir: string, parent_base = "/") => {
  const dirbasename = path.basename(dir);
  const text = dirbasename;
  const base = parent_base + dirbasename + "/";
  const items: DefaultTheme.SidebarItem[] = [];
  const result = {
    // base,
    text,
    link: undefined as string | undefined,
  };

  for (const name of fs.readdirSync(dir)) {
    const entiryPath = path.join(dir, name);
    const stat = fs.statSync(entiryPath);
    if (stat.isDirectory()) {
      const item = dirToSilderItem(entiryPath, base);
      if (item.link || "items" in item) {
        items.push(item);
      }
    } else if (/\.(md|mdx)$/.test(name.toLowerCase()) && stat.isFile()) {
      const { content, metadata } = getMarkdownMatadata<{
        sidebar_text?: string;
        sidebar_link?: boolean;
      }>(fs.readFileSync(entiryPath, "utf-8"));
      const lines = content.split("\n");
      let title = metadata.sidebar_text || "";
      if (!title) {
        lines.some((line) => {
          if (line.startsWith("#")) {
            title = line.slice(line.indexOf(" ")).trim();
            return title;
          }
        });
      }
      const basename = path.parse(name).name;
      const link = base + basename;

      if (basename.toLowerCase() === "index") {
        if (metadata.sidebar_link !== false) {
          /// 这里的link必须和vitepress最终生成的link完全匹配
          result.link = base;
        }
        result.text = title;
      } else {
        items.push({ text: title || basename, link: link });
      }
    }
  }
  if (items.length) {
    return {
      collapsed: false,
      items,
      ...result,
    };
  }
  return result;
};

import matter from "front-matter";

const getMarkdownMatadata = <T = {}>(
  content: string | Buffer,
  defaultMetadata?: T
) => {
  const res = matter<T>(content as string);
  return {
    metadata: { ...defaultMetadata, ...res.attributes } as T,
    content: res.body,
  };
};

// console.log(
//   getMarkdownMatadata(
//     fs.readFileSync(
//       path.join(import.meta.dirname, "../developer/plaoc/plugins/index.md"),
//       "utf-8"
//     )
//   )
// );
