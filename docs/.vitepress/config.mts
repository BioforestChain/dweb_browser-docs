import {
  defaultHoverInfoProcessor,
  transformerTwoslash,
} from "@shikijs/vitepress-twoslash";
import { defineConfig } from "vitepress";
import { groupIconMdPlugin } from "vitepress-plugin-group-icons";
// import { es, esSearch } from "./es.mts";
import { getAllLocaleConfig, i18n, rootLang } from "./i18n.mts";
import vite from "./vite.config.mts";

const all = getAllLocaleConfig();

/**
 * 开发模式下，默认禁用搜索能力，如果有需要，手动开启
 */
const enableSearch = process.env.npm_lifecycle_event === "build";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DwebBrowser",
  lastUpdated: true,
  cleanUrls: false,
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    config(md) {
      md.use(groupIconMdPlugin);
    },
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          compilerOptions: {
            target: 99,
            moduleResolution: 99,
            module: 199,
          },
        },
        // errorRendering: 'hover',
        processHoverInfo(info) {
          return (
            defaultHoverInfoProcessor(info)
              // Remove shiki_core namespace
              .replace(/_shikijs_core\w*\./g, "")
          );
        },
      }),
    ] as any,
  },
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/BioforestChain/dweb_browser",
      },
    ],

    search: enableSearch
      ? {
          provider: "local",
          options: {
            locales: Object.keys(all).reduce((locales, key) => {
              locales[key === rootLang ? "root" : key] = all[key].search;
              return locales;
            }, {}),
          },
        }
      : undefined,
  },
  locales: Object.keys(all).reduce((locales, key) => {
    locales[key === rootLang ? "root" : key] = i18n(key, all[key]);
    return locales;
  }, {}),
  vite: vite as any,
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "dweb-wallpaper",
      },
    },
  },
});
