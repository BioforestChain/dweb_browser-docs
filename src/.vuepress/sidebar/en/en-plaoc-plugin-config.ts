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
            text: "ConfigPlugin",
            icon: "plugin",
            prefix: "config/",
            link: "config/",
            children: [
              {
                text: "getInternalUrl()",
                icon: "function",
                link: "get-internal-url.md",
              },
              {
                text: "setInternalUrl()",
                icon: "function",
                link: "set-internal-url.md",
              },
              {
                text: "setPublicUrl()",
                icon: "function",
                link: "set-public-url.md",
              }
            ]
          },
        ]
      },
    ]
  }
]