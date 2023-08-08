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
            text: "DevicePlugin",
            icon: "plugin",
            prefix: "device/",
            link: "device/",
            children: [
              {
                text: "getUUID()",
                icon: "function",
                link: "get-uuid.md",
              }
            ]
          },
        ]
      },
    ]
  }
]