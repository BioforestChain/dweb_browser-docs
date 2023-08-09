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
            text: "MWebviewPlugin",
            icon: "plugin",
            prefix: "m-webview/",
            link: "m-webview/",
            children: [
              {
                text: "open()",
                icon: "function",
                link: "open.md",
              },
              {
                text: "close()",
                icon: "function",
                link: "close.md",
              },
              {
                text: "activate()",
                icon: "function",
                link: "activate.md",
              },
              {
                text: "closeApp()",
                icon: "function",
                link: "close-app.md",
              },
            ]
          },
        ]
      },
    ]
  },
]