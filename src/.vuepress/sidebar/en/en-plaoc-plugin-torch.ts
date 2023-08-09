export default [
  {
    text: "Plaoc",
    prefix: "/en/plaoc/",
    link: "/en/plaoc/",
    children:[
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
  },
]