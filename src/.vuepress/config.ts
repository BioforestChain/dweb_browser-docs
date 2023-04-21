import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "DwebBrowser",
      description: "DwebBrowser documentation",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "DwebBrowser",
      description: "DwebBrowser 文档",
    },
  },

  theme,
  plugins: [searchPlugin],
  shouldPrefetch: false,
});
