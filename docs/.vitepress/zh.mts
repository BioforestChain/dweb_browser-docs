import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
  lang: "zh-Hans",
  description: "一个提供分布式网络 | 应用附着的浏览器。",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/plaoc/": { base: "/plaoc/", items: sidebarPlaoc() },
      '/plugins/': { base: '/plugins/', items: sidebarPlugins() }
    },

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
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
      text: "Plaoc",
      activeMatch: "/plaoc/",
      link: "/plaoc/flow"
    },
    {
      text: "Plugins",
      activeMatch: "/plugins/",
      link: "/plugins/web-components",
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
        { text: "开发流程", link: "flow" },
        { text: "重定向配置", link: "redirect-config" },
        { text: "配置清单", link: "manifest" },
        { text: "@plaoc/cli", link: "cli" },
        { text: "应用商店", link: "app-store" },
      ],
    },
    { text: "插件系统", base: "/plugins/", link: "web-components" },
  ];
}



function sidebarPlugins(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "插件系统",
      items: [
        { text: "简介", link: "web-components" },
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
            { text: "StatusBarPlugin", link: "status-bar" }
          ]
        },
        {
          text: "API",
          collapsed: false,
          items: [
            { text: "CloseWatcher", link: "close-watcher" },
          ],
        },
      ],
    },
  ];
}

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
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
