import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "plugin", icon: "discover", link: "/plugin/" },
  { text: "service", icon: "discover", link: "/service/" },
  {
    text: "systemApp",
    icon: "creative",
    prefix: "/systemApp/",
    children: [
      {
        text: "notification",
        icon: "creative",
        prefix: "notification/",
        link: "notification/"
      },
      {
        text: "bnrtc",
        icon: "config",
        prefix: "bnrtc/",
        link: "bnrtc/"
      },
      {
        text: "database",
        icon: "config",
        prefix: "database/",
        link: "database/"
      },
    ],
  },
  {
    text: "dweb browser Docs",
    icon: "note",
    link: "https://github.com/BioforestChain/dweb_browser-docs",
  },
]);
