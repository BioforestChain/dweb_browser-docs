import { defaultHoverInfoProcessor, transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { groupIconPlugin } from "vitepress-plugin-group-icons";
import { defineConfig } from "vitepress";
// import { ar, arSearch } from "./ar.mjs";
import { en, enSearch } from "./en.mjs";
// import { es, esSearch } from "./es.mjs";
import vite from "./vite.config.mjs";
import { zh, zhSearch } from "./zh.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DwebBrowser",
  description: "一个提供分布式网络 | 应用附着的浏览器。",
  lastUpdated: true,
  cleanUrls: false,
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    config(md) {
      md.use(groupIconPlugin)
    },
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          compilerOptions: {
            target: 99,
            moduleResolution: 99,
            module: 199,
          }
        },
        // errorRendering: 'hover',
        processHoverInfo(info) {
          return defaultHoverInfoProcessor(info)
            // Remove shiki_core namespace
            .replace(/_shikijs_core\w*\./g, '')
        },
      }),
    ],
  },
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
  ],
  themeConfig: {
    logo: "/logo.svg",

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/BioforestChain/dweb_browser",
      },
    ],

    search: {
      provider: "local",
      options: {
        locales: { ...zhSearch, ...enSearch }, // ...arSearch, ...esSearch
      },
    },
  },
  locales: {
    root: { label: "简体中文", ...zh },
    en: { label: "English", ...en },
    // es: { label: "Spanish", ...es },
    // ar: { label: "Arabic", ...ar },
  },
  vite,
});
