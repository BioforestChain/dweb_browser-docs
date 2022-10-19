import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "discover",
      text: "Plugin",
      prefix: "/plugin/",
      link: "plugin",
      children: [
        "bottomBar/",
        "topBar/",
        "dialogs/",
        "keyboard/",
        "statusBar/",
        "navigationBar/",
        "system/",
      ]
    },
    {
      text: "Service",
      icon: "note",
      link: "service/README.md",
      children: "structure",
    },
    {
      text: "SystemApp",
      icon: "note",
      link: "systemApp/README.md",
      children: "structure",
    },
    {
      text: "Tools",
      icon: "note",
      link: "tools/README.md",
      children: "structure",
    }
  ],
});
