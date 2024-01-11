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
      text: 'Plaoc',
      link: '/en/plaoc/intro',
      activeMatch: '/en/plaoc/'
    },
    {
      text: 'Plugins',
      link: '/en/plugins/intro',
      activeMatch: '/en/plugins/'
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
        { text: 'redirect-config', link: '/redirect-config/intro' },
        { text: 'manifest', link: '/manifest/intro' }
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
    { text: 'plugins', base: '/en/plugins/', link: 'intro' }
  ]
}

function sidebarPlugins(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'plugins',
      items: [
        { text: 'CloseWatcher', link: 'close-watcher/intro' },
        {
          text: 'System',
          base: '/en/plugins/system/',
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
          base: '/en/plugins/native-ui/',
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