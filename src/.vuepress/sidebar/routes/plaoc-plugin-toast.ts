import { BasePath } from "../config/base-path"
export class PlaocPluginToast extends Array {
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
                text: "ToastPlugin",
                icon: "plugin",
                prefix: "toast/",
                link: "toast/",
                children: [
                  {
                    text: "show()",
                    icon: "function",
                    link: "show.md",
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