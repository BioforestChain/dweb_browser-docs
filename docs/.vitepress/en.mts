import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'A browser that provides distributed network and application attachment.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/en/plaoc/': { base: '/en/plaoc/', items: sidebarPlaoc() },
      // '/en/plugins/': { base: '/en/plugins/', items: sidebarPlugins() }
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
      text: 'Plaoc',
      link: '/en/plaoc/index',
      activeMatch: '/en/plaoc/'
    },
    {
      text: 'Plugins',
      link: '/en/plugins/index',
      activeMatch: '/en/plugins/'
    },
    {
      text: "2.x.x",
      items: [
        {
          text: 'Monthly',
          link: 'https://github.com/BioforestChain/dweb_browser/blob/main/monthly.md'
        },
        {
          text: 'Get Start for Developer',
          link: 'https://github.com/BioforestChain/dweb_browser/blob/main/GET_START_FOR_DEVELOPER.md'
        }
      ]
    }
  ]
}

function sidebarPlaoc(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Plaoc app',
      collapsed: false,
      items: [
        { text: 'redirect-config', link: '/redirect-config/index' },
        { text: 'manifest', link: '/manifest/index' }
      ]
    },
    {
      text: '@plaoc/cli',
      link: "/cli"
    },
    {
      text: 'Application Store',
      link: "/app-store"
    },
    { text: 'plugins', base: '/en/plugins/', link: 'index' }
  ]
}

function sidebarPlugins(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'plugins',
      items: [
        { text: 'CloseWatcher', link: 'close-watcher/index' },
        {
          text: 'System',
          base: '/en/plugins/system/',
          items: [
            { text: 'BarcodeScannerPlugin', link: 'barcode-scanner/index' },
            { text: 'BiometricsPlugin', link: 'biometrics/index' },
            { text: 'BluetoothPlugin', link: 'bluetooth/index' },
            { text: 'CameraPlugin', link: 'camera/index' },
            { text: 'ClipboardPlugin', link: 'clipboard/index' },
            { text: 'ConfigPlugin', link: 'config/index' },
            { text: 'DevicePlugin', link: 'device/index' },
            { text: 'UpdateControllerPlugin', link: 'update-controller/index' },
            { text: 'dwebServiceWorker', link: 'dweb-service-worker/index' },
            { text: 'FileSystemPlugin', link: 'file-system/index' },
            { text: 'HapticsPlugin', link: 'haptics/index' },
            { text: 'MWebviewPlugin', link: 'm-webview/index' },
            { text: 'NetworkPlugin', link: 'network/index' },
            { text: 'SharePlugin', link: 'share/index' },
          ]
        },
        {
          text: 'Native-UI',
          base: '/en/plugins/native-ui/',
          items: [
            { text: 'StatusBarPlugin', link: 'status-bar/index' },
            { text: 'NavigationBarPlugin', link: 'navigation-bar/index' },
            { text: 'SafeAreaPlugin', link: 'safe-area/index' },
            { text: 'VirtualKeyboardPlugin', link: 'virtual-keyboard/index' },
            { text: 'SplashScreenPlugin', link: 'splash-screen/index' },
            { text: 'ToastPlugin', link: 'toast/index' },
            { text: 'TorchPlugin', link: 'torch/index' },
          ]
        }
      ]
    }
  ]
}