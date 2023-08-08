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
        text: "Plugin",
        icon: "plugin",
        prefix: "/plaoc/plugin",
        link: "/plaoc/plugin/index.md",
      },
      {
        text: "WebComponent",
        icon: "discover",
        prefix: "/plaoc/webcomponent",
        link: "/plaoc/web-component/index.md",
      },

      {
        text: "Interface",
        icon: "object",
        prefix: "/plaoc/interface",
        link: "interface/",
      }
    ]
  }
]