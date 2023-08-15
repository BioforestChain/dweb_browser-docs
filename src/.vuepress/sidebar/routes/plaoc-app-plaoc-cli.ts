import { BasePath } from "../config/base-path";

export class PlaocAppPlaocCli extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      {
        text: "PlaocAPP",
        prefix: `${basePath}/plaoc-app/`,
        link: basePath + "/plaoc-app/",
      },
      {
        text: "@plaoc/cli",
        prefix: basePath + "/plaoc-app/plaoc-cli/",
        link: basePath + "/plaoc-app/plaoc-cli/",
        children: [
          {
            text: "bundle",
            link: "bundle.md",
          },
          {
            text: basePath === BasePath.zh ? "指令选项参数" : "optionParamter",
            link: "option-paramter.md",
          },
          {
            text: "serve url",
            link: "serve-url.md",
          },
          {
            text: "serve",
            link: "serve.md",
          },
        ]
      },
    )
  }
}