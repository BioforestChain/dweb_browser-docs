import { BasePath } from "../config/base-path"
export class PlaocInterfaceBluetoothRemoteGattServer extends Array{
  constructor(basePath: BasePath){
    super();
    this.push({
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
              text: "BluetoothRemoteGATTServer",
              prefix: "bluetooth-remote-gatt-server/",
              link: "bluetooth-remote-gatt-server/",
              children: [
                {
                  icon: "function",
                  text: "connect",
                  link: "connect.md",
                },
                {
                  icon: "function",
                  text: "disconnect",
                  link: "disconnect.md",
                },
                {
                  icon: "function",
                  text: "getPrimaryService",
                  link: "get-primary-service.md",
                }
              ]
            },
          ]
        }
      ]
    })
  }
}
