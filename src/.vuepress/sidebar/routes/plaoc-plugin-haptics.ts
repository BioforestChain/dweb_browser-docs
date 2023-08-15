import { BasePath } from "../config/base-path"
export class PlaocPluginHaptics extends Array {
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
                text: "HapticsPlugin",
                icon: "plugin",
                prefix: "haptics/",
                link: "haptics/",
                children: [
                  {
                    text: "impactLight()",
                    icon: "function",
                    link: "impact-light.md",
                  },
                  {
                    text: "notification()",
                    icon: "function",
                    link: "notification.md",
                  },
                  {
                    text: "vibrateClick()",
                    icon: "function",
                    link: "vibrate-click.md",
                  },
                  {
                    text: "vibrateDisabled()",
                    icon: "function",
                    link: "vibrate-disbled.md",
                  },
                  {
                    text: "vibrateDoubleClick()",
                    icon: "function",
                    link: "vibrate-double-click.md",
                  },
                  {
                    text: "vibrateHeavyClick()",
                    icon: "function",
                    link: "vibrate-heavy-click.md",
                  },
                  {
                    text: "vibrateTick()",
                    icon: "function",
                    link: "vibrate-tick.md",
                  },
                  {
                    text: "vibrate()",
                    icon: "function",
                    link: "vibrate.md",
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