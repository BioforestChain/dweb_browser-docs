import { BasePath } from "../config/base-path"
export class PlaocInterfaceBluetoothRemoteGattService extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      {
        text: "Ploac",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
        children: [
          {
            text: "Ploac Interface",
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