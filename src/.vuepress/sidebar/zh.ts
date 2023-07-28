import { sidebar } from "vuepress-theme-hope";
import zhApp from "./zh-app";
import zhPlaocInterface from "./zh-plaoc-interface";
import zhPlaocPluginBarcodeScanner from "./zh-plaoc-plugin-barcode-scanner";
import zhPlaocPluginBiometrics from "./zh-plaoc-plugin-biometrics";
import zhPlaocPluginNavigationBar from "./zh-plaoc-plugin-navigation-bar";
import zhPlaocPluginSafeArea from "./zh-plaoc-plugin-safe-area";
import zhPlaocPluginStatusBar from "./zh-plaoc-plugin-status-bar";
import zhPlaocPluginVirtualKeyboard from "./zh-plaoc-plugin-virtual-keyboard";
import zhPlaocPlugin from "./zh-plaoc-plugin"
import zhPlaoc from "./zh-plaoc"



export const zhSidebar = sidebar({
  // "/": [
  //   "",
  //   {
  //     text: "Plaoc APP",
  //     icon: "app",
  //     prefix: "app/",
  //     link: "app/",
  //     children: [
  //       {
  //         text: "命令行打包工具",
  //         link: "/app/bundle/",
  //       },
  //       {
  //         text: "开发者工具",
  //         link: "/app/developer-tool/",
  //       },
  //     ]
  //   },
  //   {
  //     icon: "discover",
  //     text: "Plaoc",
  //     prefix: "/plaoc/",
  //     link: "plaoc/README.md",
  //   },
  //   {
  //     text: "Service",
  //     icon: "note",
  //     prefix: "service/README.md",
  //     link: "service/README.md",
  //   //   children: [
  //   //     {
  //   //       text: "VFS",
  //   //       link: "/service/vfs/",
  //   //     },
  //   //     {
  //   //       text: "SSR",
  //   //       link: "/service/ssr/",
  //   //     },
  //   //     {
  //   //       text: "TUI",
  //   //       link: "/service/tui/",
  //   //     },
  //   //     {
  //   //       text: "GUI",
  //   //       link: "/service/gui/",
  //   //     },
  //   //   ],
  //   },
  // ],
  "/app/": zhApp,
  "/plaoc/": zhPlaoc,
  "/plaoc/plugin/": zhPlaocPlugin,
  "/plaoc/plugin/status-bar/": zhPlaocPluginStatusBar,
  "/plaoc/plugin/navigation-bar/": zhPlaocPluginNavigationBar,
  "/plaoc/plugin/safe-area/": zhPlaocPluginSafeArea,
  "/plaoc/plugin/virtual-keyboard/": zhPlaocPluginVirtualKeyboard,
  "/plaoc/plugin/barcode-scanner/": zhPlaocPluginBarcodeScanner,
  "/plaoc/plugin/biometrics/": zhPlaocPluginBiometrics,
  "/plaoc/interface/": zhPlaocInterface,

});


