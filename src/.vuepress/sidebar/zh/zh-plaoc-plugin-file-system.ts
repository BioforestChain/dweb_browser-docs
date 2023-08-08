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
            text: "FileSystemPlugin",
            icon: "plugin",
            prefix: "file-system/",
            link: "file-system/",
            children: [
            
              {
                text: "getUri()",
                icon: "function",
                link: "get-uri.md",
              },
              {
                text: "writeFile()",
                icon: "function",
                link: "writeFile.md",
              }
            ]
          },
        ]
      },
    ]
  },
]