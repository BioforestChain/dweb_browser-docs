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
            text: "BluetoothRemoteGATTCharacteristic",
            prefix: "bluetooth-remote-gatt-characteristic/",
            link: "bluetooth-remote-gatt-characteristic/",
            children: [
              {
                icon: "function",
                text: "getDescriptor",
                link: "get-descriptor.md",
              },
              {
                icon: "function",
                text: "readValue",
                link: "read-value.md",
              },
              {
                icon: "function",
                text: "writeValue",
                link: "write-value.md",
              },
              {
                icon: "notice",
                text: "characteristicvaluechanged",
                link: "event-characteristic-value-changed.md",
              },
            ]
          },
        ]
      }
    ]
  }
]
