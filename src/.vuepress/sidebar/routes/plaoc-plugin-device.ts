import { BasePath } from "../config/base-path";

export class PlaocPluginDevice extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push({
      text: "Plaoc",
      prefix: basePath + "/plaoc-plugin/",
      link: basePath + "/plaoc-plugin/",
      children: [
        {
          text: "Plugin",
          prefix: "system/",
          link: "system/",
          children: [
            {
              text: "DevicePlugin",
              icon: "plugin",
              prefix: "device/",
              link: "device/",
              children: [
                {
                  text: "getUUID()",
                  icon: "function",
                  link: "get-uuid.md",
                }
              ]
            },
          ]
        },
      ]
    })
  }
}