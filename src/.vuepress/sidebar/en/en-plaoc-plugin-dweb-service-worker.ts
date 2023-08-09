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
            text: "DwebServiceWorkerPlugin",
            icon: "plugin",
            prefix: "dweb-service-worker/",
            link: "dweb-service-worker/",
            children: [
              {
                text: "update()",
                icon: "function",
                link: "update.md",
              },
              {
                text: "close()",
                icon: "function",
                link: "close.md",
              },
              {
                text: "restart()",
                icon: "function",
                link: "restart.md",
              },
              {
                text: "externalFetch()",
                icon: "function",
                link: "external-fetch.md",
              }
            ]
          },
        ]
      },
    ]
  }
]