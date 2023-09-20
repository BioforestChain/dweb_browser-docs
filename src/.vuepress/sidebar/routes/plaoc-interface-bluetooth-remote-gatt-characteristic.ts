import { BasePath } from "../config/base-path";

export class PlaocInterfaceBluetoothRemoteGattCharacteristic extends Array {
  constructor(basePath: BasePath) {
    super()
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
                text: "BluetoothRemoteGATTCharacteristic",
                prefix: "bluetooth-remote-gatt-characteristic/",
                link: "bluetooth-remote-gatt-characteristic/",
                children: [
                  {
                    icon: "function",
                    text: "getDescriptor",
                    link: "get-descriptor.md",
                  },
                  {
                    icon: "function",
                    text: "readValue",
                    link: "read-value.md",
                  },
                  {
                    icon: "function",
                    text: "writeValue",
                    link: "write-value.md",
                  },
                  {
                    icon: "notice",
                    text: "characteristicvaluechanged",
                    link: "event-characteristic-value-changed.md",
                  },
                ]
              },
            ]
          }
        ]
      })
  }
}
