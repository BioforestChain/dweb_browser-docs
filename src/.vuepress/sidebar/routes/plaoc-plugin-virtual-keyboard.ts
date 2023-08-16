import { BasePath } from "../config/base-path"
export class PlaocPluginVirtualKeyboard extends Array {
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
                text: "VirtualKeyboard",
                icon: "plugin",
                prefix: "virtual-keyboard/",
                link: "virtual-keyboard/",
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
        ]
      }
    )
  }
}