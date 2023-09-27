
import { BasePath } from "../config/base-path"
export class PlaocPluginMWebview extends Array {
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
                text: "MWebviewPlugin",
                icon: "plugin",
                prefix: "m-webview/",
                link: "m-webview/",
                children: [
                  {
                    text: "open()",
                    icon: "function",
                    link: "open.md",
                  },
                  {
                    text: "close()",
                    icon: "function",
                    link: "close.md",
                  },
                  {
                    text: "activate()",
                    icon: "function",
                    link: "activate.md",
                  },
                  {
                    text: "closeApp()",
                    icon: "function",
                    link: "close-app.md",
                  },
                ]
              },
            ]
          },
        ]
      }
    )
  }
}