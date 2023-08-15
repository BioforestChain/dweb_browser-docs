import { BasePath } from "../config/base-path"
export class PlaocPluginDwebServiceWorker extends Array {
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
                text: "DwebServiceWorkerPlugin",
                icon: "plugin",
                prefix: "dweb-service-worker/",
                link: "dweb-service-worker/",
                children: [
                  {
                    text: "update()",
                    icon: "function",
                    link: "update.md",
                  },
                  {
                    text: "close()",
                    icon: "function",
                    link: "close.md",
                  },
                  {
                    text: "restart()",
                    icon: "function",
                    link: "restart.md",
                  },
                  {
                    text: "externalFetch()",
                    icon: "function",
                    link: "external-fetch.md",
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