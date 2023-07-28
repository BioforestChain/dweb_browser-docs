import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "介绍",
    icon: "note",
    link: "/app/",
  },
  { text: "前端插件", icon: "discover", link: "/plaoc/" },
  // { text: "服务", icon: "discover", link: "/service/" },
  // {
  //   text: "系统APP",
  //   icon: "creative",
  //   prefix: "/systemApp/",
  //   children: [
  //     {
  //       text: "消息中心",
  //       icon: "creative",
  //       prefix: "notification/",
  //       link: "notification/"
  //     },
  //     {
  //       text: "bnrtc网络",
  //       icon: "config",
  //       prefix: "bnrtc/",
  //       link: "bnrtc/"
  //     },
  //     {
  //       text: "数据服务",
  //       icon: "config",
  //       prefix: "database/",
  //       link: "database/"
  //     },
  //   ],
  // },
]);
