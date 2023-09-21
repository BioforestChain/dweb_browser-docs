import { BasePath } from "../config/base-path"
export class PlaocPluginSafeArea extends Array {
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
                text: "SafeArealugin",
                icon: "plugin",
                prefix: "safe-area/",
                link: "safe-area/",
                children: [
                  {
                    text: "state",
                    icon: "object",
                    link: "state.md",
                  },
                  {
                    text: "getOverlay()",
                    icon: "function",
                    link: "get-overlay.md",
                  },
                  {
                    text: "getState()",
                    icon: "function",
                    link: "get-state.md",
                  },
                  {
                    text: "setOverlay()",
                    icon: "function",
                    link: "set-overlay.md",
                  },
                  {
                    text: "setStateByKey()",
                    icon: "function",
                    link: "set-state-by-key.md",
                  },
                  {
                    text: "setState()",
                    icon: "function",
                    link: "set-state.md",
                  },
                ]
              },
            ]
          },
          {
            text: "interface",
            icon: "type",
            prefix: "plugin/safe-area/interface/",
            link: "plugin/safe-area/interface/",
            children: [
              {
                text: "$StateObserver",
                icon: "interface",
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
                    text: "onChange",
                    link: "onChange.md",
                  },
                  {
                    icon: "function",
                    text: "stopObserve",
                    link: "stopObserve.md",
                  },
                ]
              },
            ],
          },
        ]
      }
    )
  }
}