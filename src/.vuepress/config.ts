import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Plaoc",
      description: "plaoc system Runtime documentation",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Plaoc",
      description: "plaoc 系统运行时文档",
    },
  },

  theme,
  plugins: [searchPlugin],
  shouldPrefetch: false,
});
