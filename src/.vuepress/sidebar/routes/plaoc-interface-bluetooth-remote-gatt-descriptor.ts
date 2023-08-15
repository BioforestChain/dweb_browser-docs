import { BasePath } from "../config/base-path"
export class PlaocInterfaceBluetoothRemoteGattDescriptor extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      {
        text: "Ploac",
        prefix: "/plaoc-plugin/",
        link: "/plaoc-plugin/",
        children: [
          {
            text: "Ploac Interface",
            prefix: "interface/",
            link: "interface/",
            children: [
              {
                icon: "object",
                text: "BluetoothRemoteGATTDescriptor",
                prefix: "bluetooth-remote-gatt-descriptor/",
                link: "bluetooth-remote-gatt-descriptor/",
                children: [
                  {
                    icon: "function",
                    text: "readValue",
                    link: "read-value.md",
                  },
                  {
                    icon: "function",
                    text: "writeValue",
                    link: "write-value.md",
                  }
                ]
              },
            ]
          }
        ]
      }
    )
  }
}