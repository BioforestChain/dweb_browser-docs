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
            text: "BarcodeScannerPlugin",
            icon: "plugin",
            prefix: "barcode-scanner/",
            link: "barcode-scanner/",
            children: [
              {
                text: "prcess()",
                icon: "function",
                link: "process.md",
              },
              {
                text: "stop()",
                icon: "function",
                link: "stop.md",
              },
              {
                text: "getSupportedFormats()",
                icon: "function",
                link: "get-supported-formats.md",
              },
            ]
          },
        ]
      },
    ]
  },
]