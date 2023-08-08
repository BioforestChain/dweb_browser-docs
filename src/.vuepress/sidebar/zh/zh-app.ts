export default [
  {
    text: "HOME",
    prefix: "/",
    link: "/"
  },
  {
    text: "Plaoc APP",
    prefix: "/app/",
    link: "/app/",
    children: [
      {
        text: "命令行打包工具",
        link: "bundle/",
      },
      {
        text: "开发者工具",
        link: "developer-tool/",
      },
    ]
  },
]