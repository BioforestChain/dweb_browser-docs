export default [
  {
    text: "Plaoc",
    prefix: "/plaoc/",
    link: "/plaoc/",
    children: [
      {
        text: "Plaoc Shim",
        prefix: "shim/",
        link: "shim/",
        children: [
          {
            text: "DwebServiceWorker",
            icon: "plugin",
            prefix: "dweb-service-worker/",
            link: "dweb-service-worker/",
            children: [
              {
                text: "EventFetch",
                icon: "function",
                link: "event-fetch.md"
              },
            ]
          },
        ]
      },
    ]
  },
]