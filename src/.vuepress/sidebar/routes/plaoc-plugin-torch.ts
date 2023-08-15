import { BasePath } from "../config/base-path"
export class PlaocPluginTorch extends Array {
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
                text: "TorchPlugin",
                icon: "plugin",
                prefix: "torch/",
                link: "torch/",
                children: [
                  {
                    text: "toggleTorch()",
                    icon: "function",
                    link: "toggle-torch.md",
                  },
                  {
                    text: "getTorchState()",
                    icon: "function",
                    link: "get-torch-state.md",
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