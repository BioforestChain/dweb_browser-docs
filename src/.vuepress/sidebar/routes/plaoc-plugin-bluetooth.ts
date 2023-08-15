import { BasePath } from "../config/base-path"
export class PlaocPluginBluetooth extends Array {
  constructor(basePath: BasePath) {
    super();
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
                text: "BluetoothPlugin",
                icon: "plugin",
                prefix: "bluetooth/",
                link: "bluetooth/",
                children: [
      
                  {
                    text: "open()",
                    icon: "function",
                    link: "open.md",
                  },
                  {
                    text: "close()",
                    icon: "function",
                    link: "close.md",
                  },
                  {
                    text: "requestAndConnectDevice()",
                    icon: "function",
                    link: "request-and-connect-device.md",
                  }
                ]
              },
            ]
          },
        ]
      }
    )
  }
}