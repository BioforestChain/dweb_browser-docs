export default [
  {
    text: "HOME",
    prefix: "/",
    link: "/"
  },
  {
    text: "Plaoc",
    prefix:"/plaoc/",
    link: "/plaoc/",
    children: [
      {
        text: "Interface",
        icon: "object",
        prefix: "interface/",
        link: "interface/index.md",
      },
      {
        text: "Plugin",
        icon: "plugin",
        prefix: "plugin/",
        link: "plugin/index.md",
      },
      {
        text: "Shim",
        icon: "discover",
        prefix: "shim/",
        link: "shim/index.md",
      },
      {
        text: "WebComponent",
        icon: "discover",
        prefix: "webcomponent/",
        link: "web-component/index.md",
      },
    ]
  }
]