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
            text: "SharePlugin",
            icon: "plugin",
            prefix: "share/",
            link: "share/",
            children: [
              {
                text: "canShare()",
                icon: "function",
                link: "can-share.md",
              },
              {
                text: "share()",
                icon: "function",
                link: "share.md",
              }
            ]
          },
        ]
      },
    ]
  },
]