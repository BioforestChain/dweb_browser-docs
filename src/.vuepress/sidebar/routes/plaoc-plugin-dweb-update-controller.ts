import { BasePath } from "../config/base-path";
export class PlaocPluginUpdateController extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      {
        text: "Plaoc",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
        children: [
          {
            text: "Plugin",
            prefix: "system/",
            link: "system/",
            children: [
              {
                text: "UpdateControllerPlugin",
                icon: "plugin",
                prefix: "update-controller/",
                link: "update-controller/",
                children: [
                  {
                    text: "download()",
                    icon: "function",
                    link: "download.md",
                  },
                  {
                    text: "pause()",
                    icon: "function",
                    link: "pause.md",
                  },
                  {
                    text: "resume()",
                    icon: "function",
                    link: "resume.md",
                  },
                  {
                    text: "cancel()",
                    icon: "function",
                    link: "cancel.md",
                  },
                  {
                    text: "progress",
                    icon: "mark",
                    link: "event/progress.md",
                  },
                  {
                    text: "start",
                    icon: "mark",
                    link: "event/start.md",
                  },
                  {
                    text: "end",
                    icon: "mark",
                    link: "event/end.md",
                  },
                  {
                    text: "cancel",
                    icon: "mark",
                    link: "event/cancel.md",
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