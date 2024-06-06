import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description:
    "A browser that provides distributed network and application attachment.",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/en/plaoc/": { base: "/en/plaoc/", items: sidebarPlaoc() },
      "/en/plugins/": { base: "/en/plugins/", items: sidebarPlugins() },
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
      items: navPlugins(),
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
      link: "/downloads"
    }
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
        { text: "App Store", link: "app-store" },
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
      text: "Plugin System",
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

function navPlugins(): (
  | DefaultTheme.NavItemChildren
  | DefaultTheme.NavItemWithLink
)[] {
  let navItems: (
    | DefaultTheme.NavItemChildren
    | DefaultTheme.NavItemWithLink
  )[] = [];

  const plugins = sidebarPlugins();
  for (let [_, item] of plugins.entries()) {
    const base = item.base ?? "";
    if (Array.isArray(item.items)) {
      navItems = navItems.concat(
        item.items.map((it) => {
          if (Array.isArray(it.items)) {
            return {
              text: it.text!,
              items: it.items.map((child) => {
                return { text: child.text!, link: base + child.link! };
              }),
            };
          } else {
            return { text: it.text!, link: base + it.link! };
          }
        })
      );
    } else {
      navItems.push({ text: item.text!, link: base + item.link! });
    }
  }

  return navItems;
}
