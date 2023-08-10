export default [
  {
    text: "Plaoc",
    prefix: "/plaoc/",
    link: "/plaoc/",
    children: [
      {
        text: "Plaoc WebComponent",
        prefix: "web-component/",
        link: "web-component/",
        children: [
          {
            text: "HTMLBluetoothElement",
            icon: "plugin",
            prefix: "bluetooth/",
            link: "bluetooth/",
            children: [
              {
                text: "close",
                icon: "function",
                link: "close.md"
              },
              {
                text: "open",
                icon: "function",
                link: "open.md"
              },
              {
                text: "requestAndConnectDevice",
                icon: "function",
                link: "request-and-connected-device.md"
              },
            ]
          },
        ]
      },
    ]
  },
]