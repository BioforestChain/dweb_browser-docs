import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '一个提供分布式网络|应用附着的浏览器。',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/plaoc/': { base: '/plaoc/', items: sidebarPlaoc() },
      '/plugins/': { base: '/plugins/', items: sidebarPlugins() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2021-${new Date().getFullYear()} BFChain`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Plaoc',
      link: '/plaoc/intro',
      activeMatch: '/plaoc/'
    },
    {
      text: 'Plugins',
      link: '/plugins/intro',
      activeMatch: '/plugins/'
    },
    {
      text: "2.0.0",
      link: "https://github.com/BioforestChain/dweb_browser"
    }
  ]
}

function sidebarPlaoc(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Plaoc app',
      collapsed: false,
      items: [
        { text: '重定向配置', link: '/redirect-config/intro' },
        { text: '配置清单', link: '/manifest/intro' }
      ]
    },
    {
      text: '@plaoc/cli',
      link: "/cli"
    },
    {
      text: '应用商店',
      link: "/app-store"
    },
    { text: '插件系统', base: '/plugins/', link: 'intro' }
  ]
}

function sidebarPlugins(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '插件系统',
      items: [
        { text: 'CloseWatcher', link: 'close-watcher/intro' },
        {
          text: 'System',
          base: '/plugins/system/',
          items: [
            { text: 'BarcodeScannerPlugin', link: 'barcode-scanner/intro' },
            { text: 'BiometricsPlugin', link: 'biometrics/intro' },
            { text: 'BluetoothPlugin', link: 'bluetooth/intro' },
            { text: 'CameraPlugin', link: 'camera/intro' },
            { text: 'ClipboardPlugin', link: 'clipboard/intro' },
            { text: 'ConfigPlugin', link: 'config/intro' },
            { text: 'DevicePlugin', link: 'device/intro' },
            { text: 'UpdateControllerPlugin', link: 'update-controller/intro' },
            { text: 'dwebServiceWorker', link: 'dweb-service-worker/intro' },
            { text: 'FileSystemPlugin', link: 'file-system/intro' },
            { text: 'HapticsPlugin', link: 'haptics/intro' },
            { text: 'MWebviewPlugin', link: 'm-webview/intro' },
            { text: 'NetworkPlugin', link: 'network/intro' },
            { text: 'SharePlugin', link: 'share/intro' },
          ]
        },
        {
          text: 'Native-UI',
          base: '/plugins/native-ui/',
          items: [
            { text: 'StatusBarPlugin', link: 'status-bar/intro' },
            { text: 'NavigationBarPlugin', link: 'navigation-bar/intro' },
            { text: 'SafeAreaPlugin', link: 'safe-area/intro' },
            { text: 'VirtualKeyboardPlugin', link: 'virtual-keyboard/intro' },
            { text: 'SplashScreenPlugin', link: 'splash-screen/intro' },
            { text: 'ToastPlugin', link: 'toast/intro' },
            { text: 'TorchPlugin', link: 'torch/intro' },
          ]
        }
      ]
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}