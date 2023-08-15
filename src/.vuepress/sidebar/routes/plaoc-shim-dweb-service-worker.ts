
import { BasePath } from "../config/base-path"
export class PlaocShimDwebServiceWorker extends Array {
  constructor(basePath: BasePath) {
    super()
    this.push(
      {
        text: "Plaoc",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
        children: [
          {
            text: "Plaoc Shim",
            prefix: "shim/",
            link: "shim/",
            children: [
              {
                text: "DwebServiceWorker",
                icon: "plugin",
                prefix: "dweb-service-worker/",
                link: "dweb-service-worker/",
                children: [
                  {
                    text: "EventFetch",
                    icon: "function",
                    link: "event-fetch.md"
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