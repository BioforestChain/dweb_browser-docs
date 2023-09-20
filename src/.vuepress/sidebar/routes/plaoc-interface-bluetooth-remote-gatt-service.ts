import { BasePath } from "../config/base-path"
export class PlaocInterfaceBluetoothRemoteGattService extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      {
        text: "plaoc",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
        children: [
          {
            text: "plaoc Interface",
            prefix: "interface/",
            link: "interface/",
            children: [
              {
                icon: "object",
                text: "BluetoothRemoteGATTService",
                prefix: "bluetooth-remote-gatt-service/",
                link: "bluetooth-remote-gatt-service/index.md",
                children: [
                  {
                    icon: "function",
                    text: "getCharacteristic",
                    link: "get-characteristic.md",
                  },
                ]
              },
            ]
          }
        ]
      }
    )
  }
}