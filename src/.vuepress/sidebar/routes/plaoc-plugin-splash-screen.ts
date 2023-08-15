import { BasePath } from "../config/base-path"
export class PlaocPluginSplashScreen extends Array {
  constructor(basePath: BasePath) {
    super()
    this.push(
      {
        text: "Plaoc",
        prefix: "/plaoc-plugin/",
        link: "/plaoc-plugin/",
        children: [
          {
            text: "Plaoc Plugin",
            prefix: "plugin/",
            link: "plugin/",
            children: [
              {
                text: "SplashScreenPlugin",
                icon: "plugin",
                prefix: "splash-screen/",
                link: "splash-screen/",
                children: [
                  {
                    text: "show()",
                    icon: "function",
                    link: "show.md",
                  },
                  {
                    text: "hide()",
                    icon: "function",
                    link: "hide.md",
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