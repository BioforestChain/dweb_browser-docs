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
            text: "BluetoothPlugin",
            icon: "plugin",
            prefix: "bluetooth/",
            link: "bluetooth/",
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
                text: "requestAndConnectDevice()",
                icon: "function",
                link: "request-and-connect-device.md",
              }
            ]
          },
        ]
      },
    ]
  },
]