import { BasePath } from "../config/base-path"
export class PlaocPluginBiometrics extends Array {
  constructor(basePath: BasePath) {
    super();
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
                text: "Biometrics",
                icon: "plugin",
                prefix: "biometrics/",
                link: "biometrics/",
                children: [
                  {
                    text: "check()",
                    icon: "function",
                    link: "check.md",
                  },
                  {
                    text: "biometrics()",
                    icon: "function",
                    link: "biometrics.md",
                  }
                ]
              },
            ]
          },
        ]
      }
    )
  }
}