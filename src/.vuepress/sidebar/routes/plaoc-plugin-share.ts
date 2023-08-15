import { BasePath } from "../config/base-path"
export class PlaocPluginShare extends Array{
  constructor(basePath: BasePath){
    super()
    this.push(
      {
        text: "Plaoc",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
        children:[
          {
            text: "Plaoc Plugin",
            prefix: "plugin/",
            link: "plugin/",
            children: [
              {
                text: "SharePlugin",
                icon: "plugin",
                prefix: "share/",
                link: "share/",
                children: [
                  {
                    text: "canShare()",
                    icon: "function",
                    link: "can-share.md",
                  },
                  {
                    text: "share()",
                    icon: "function",
                    link: "share.md",
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