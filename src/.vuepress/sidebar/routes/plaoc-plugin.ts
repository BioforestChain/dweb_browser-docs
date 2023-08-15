import { BasePath } from "../config/base-path"
export class PlaocPlugin extends Array {
  constructor(basePath: BasePath) {
    super()
    this.push(
      {
        text: "Plaoc",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
        children: [
          {
            text: "Plaoc Plugin",
            prefix: "plugin/",
            link: "plugin/",
            children: [
              {
                text: "StatusBarPlugin",
                icon: "plugin",
                link: "status-bar/",
              },
              {
                text: "NavigationBarPlugin",
                icon: "plugin",
                link: "navigation-bar/",
              },
              {
                text: "SafeAreaPlugin",
                icon: "plugin",
                link: "safe-area/",
              },
              {
                text: "VirtualKeyboardPlugin",
                icon: "plugin",
                link: "virtual-keyboard/",
              },
              {
                text: "BarcodeScannerPlugin",
                icon: "plugin",
                link: "barcode-scanner/"
              },
              {
                text: "BiometricsPlugin",
                icon: "plugin",
                link: "biometrics/"
              },
              {
                text: "BluetoothPlugin",
                icon: "plugin",
                link: "bluetooth/"
              },
              {
                text: "CameraPlugin",
                icon: "plugin",
                link: "camera/"
              },
              {
                text: "ClipboardPlugin",
                icon: "plugin",
                link: "clipboard/"
              },
              {
                text: "ConfigPlugin",
                icon: "plugin",
                link: "config/"
              },
              {
                text: "DevicePlugin",
                icon: "plugin",
                link: "device/"
              },
              {
                text: "UpdateControllerPlugin",
                icon: "plugin",
                link: "update-controller/"
              },
              {
                text: "DwebServiceWorkerPlugin",
                icon: "plugin",
                link: "dweb-service-worker/"
              },
              {
                text: "FileSystemPlugin",
                icon: "plugin",
                link: "file-system/"
              },
              {
                text: "HapticsPlugin",
                icon: "plugin",
                link: "haptics/"
              },
              {
                text: "MWebviewPlugin",
                icon: "plugin",
                link: "m-webview/"
              },
              {
                text: "NetworkPlugin",
                icon: "plugin",
                link: "network/"
              },
              {
                text: "SharePlugin",
                icon: "plugin",
                link: "share/"
              },
              {
                text: "SplashScreenPlugin",
                icon: "plugin",
                link: "splash-screen/"
              },
              {
                text: "ToastPlugin",
                icon: "plugin",
                link: "toast/"
              },
              {
                text: "TorchPlugin",
                icon: "plugin",
                link: "torch/"
              },
            ]
          },
        ]
      }
    )
  }
}