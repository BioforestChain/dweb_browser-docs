import { BasePath } from "../config/base-path"
export class PlaocInterfaceWindowListenerHandle extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      {
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
                text: "WindowListenerHandle",
                prefix: "window-listener-handle/",
                link: "window-listener-handle/",
                children: [
                  {
                    icon: "function",
                    text: "handler",
                    link: "handler.md",
                  },
                ]
              },
            ]
          }
        ]
      }
    )
  }
}