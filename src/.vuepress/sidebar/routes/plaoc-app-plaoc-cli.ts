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
      },
    )
  }
}