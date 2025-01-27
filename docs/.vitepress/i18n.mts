import fs from "node:fs";
import path from "node:path";
import { type DefaultTheme, LocaleConfig } from "vitepress";
import { dirToSilderItem } from "./navPlugins";
import { formatWithOptions } from "node:util";

const html = String.raw;

export const rootLang = "zh-Hans";
export type LangConfig = typeof import("./i18n/zh-Hans.json");
export const getAllLocaleConfig = () => {
  return fs
    .readdirSync(path.resolve(import.meta.dirname, "./i18n"))
    .reduce((locales, i18n_file) => {
      const i18n_key = path.parse(i18n_file).name;
      locales[i18n_key] = JSON.parse(
        fs.readFileSync(
          path.join(import.meta.dirname, "./i18n", i18n_file),
          "utf-8"
        )
      );
      return locales;
    }, {}) as Record<string, LangConfig>;
};
export const i18n = (
  lang: string,
  m: LangConfig,
  dirBase = lang === rootLang ? "/" : `/${lang}/`,
  urlBase = dirBase
): LocaleConfig<DefaultTheme.Config>[string] => {
  const developerSlidbar = dirToSilderItem(
    path.join(import.meta.dirname, `..${dirBase}developer`),
    urlBase
  );
  const helpSlidbar = dirToSilderItem(
    path.join(import.meta.dirname, `..${dirBase}help`),
    urlBase
  );

  return {
    label: m.label,
    lang,
    description: m.description,

    themeConfig: {
      nav: [
        {
          text: developerSlidbar.text,
          link: `${urlBase}developer/`,
        },
        {
          text: helpSlidbar.text,
          link: `${urlBase}help/`,
        },
        {
          text: m.nav.maintainerDoc,
          items: [
            {
              text: m.nav.developmentLog,
              link: "https://github.com/BioforestChain/dweb_browser/blob/main/monthly.md",
            },
            {
              text: m.nav.gettingStartedMaintainer,
              link: "https://github.com/BioforestChain/dweb_browser/blob/main/GET_START_FOR_DEVELOPER.md",
            },
          ],
        },
        {
          text: m.nav.downloads,
          link: `${urlBase}downloads`,
        },
      ],

      sidebar: {
        [`${urlBase}dev`]: {
          base: "",
          items: [],
          ...developerSlidbar,
        },
        [`${urlBase}help`]: {
          base: "",
          items: [],
          ...helpSlidbar,
        },
      },

      editLink: {
        pattern:
          "https://github.com/BioforestChain/dweb_browser-docs/edit/main/docs/:path",
        text: m.editLink,
      },

      footer: {
        message: m.footer.message,
        copyright: html`<a
            id="beian"
            href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
          ></a>
          ${m.footer.copyright}
          <a href="https://github.com/BioforestChain/dweb_browser"
            >BioforestChain</a
          >`,
      },

      docFooter: m.docFooter,
      outline: m.outline,

      lastUpdated: {
        text: m.lastUpdated,
        formatOptions: {
          dateStyle: "short",
          timeStyle: "medium",
        },
      },

      langMenuLabel: m.langMenuLabel,
      returnToTopLabel: m.returnToTopLabel,
      sidebarMenuLabel: m.sidebarMenuLabel,
      darkModeSwitchLabel: m.darkModeSwitchLabel,
      lightModeSwitchTitle: m.lightModeSwitchTitle,
      darkModeSwitchTitle: m.darkModeSwitchTitle,
    },
  };
};
