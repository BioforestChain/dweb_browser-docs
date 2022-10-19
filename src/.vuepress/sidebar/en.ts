import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Plugin",
      prefix: "/plugin/",
      link: "plugin/README.md",
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
      icon: "note",
      prefix: "service/README.md",
      link: "plugin/README.md",
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
      icon: "note",
      prefix: "systemApp",
      link: "systemApp/README.md",
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
    }, {
      text: "Tools",
      icon: "note",
      prefix: "tools/",
      link: "tools",
      children: [
        {
          text: "BUNDLE",
          link: "/tools/bundle/",
        },
      ]
    },
  ],
});
