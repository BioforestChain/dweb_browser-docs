import { BasePath } from "../config/base-path"
export class PlaocPluginCamera extends Array {
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
                text: "CameraPlugin",
                icon: "plugin",
                prefix: "camera/",
                link: "camera/",
                children: [
                  {
                    text: "getPhoto()",
                    icon: "function",
                    link: "get-photo.md",
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