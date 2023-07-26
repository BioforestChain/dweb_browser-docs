import { sidebar } from "vuepress-theme-hope";


export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "Plaoc APP",
      icon: "app",
      prefix: "app/",
      link: "app",
      children: [
        {
          text: "命令行打包工具",
          link: "/app/bundle/",
        },
        {
          text: "开发者工具",
          link: "/app/developer-tool/",
        },
      ]
    },
    {
      icon: "discover",
      text: "Plaoc",
      prefix: "/plaoc/",
      link: "plaoc/README.md",
      children: [
        {
          text: "WebComponent",
          icon: "discover",
          prefix: "/plaoc/webcomponent",
          link: "/plaoc/web-component/index.md",
          children: [
            {
              text: "HTMLDwebStatusBarElement",
              icon: "discover",
              prefix: "/plaoc/webcomponent/status-bar",
              link: "/plaoc/web-component/status-bar/index.md",
            }
          ]
        },
        {
          text: "Plugin",
          icon: "discover",
          prefix: "/plaoc/plugin",
          link: "/plaoc/plugin/index.md",
          children: [
            {
              text: "StatusBarPlugin",
              icon: "discover",
              prefix: "/plaoc/plugin/status-bar",
              link: "/plaoc/plugin/status-bar/index.md",
            }
          ]
        },

        // {
        //   text: "DwebServiceWorker",
        //   link: "/plaoc/dweb-service-worker/",
        // },
        // {
        //   text: "BarcodeScanning",
        //   link: "/plaoc/barcode-scanning/"
        // },
        // {
        //   text: "HTMLDwebStatusBarElement",
        //   link: "/plaoc/status-bar/",
        // },
        // {
        //   text: "VirtualKeyboard",
        //   link: "/plaoc/virtual-keyboard/",
        // },
        // {
        //   text: "NavigationBar",
        //   link: "/plaoc/navigation-bar/",
        // },
        // {
        //   text: "SafeArea",
        //   link: "/plaoc/safe-area"
        // },
        // {
        //   text: "Biometrics",
        //   link: "/plaoc/biometrics/",
        // },
        // {
        //   text: "CloseWatcher",
        //   link: "/plaoc/close-watcher/",
        // },
        // {
        //   text: "Haptics",
        //   link: "/plaoc/haptics/"
        // },
        // {
        //   text: "Network",
        //   link: "/plaoc/network/"
        // },
        // {
        //   text: "Share",
        //   link: "/plaoc/share/"
        // },
        // // {
        // //   text: "SplashScreen",
        // //   link: "/plaoc/splash-screen/"
        // // },
        // {
        //   text: "Toast",
        //   link: "/plaoc/toast/"
        // },
        // {
        //   text: "Torch",
        //   link: "/plaoc/torch/"
        // },
        // {
        //   text: "Device",
        //   link: "/plaoc/device/"
        // },
        // {
        //   text: "MWebView",
        //   link: "/plaoc/mwebview/"
        // },
      ],
    },
    {
      text: "Service",
      icon: "note",
      prefix: "service/README.md",
      link: "service/README.md",
    //   children: [
    //     {
    //       text: "VFS",
    //       link: "/service/vfs/",
    //     },
    //     {
    //       text: "SSR",
    //       link: "/service/ssr/",
    //     },
    //     {
    //       text: "TUI",
    //       link: "/service/tui/",
    //     },
    //     {
    //       text: "GUI",
    //       link: "/service/gui/",
    //     },
    //   ],
    },
    // {
    //   text: "SystemApp",
    //   icon: "note",
    //   prefix: "systemApp",
    //   link: "systemApp/README.md",
    //   children: [
    //     {
    //       text: "BNRTC",
    //       link: "/systemApp/bnrtc/",
    //     },
    //     {
    //       text: "DATABASE",
    //       link: "/systemApp/database/",
    //     },
    //     {
    //       text: "NOTIFICATION",
    //       link: "/systemApp/notification/",
    //     },
    //   ],
    // },
  ],
});
