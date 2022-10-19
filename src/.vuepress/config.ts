import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Plaoc Docs",
      description: "plaoc system Runtime documentation",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Plaoc 文档",
      description: "plaoc 系统运行时文档",
    },
  },

  theme,
  plugins: [searchPlugin],
  shouldPrefetch: false,
});
