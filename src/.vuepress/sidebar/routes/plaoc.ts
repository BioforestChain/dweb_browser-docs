import { BasePath } from "../config/base-path";
export class Plaoc extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      // {
      //   text: "HOME",
      //   prefix: basePath + "/",
      //   link: basePath + "/"
      // },
      {
        text: "Plaoc",
        prefix: basePath + "/plaoc-plugin/plugin/index.md",
        link: basePath + "/plaoc-plugin/plugin/index.md",
        // children: [
        //   {
        //     text: "Plugin",
        //     icon: "plugin",
        //     prefix: "plugin/",
        //     link: "plugin/index.md",
        //   },
        //   {
        //     text: "Shim",
        //     icon: "discover",
        //     prefix: "shim/",
        //     link: "shim/index.md",
        //   },
        //   {
        //     text: "WebComponent",
        //     icon: "discover",
        //     prefix: "webcomponent/",
        //     link: "web-component/index.md",
        //   },
        // ]
      },
      {
        text: "WebComponent",
        icon: "discover",
        prefix: "plaoc-plugin/webcomponent/",
        link: "plaoc-plugin/web-component/index.md",
      }
    );
  }
}
