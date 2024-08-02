import { defineConfig, type DefaultTheme } from "vitepress";
import { navPlugins } from "./navPlugins";

export const en = defineConfig({
  lang: "en-US",
  description:
    "A browser that provides distributed network and application attachment.",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/en/plaoc/": { base: "/en/plaoc/", items: sidebarPlaoc() },
      "/en/plugins/": { base: "/en/plugins/", items: sidebarPlugins() },
      "/en/server": { base: "/en/server/", items: sidebarPlaocServer() },
    },

    editLink: {
      pattern:
        "https://github.com/BioforestChain/dweb_browser-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2021-present BFChain",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Plaoc",
      activeMatch: "/plaoc/",
      items: navPlaoc(),
    },
    {
      text: "Plugins",
      activeMatch: "/plugins/",
      items: navPlugins(sidebarPlugins()),
    },
    {
      text: "Server",
      activeMatch: "/server/",
      items: navPlugins(sidebarPlaocServer()),
    },
    {
      text: "3.x.x",
      items: [
        {
          text: "Monthly",
          link: "https://github.com/BioforestChain/dweb_browser/blob/main/monthly.md",
        },
        {
          text: "Get Start for Developer",
          link: "https://github.com/BioforestChain/dweb_browser/blob/main/GET_START_FOR_DEVELOPER.md",
        },
      ],
    },
    {
      text: "Downloads",
      link: "/en/downloads",
    },
  ];
}

function sidebarPlaoc(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Plaoc App",
      collapsed: false,
      base: "/en/plaoc/",
      items: [
        { text: "Develop flow", link: "flow" },
        { text: "Redirect config", link: "redirect-config" },
        { text: "Manifest", link: "manifest" },
        { text: "@plaoc/cli", link: "cli" },
        { text: "@plaoc/is-dweb", link: "is-dweb" },
        { text: "App Store", link: "app-store" },
        { text: "deeplink", link: "deeplink" },
      ],
    },
    { text: "Plugin System", base: "/en/plugins/", link: "web-components" },
  ];
}

function navPlaoc(): (
  | DefaultTheme.NavItemChildren
  | DefaultTheme.NavItemWithLink
)[] {
  let navItems: (
    | DefaultTheme.NavItemChildren
    | DefaultTheme.NavItemWithLink
  )[] = [];

  const plaoc = sidebarPlaoc();
  for (let [_, item] of plaoc.entries()) {
    const base = item.base ?? "";
    if (Array.isArray(item.items)) {
      navItems = navItems.concat(
        item.items.map((it) => {
          return { text: it.text!, link: base + it.link! };
        })
      );
    }
  }

  return navItems;
}

function sidebarPlugins(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Plugins",
      base: "/en/plugins/",
      items: [
        { text: "Intro", link: "web-components" },
        {
          text: "API",
          collapsed: false,
          items: [
            { text: "CloseWatcher", link: "close-watcher" },
            { text: "DwebServiceWorker", link: "dweb-service-worker" },
          ],
        },
        {
          text: "Web Components",
          collapsed: false,
          items: [
            { text: "BarcodeScannerPlugin", link: "barcode-scanner" },
            { text: "BiometricsPlugin", link: "biometrics" },
            { text: "ClipboardPlugin", link: "clipboard" },
            { text: "ConfigPlugin", link: "config" },
            { text: "DevicePlugin", link: "device" },
            { text: "GeolocationPlugin", link: "geolocation" },
            { text: "HapticsPlugin", link: "haptics" },
            { text: "MediaPlugin", link: "media" },
            { text: "MotionSensorsPlugin", link: "motion-sensors" },
            { text: "NetworkPlugin", link: "network" },
            { text: "SharePlugin", link: "share" },
            { text: "ShortcutPlugin", link: "shortcut" },
            { text: "KeychainPlugin", link: "keychain" },
          ],
        },
        {
          text: "Native UI",
          collapsed: false,
          items: [
            { text: "WindowPlugin", link: "window" },
            { text: "StatusBarPlugin", link: "status-bar" },
            { text: "NavigationBarPlugin", link: "navigation-bar" },
            { text: "VirtualKeyboardPlugin", link: "virtual-keyboard" },
            { text: "TorchPlugin", link: "torch" },
          ],
        },
      ],
    },
  ];
}

function sidebarPlaocServer(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Server",
      base: "/server/",
      items: [
        { text: "Intro", link: "index" },
        { text: "Middleware", link: "middleware" },
      ],
    },
  ];
}

export const enSearch: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  en: {
    placeholder: "Search for documents",
    translations: {
      button: {
        buttonText: "Search for documents",
        buttonAriaLabel: "Search for documents",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Clear search criteria",
          resetButtonAriaLabel: "Clear search criteria",
          cancelButtonText: "Cancel",
          cancelButtonAriaLabel: "Cancel",
        },
        startScreen: {
          recentSearchesTitle: "Search history",
          noRecentSearchesText: "No search history",
          saveRecentSearchButtonTitle: "Save to search history",
          removeRecentSearchButtonTitle: "Remove from search history",
          favoriteSearchesTitle: "Favorite",
          removeFavoriteSearchButtonTitle: "Remove from favorites",
        },
        errorScreen: {
          titleText: "Unable to retrieve results",
          helpText: "You may need to check your network connection",
        },
        footer: {
          selectText: "Select",
          navigateText: "Toggle",
          closeText: "Close",
          searchByText: "Search provider",
        },
        noResultsScreen: {
          noResultsText: "No relevant results found",
          suggestedQueryText: "You can try a query",
          reportMissingResultsText:
            "Do you think this query should have results?",
          reportMissingResultsLinkText: "Click for feedback",
        },
      },
    },
  },
};
