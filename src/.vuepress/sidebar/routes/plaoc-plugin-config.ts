import { BasePath } from "../config/base-path"
export class PlaocPluginConfig extends Array {
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
                text: "ConfigPlugin",
                icon: "plugin",
                prefix: "config/",
                link: "config/",
                children: [
                  {
                    text: "getInternalUrl()",
                    icon: "function",
                    link: "get-internal-url.md",
                  },
                  {
                    text: "setInternalUrl()",
                    icon: "function",
                    link: "set-internal-url.md",
                  },
                  {
                    text: "setPublicUrl()",
                    icon: "function",
                    link: "set-public-url.md",
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
