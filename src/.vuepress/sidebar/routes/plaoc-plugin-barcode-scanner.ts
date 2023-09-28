import { BasePath } from "../config/base-path";
export class PlaocPluginBarcodeScanner extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push({
      text: "Plaoc",
      prefix: basePath + "/plaoc-plugin/",
      link: basePath + "/plaoc-plugin/",
      children: [
        {
          text: "Plugin",
          prefix: "system/",
          link: "system/",
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
              ],
            },
          ],
        },
        {
          text: "WebComponent",
          prefix: "system/barcode-scanner/web-component/",
          link: "system/barcode-scanner/web-component/",
          children: [
            {
              text: "startScanning",
              icon: "function",
              link: "start-scanning.md",
            },
            {
              text: "stopScanning",
              icon: "function",
              link: "stop-scanning.md",
            },
          ],
        },
      ],
    });
  }
}
