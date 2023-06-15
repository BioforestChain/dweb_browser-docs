import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "introduction",
    icon: "note",
    link: "/app",
  },
  { text: "plaoc", icon: "discover", link: "/plaoc/" },
  // { text: "service", icon: "discover", link: "/service/" },
  // {
  //   text: "systemApp",
  //   icon: "creative",
  //   prefix: "/systemApp/",
  //   children: [
  //     {
  //       text: "notification",
  //       icon: "creative",
  //       prefix: "notification/",
  //       link: "notification/"
  //     },
  //     {
  //       text: "bnrtc",
  //       icon: "config",
  //       prefix: "bnrtc/",
  //       link: "bnrtc/"
  //     },
  //     {
  //       text: "database",
  //       icon: "config",
  //       prefix: "database/",
  //       link: "database/"
  //     },
  //   ],
  // },
]);
