import { BasePath } from "../config/base-path"
export class PlaocPluginNetwork extends Array {
  constructor(basePath: BasePath) {
    super()
    this.push(
      {
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
                text: "NetworkPlugin",
                icon: "plugin",
                prefix: "network/",
                link: "network/",
                children: [
                  {
                    text: "onLine()",
                    icon: "function",
                    link: "on-line.md",
                  },
                  {
                    text: "getStatus()",
                    icon: "function",
                    link: "get-status.md",
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