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
          text: "DwebServiceWorker",
          link: "/plugin/dweb-service-worker/",
        },
        {
          text: "BarcodeScanning",
          link: "/plugin/barcode-scanning/"
        },
        {
          text: "Biometrics",
          link: "/plugin/biometrics/",
        },
        // {
        //   text: "Dialogs",
        //   link: "/plugin/dialogs/",
        // },
        {
          text: "StatusBar",
          link: "/plugin/status-bar/",
        },
        {
          text: "VirtualKeyboard",
          link: "/plugin/virtual-keyboard/",
        },
        {
          text: "NavigationBar",
          link: "/plugin/navigation-bar/",
        },
        // {
        //   text: "Android/iOS-API",
        //   link: "/plugin/system/",
        // },
        {
          text: "SafeArea",
          link: "/plugin/safe-area"
        },
        // {
        //   text: "Data Type",
        //   link: "/plugin/dataType/"
        // }
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
