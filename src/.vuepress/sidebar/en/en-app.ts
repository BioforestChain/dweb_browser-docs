export default [
  {
    text: "HOME",
    prefix: "/en/",
    link: "/en/"
  },
  {
    text: "PlaocAPP",
    prefix: "/en/app/",
    link: "/en/app/",
    children: [
      {
        text: "DeveloperTool",
        link: "developer-tool/index.md",
      },
      {
        text: "@plaoc/cli",
        link: "plaoc-cli/index.md",
      },
      {
        text: "Release",
        link: "release/index.md",
      },
    ]
  },
]