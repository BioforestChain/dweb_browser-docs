import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'A browser that provides distributed network and application attachment.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/en/plaoc/': { base: '/en/plaoc/', items: sidebarPlaoc() },
      '/en/plugins/': { base: '/en/plugins/', items: sidebarPlugins() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present BFChain'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Plaoc",
      activeMatch: "/en/plaoc/",
      link: "/en/plaoc/flow"
    },
    {
      text: "Plugins",
      activeMatch: "/en/plugins/",
      link: "/en/plugins/web-components",
    },
    {
      text: "2.x.x",
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
  ];
}

function sidebarPlaoc(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Plaoc App",
      collapsed: false,
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

function sidebarPlugins(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Plugin System",
      items: [
        { text: "Intro", link: "web-components" },
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
          ],
        },
        {
          text: "Native UI",
          collapsed: false,
          items: [
            { text: "StatusBarPlugin", link: "status-bar" },
            { text: "NavigationBarPlugin", link: "navigation-bar" },
            { text: "VirtualKeyboardPlugin", link: "virtual-keyboard" },
            { text: "TorchPlugin", link: "torch" },
          ]
        },
        {
          text: "API",
          collapsed: false,
          items: [
            { text: "CloseWatcher", link: "close-watcher" },
            { text: "DwebServiceWorker", link: "dweb-service-worker" },
            { text: "DwebUpdateController", link: "dweb-update-controller" },
          ],
        },
      ],
    },
  ];
}