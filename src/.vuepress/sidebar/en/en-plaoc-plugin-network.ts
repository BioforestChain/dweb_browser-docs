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
            text: "NetworkPlugin",
            icon: "plugin",
            prefix: "network/",
            link: "network/",
            children: [
              {
                text: "onLine()",
                icon: "function",
                link: "on-line.md",
              },
              {
                text: "getStatus()",
                icon: "function",
                link: "get-status.md",
              }
            ]
          },
        ]
      },
    ]
  },
]