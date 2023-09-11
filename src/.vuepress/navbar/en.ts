import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Plaoc",
    icon: "note",
    link: "/en/plaoc-app/",
  },
  { text: "Plugins", icon: "discover", link: "/en/plaoc-plugin/plugin/index.md" },
]);
