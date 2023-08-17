import { BasePath } from "../config/base-path";

export class PlaocAppManifest extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      {
        text: "PlaocAPP",
        prefix: `${basePath}/plaoc-app/`,
        link: basePath + "/plaoc-app/",
      },
      {
        text: "manifest",
        prefix: basePath + "/plaoc-app/manifest/",
        link: basePath + "/plaoc-app/manifest/",
        children: [
          {
            text: "DisplayModeType",
            link: "display-mode-type.md",
          },
          {
            text: "ImageResource",
            link: "image-resource.md",
          },
          {
            text: "orientation",
            link: "orientation.md",
          },
          {
            text: "TextDirectionType",
            link: "text-direction-type.md",
          },
        ]
      },
    )
  }
}