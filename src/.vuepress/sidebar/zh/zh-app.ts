export default [
  {
    text: "HOME",
    prefix: "/",
    link: "/"
  },
  {
    text: "PlaocAPP",
    prefix: "/app/",
    link: "/app/",
    children: [
      {
        text: "开发工具",
        link: "developer-tool/index.md",
      },
      {
        text: "@plaoc/cli",
        link: "plaoc-cli/index.md",
      },
      {
        text: "发布",
        link: "release/index.md",
      },
    ]
  },
]