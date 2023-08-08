export default [
  {
    text: "Ploac",
    prefix: "/plaoc/",
    link: "/plaoc/",
    children: [
      {
        text: "Ploac Interface",
        prefix: "interface/",
        link: "interface/",
        children: [
          {
            icon: "object",
            text: "BluetoothRemoteGATTDescriptor",
            prefix: "bluetooth-remote-gatt-descriptor/",
            link: "bluetooth-remote-gatt-descriptor/",
            children: [
              {
                icon: "function",
                text: "readValue",
                link: "read-value.md",
              },
              {
                icon: "function",
                text: "writeValue",
                link: "write-value.md",
              }
            ]
          },
        ]
      }
    ]
  }
]
