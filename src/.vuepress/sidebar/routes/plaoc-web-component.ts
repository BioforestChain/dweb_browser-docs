import { BasePath } from "../config/base-path"
export class PlaocWebComponent extends Array {
  constructor(basePath: BasePath) {
    super()
    this.push(
      {
        text: "Plaoc",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
        children: [
          {
            text: "Plaoc WebComponent",
            prefix: "web-component/",
            link: "web-component/",
            children: [
              {
                text: "HTMLDwebBarcodeScanningElement",
                icon: "plugin",
                link: "barcode-scanning/",
              },
              {
                text: "HTMLDwebBiometricsElement",
                icon: "plugin",
                link: "biometrics/",
              },
              {
                text: "HTMLBluetoothElement",
                icon: "plugin",
                link: "bluetooth/",
              },
              {
                text: "HTMLDwebClipboardElement",
                icon: "plugin",
                link: "clipboard/",
              },
              {
                text: "HTMLDwebConfigElement",
                icon: "plugin",
                link: "config/",
              },
              {
                text: "HTMLDeviceElement",
                icon: "plugin",
                link: "device/"
              },
              {
                text: "HTMLDwebFileSystemElement",
                icon: "plugin",
                link: "file-system/"
              },
              {
                text: "HTMLDwebHapticsElement",
                icon: "plugin",
                link: "haptics/"
              },
              {
                text: "HTMLMWebviewElement",
                icon: "plugin",
                link: "m-webview/"
              },
              {
                text: "HTMLDwebNavigationBarElement",
                icon: "plugin",
                link: "navigation-bar/"
              },
              {
                text: "HTMLDwebNetworkElement",
                icon: "plugin",
                link: "network/"
              },
              {
                text: "HTMLDwebSafeAreaElement",
                icon: "plugin",
                link: "safe-area/"
              },
              {
                text: "HTMLDwebShareElement",
                icon: "plugin",
                link: "share/"
              },
              {
                text: "HTMLDwebSplashScreenElement",
                icon: "plugin",
                link: "splash-screen/"
              },
              {
                text: "HTMLStateObserverElement",
                icon: "plugin",
                link: "state-observer/"
              },
              {
                text: "HTMLDwebStatusBarElement",
                icon: "plugin",
                link: "status-bar/"
              },
              {
                text: "HTMLDwebToastElement",
                icon: "plugin",
                link: "toast/"
              },
              {
                text: "HTMLDwebTorchElement",
                icon: "plugin",
                link: "torch/"
              },
              {
                text: "HTMLDwebVirtualKeyboardElement",
                icon: "plugin",
                link: "virtual-keyboard/"
              }
            ]
          },
        ]
      }
    )
  }
}