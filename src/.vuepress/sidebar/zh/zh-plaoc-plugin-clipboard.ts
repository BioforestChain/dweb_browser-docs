export default [
  {
    text: "Plaoc",
    prefix: "/plaoc/",
    link: "/plaoc/",
    children:[
      {
        text: "Plaoc Plugin",
        prefix: "plugin/",
        link: "plugin/",
        children: [
          {
            text: "Clipboard",
            icon: "plugin",
            prefix: "clipboard/",
            link: "clipboard/",
            children: [
              {
                text: "read()",
                icon: "function",
                link: "read.md",
              },
              {
                text: "write()",
                icon: "function",
                link: "write.md",
              }
            ]
          },
        ]
      },
    ]
  },
]