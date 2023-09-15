import { BasePath } from "../config/base-path";
export class PlaocPluginDwebServiceWorker extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push({
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
              text: "dwebServiceWorker",
              icon: "plugin",
              prefix: "dweb-service-worker/",
              link: "dweb-service-worker/",
              children: [
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
                },
                {
                  text: "canOpenUrl()",
                  icon: "function",
                  link: "can-open-url.md",
                },
              ],
            },
            {
              text: "DwebServiceWorker shim",
              icon: "plugin",
              prefix: "dweb-service-worker/shim/",
              link: "dweb-service-worker/shim/",
              children: [
                {
                  text: "EventFetch",
                  icon: "function",
                  link: "event-fetch.md",
                },
              ],
            },
          ],
        },
      ],
    });
  }
}
