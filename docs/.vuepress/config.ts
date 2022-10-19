import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  // base: "/plaoc-docs/",
  title: "Plaoc",
  description: "BFChain Plaoc",
  theme: defaultTheme({
    // 默认主题配置
    repo: "https://github.com/BioforestChain/plaoc",
    docsRepo: "https://github.com/BioforestChain/plaoc-docs",
    docsBranch: "main",
    docsDir: "docs",
    sidebar: [
      {
        text: "Components", // 必要的
        link: "/plugin/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
          {
            text: "Bottom Bar",
            link: "/plugin/bottomBar/",
          },
          {
            text: "Top Bar",
            link: "/plugin/topBar/",
          },
          {
            text: "Dialogs",
            link: "/plugin/dialogs/",
          },
          {
            text: "Status Bar",
            link: "/plugin/statusBar/",
          },
          {
            text: "Keyboard",
            link: "/plugin/keyboard/",
          },
          {
            text: "NavigationBar",
            link: "/plugin/navigationBar/",
          },
          {
            text: "Android/iOS-API",
            link: "/plugin/system/",
          },
        ],
      },
      {
        text: "Service",
        link: "/service/",
        children: [
          {
            text: "VFS",
            link: "/service/vfs/",
          },
          {
            text: "SSR",
            link: "/service/ssr/",
          },
          {
            text: "TUI",
            link: "/service/tui/",
          },
          {
            text: "GUI",
            link: "/service/gui/",
          },
        ],
      },
      {
        text: "SystemApp",
        link: "/systemApp/",
        children: [
          {
            text: "BNRTC",
            link: "/systemApp/bnrtc/",
          },
          {
            text: "DATABASE",
            link: "/systemApp/database/",
          },
          {
            text: "NOTIFICATION",
            link: "/systemApp/notification/",
          },
        ],
      },
      {
        text: "Tools",
        link: "/tools/",
        children: [
          {
            text: "bundle",
            link: "/tools/bundle/",
          },
        ],
      },
    ],
  }),
  plugins: [searchPlugin],
});
