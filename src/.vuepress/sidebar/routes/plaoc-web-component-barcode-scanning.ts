import { BasePath } from "../config/base-path"
export class PlaocWebComponentBarcodeScanning extends Array {
  constructor(basePath: BasePath) {
    super()
    this.push(
      {
        text: "Plaoc",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
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
      }
    )
  }
}