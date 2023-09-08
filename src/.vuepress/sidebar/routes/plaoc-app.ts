import { BasePath } from "../config/base-path"

export class PlaocApp extends Array {
  constructor(basePath: BasePath) {
    super()
    this.push(
      {
        text: "HOME",
        prefix: basePath + "/",
        link: basePath + "/"
      },
      {
        text: "Plaoc app",
        prefix: basePath + "/plaoc-app/",
        link: basePath + "/plaoc-app/",
        children: [
          // {
          //   text: basePath === BasePath.zh ? "开发工具" : "DeveloperTool",
          //   link: "developer-tool/index.md",
          // },
          {
            text: basePath === BasePath.zh ? "应用商店" : "App Store",
            link: "release/index.md",
          },
        ]
      },
      {
        text: "@plaoc/cli",
        link: "plaoc-cli/index.md",
      },
      {
        text: basePath === BasePath.zh ? "重定向配置" : "redirect config",
        link: "redirect/index.md",
      }
    )
  }
}