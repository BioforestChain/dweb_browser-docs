import { BasePath } from "../config/base-path"
export class PlaocPluginNavigationBar extends Array {
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
                text: "NavigationBarPlugin",
                icon: "plugin",
                prefix: "navigation-bar/",
                link: "navigation-bar/",
                children: [
                  {
                    text: "state",
                    icon: "object",
                    link: "state.md",
                  },
                  {
                    text: "getColor()",
                    icon: "function",
                    link: "get-color.md",
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
                    text: "getStyle()",
                    icon: "function",
                    link: "get-style.md",
                  },
                  {
                    text: "getVisible()",
                    icon: "function",
                    link: "get-visible.md",
                  },
                  {
                    text: "hide()",
                    icon: "function",
                    link: "hide.md",
                  },
                  {
                    text: "setColor()",
                    icon: "function",
                    link: "set-color.md",
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
                  {
                    text: "setStyle()",
                    icon: "function",
                    link: "set-style.md",
                  },
                  {
                    text: "setVisible()",
                    icon: "function",
                    link: "set-visible.md",
                  },
                  {
                    text: "show()",
                    icon: "function",
                    link: "show.md",
                  },
                ]
              },
            ]
          },
          {
            text: "interface",
            icon: "type",
            prefix: "plugin/navigation-bar/interface/",
            link: "plugin/navigation-bar/interface/",
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