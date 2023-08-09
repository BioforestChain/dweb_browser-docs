export default [
  {
    text: "Ploac",
    prefix: "/en/plaoc/",
    link: "/en/plaoc/",
    children: [
      {
        text: "Ploac Interface",
        prefix: "interface/",
        link: "interface/",
        children: [
          {
            icon: "object",
            text: "BluetoothDevice",
            prefix: "bluetooth-device/",
            link: "bluetooth-device/",
            children: [
              {
                icon: "function",
                text: "forget",
                link: "forget.md",
              },
              {
                icon: "function",
                text: "watchAdvertisements",
                link: "watch-advertisements.md",
              },
              {
                icon: "notice",
                text: "gattserverdisconnected",
                link: "event-gattserverdisconnected.md",
              },
              {
                icon: "notice",
                text: "advertisementreceived",
                link: "event-advertisementreceived.md",
              },
              
            ]
          },
        ]
      }
    ]
  }
]