import { BasePath } from "../config/base-path";
export class PlaocPluginBarcodeScanner extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push({
      text: "Plaoc Plugin",
      prefix: basePath + "/plaoc-plugin/system/",
      link: basePath + "/plaoc-plugin/system/",
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
        {
          text: "WebComponent",
          prefix: "barcode-scanner/web-component/",
          link: "barcode-scanner/web-component/",
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
        {
          text: "Interface",
          prefix: "barcode-scanner/interface/",
          link: "barcode-scanner/interface/",
          children: [
            {
              text: "ScanReuslt",
              icon: "type",
              link: "scan-result.md",
            },
            {
              text: "SupportedFormat",
              icon: "type",
              link: "supported-format.md",
            },
          ],
        },
      ],
    });
  }
}
