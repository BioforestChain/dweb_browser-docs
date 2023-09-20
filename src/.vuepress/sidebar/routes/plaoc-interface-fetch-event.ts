import { BasePath } from "../config/base-path"
export class PlaocInterfaceFetchEvent extends Array {
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
                text: "FetchEvent",
                prefix: "fetch-event/",
                link: "fetch-event/",
                children: [
                  {
                    icon: "function",
                    text: "respondWith",
                    link: "respond-with.md",
                  }
                ]
              },
            ]
          }
        ]
      }
    )
  }
}