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
        text: "PlaocAPP",
        prefix: basePath + "/plaoc-app/",
        link: basePath + "/plaoc-app/",
        children: [
          {
            text: basePath === BasePath.zh ? "开发工具" : "DeveloperTool",
            link: "developer-tool/index.md",
          },
          {
            text: "manifest",
            link: "manifest/index.md",
          },
          {
            text: "@plaoc/cli",
            link: "plaoc-cli/index.md",
          },
          {
            text: basePath === BasePath.zh ? "发布" : "Release",
            link: "release/index.md",
          },
        ]
      }
    )
  }
}