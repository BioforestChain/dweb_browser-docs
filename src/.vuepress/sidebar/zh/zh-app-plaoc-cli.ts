export default [
  {
    text: "PlaocAPP",
    prefix: "/app/",
    link: "/app/",
  },
  {
    text: "@plaoc/cli",
    prefix: "/app/plaoc-cli/",
    link: "/app/plaoc-cli/",
    children: [
      {
        text: "bundle",
        link: "bundle.md",
      },
      {
        text: "指令选项参数",
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
]