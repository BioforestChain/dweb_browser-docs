import { BasePath } from "../config/base-path"
export class PlaocPluginFileSystem extends Array {
  constructor(basePath: BasePath) {
    super()
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
                text: "FileSystemPlugin",
                icon: "plugin",
                prefix: "file-system/",
                link: "file-system/",
                children: [

                  {
                    text: "getUri()",
                    icon: "function",
                    link: "get-uri.md",
                  },
                  {
                    text: "writeFile()",
                    icon: "function",
                    link: "writeFile.md",
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