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
            text: "UpdateControllerPlugin",
            icon: "plugin",
            prefix: "update-controller/",
            link: "update-controller/",
            children: [
              {
                text: "download()",
                icon: "function",
                link: "download.md",
              },
              {
                text: "pause()",
                icon: "function",
                link: "pause.md",
              },
              {
                text: "resume()",
                icon: "function",
                link: "resume.md",
              },
              {
                text: "cancel()",
                icon: "function",
                link: "cancel.md",
              }
            ]
          },
        ]
      },
    ]
  }
]