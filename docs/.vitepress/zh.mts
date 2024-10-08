import { defineConfig, type DefaultTheme } from "vitepress";
import { navPlugins } from "./navPlugins";

export const zh = defineConfig({
  lang: "zh-Hans",
  description: "一个提供分布式网络 | 应用附着的浏览器。",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/plaoc/": { base: "/plaoc/", items: sidebarPlaoc() },
      "/plugins/": { base: "/plugins/", items: sidebarPlugins() },
      "/server": { base: "/server/", items: sidebarPlaocServer() },
    },

    editLink: {
      pattern:
        "https://github.com/BioforestChain/dweb_browser-docs/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },

    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2021-${new Date().getFullYear()} BFChain`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Dweb",
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
      link: "/downloads",
    },
  ];
}

function sidebarPlaoc(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Dweb App",
      collapsed: false,
      base: "/plaoc/",
      items: [
        { text: "开发流程", link: "flow" },
        { text: "重定向配置", link: "redirect-config" },
        { text: "配置清单", link: "manifest" },
        { text: "@plaoc/cli", link: "cli" },
        { text: "@plaoc/is-dweb", link: "is-dweb" },
        { text: "应用商店", link: "app-store" },
        { text: "deeplink", link: "deeplink" },
      ],
    },
    { text: "插件系统", base: "/plugins/", link: "web-components" },
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
      text: "插件",
      base: "/plugins/",
      items: [
        { text: "简介", link: "web-components" },
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
        { text: "简介", link: "index" },
        { text: "中间件", link: "middleware" },
      ],
    },
  ];
}

export const zhSearch: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  zh: {
    placeholder: "搜索文档",
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "清除查询条件",
          resetButtonAriaLabel: "清除查询条件",
          cancelButtonText: "取消",
          cancelButtonAriaLabel: "取消",
        },
        startScreen: {
          recentSearchesTitle: "搜索历史",
          noRecentSearchesText: "没有搜索历史",
          saveRecentSearchButtonTitle: "保存至搜索历史",
          removeRecentSearchButtonTitle: "从搜索历史中移除",
          favoriteSearchesTitle: "收藏",
          removeFavoriteSearchButtonTitle: "从收藏中移除",
        },
        errorScreen: {
          titleText: "无法获取结果",
          helpText: "你可能需要检查你的网络连接",
        },
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
          searchByText: "搜索提供者",
        },
        noResultsScreen: {
          noResultsText: "无法找到相关结果",
          suggestedQueryText: "你可以尝试查询",
          reportMissingResultsText: "你认为该查询应该有结果？",
          reportMissingResultsLinkText: "点击反馈",
        },
      },
    },
  },
};
