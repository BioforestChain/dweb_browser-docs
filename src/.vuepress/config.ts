import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DwebBrowser",
      description: "DwebBrowser 文档",
    },
    "/en/": {
      lang: "en-US",
      title: "DwebBrowser",
      description: "DwebBrowser documentation",
    },
  },

  theme,
  plugins: [searchPlugin],
  shouldPrefetch: false,
});
