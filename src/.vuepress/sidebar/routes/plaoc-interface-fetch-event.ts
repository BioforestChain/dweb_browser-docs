import { BasePath } from "../config/base-path"
export class PlaocInterfaceFetchEvent extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      {
        text: "Ploac",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
        children: [
          {
            text: "Ploac Interface",
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