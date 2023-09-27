import { BasePath } from "../config/base-path";
export class PlaocPluginClipboard extends Array {
  constructor(basePath: BasePath) {
    super();
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
                text: "Clipboard",
                icon: "plugin",
                prefix: "clipboard/",
                link: "clipboard/",
                children: [
                  {
                    text: "read()",
                    icon: "function",
                    link: "read.md",
                  },
                  {
                    text: "write()",
                    icon: "function",
                    link: "write.md",
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