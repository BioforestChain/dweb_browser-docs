import { BasePath } from "../config/base-path"
export class PlaocPluginBarcodeScanner extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      {
        text: "Plaoc",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
        children: [
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
      }
    )
  }
}