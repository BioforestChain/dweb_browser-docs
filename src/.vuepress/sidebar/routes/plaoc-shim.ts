import { BasePath } from "../config/base-path"
export class PlaocShim extends Array {
  constructor(basePath: BasePath) {
    super()
    this.push(
      {
        text: "Plaoc",
        prefix: "/plaoc-plugin/",
        link: "/plaoc-plugin/",
        children: [
          {
            text: "Plaoc Shim",
            prefix: "shim/",
            link: "shim/",
            children: [
              {
                text: "CloseWatcherShim",
                icon: "plugin",
                link: "close-catcher-shim/",
              },
              {
                text: "DwebServiceWorker",
                icon: "plugin",
                link: "dweb-service-worker/",
              },
            ]
          },
        ]
      }
    )
  }
}