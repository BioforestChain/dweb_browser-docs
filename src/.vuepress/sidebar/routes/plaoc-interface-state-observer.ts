import { BasePath } from "../config/base-path"
export class PlaocInterfaceStateObserver extends Array {
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
                text: "StateObserver",
                prefix: "state-observer/",
                link: "state-observer/",
                children: [
                  {
                    icon: "function",
                    text: "getState",
                    link: "getState.md",
                  },
                  {
                    icon: "function",
                    text: "jsonlines",
                    link: "jsonlines.md",
                  },
                  {
                    icon: "function",
                    text: "onChnage",
                    link: "onChange.md",
                  },
                  {
                    icon: "function",
                    text: "stopObserve",
                    link: "stopObserve.md",
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