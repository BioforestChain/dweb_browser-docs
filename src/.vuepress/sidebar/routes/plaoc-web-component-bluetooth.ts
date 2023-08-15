import { BasePath } from "../config/base-path"
export class PlaocWebComponentBluetooth extends Array {
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
                text: "HTMLBluetoothElement",
                icon: "plugin",
                prefix: "bluetooth/",
                link: "bluetooth/",
                children: [
                  {
                    text: "close",
                    icon: "function",
                    link: "close.md"
                  },
                  {
                    text: "open",
                    icon: "function",
                    link: "open.md"
                  },
                  {
                    text: "requestAndConnectDevice",
                    icon: "function",
                    link: "request-and-connected-device.md"
                  },
                ]
              },
            ]
          },
        ]
      }
    )
  }
}