export default [
  {
    text: "HOME",
    prefix: "/en/",
    link: "/en/"
  },
  {
    text: "Plaoc",
    prefix:"/en/plaoc/",
    link: "/en/plaoc/",
    children: [
      {
        text: "Plugin",
        icon: "plugin",
        prefix: "plugin/",
        link: "plugin/index.md",
      },
      {
        text: "WebComponent",
        icon: "discover",
        prefix: "webcomponent/",
        link: "web-component/index.md",
      },

      {
        text: "Interface",
        icon: "object",
        prefix: "interface/",
        link: "interface/",
      }
    ]
  }
]