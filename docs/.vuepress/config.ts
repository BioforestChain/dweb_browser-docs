import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/plaoc-docs/",
  title: "plaoc Documentation",
  description: "BFChain Plaoc",
  theme: defaultTheme({
    // 默认主题配置
    repo: "https://github.com/BioforestChain/plaoc",
    docsRepo: "https://github.com/BioforestChain/plaoc-docs",
    docsBranch: "main",
    docsDir: "docs",
    sidebar: [
      {
        text: "Navigation Bar",
        link: "/plugin/bottomBar/",
      },
      {
        text: "Top Bar",
        link: "/plugin/topBar/",
      },
      {
        text: "status Bar",
        link: "/plugin/statusBar/",
      },
      {
        text: "icon",
        link: "/plugin/icon/",
      },
      {
        text: "keyboard",
        link: "/plugin/keyboard/",
      },
      {
        text: "dialogs",
        link: "/plugin/dialogs/",
      },
    ],
  }),
  plugins: [searchPlugin],
});
