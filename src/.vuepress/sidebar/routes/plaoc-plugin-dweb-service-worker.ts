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
          text: "Plugin",
          prefix: "system/",
          link: "system/",
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
                  text: "canOpenUrl()",
                  icon: "function",
                  link: "can-open-url.md",
                },
                {
                  text: "externalFetch()",
                  icon: "function",
                  link: "external-fetch.md",
                },
                {
                  text: "FetchEvent",
                  icon: "mark",
                  link: "event-fetch.md",
                },
              ],
            },
          ],
        },
        {
          text: "interface",
          icon: "type",
          prefix: "interface/bfs-meta-data/",
          link: "interface/bfs-meta-data/",
          children: [
            {
              text: "$JmmAppInstallManifest",
              icon: "light",
              link: "$JmmAppInstallManifest.md",
            },
          ],
        },
      ],
    });
  }
}
