export default [
  {
    text: "Plaoc",
    prefix: "/en/plaoc/",
    link: "/en/plaoc/",
    children: [
      {
        text: "Plaoc WebComponent",
        prefix: "web-component/",
        link: "web-component/",
        children: [
          {
            text: "HTMLDwebBarcodeScanningElement",
            icon: "plugin",
            prefix: "barcode-scanning/",
            link: "barcode-scanning/",
            children: [
              {
                text: "getSupportedFormates",
                icon: "function",
                link: "get-supported-formats.md"
              },
              {
                text: "startScanning",
                icon: "function",
                link: "start-scanning.md"
              },
              {
                text: "stopScanning",
                icon: "function",
                link: "stop-scanning.md"
              },
            ]
          },
        ]
      },
    ]
  },
]