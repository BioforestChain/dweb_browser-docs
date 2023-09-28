---
title: SupportedFormat
category:
  - Interface
tag:
  - barcode-scanner
---

系统支持的解码格式。一般默认为`QR_CODE`。

## 接口

```ts
export enum SupportedFormat {
  // BEGIN 1D Product
  /**
   * Android only, UPC_A is part of EAN_13 according to Apple docs
   */
  UPC_A = "UPC_A",

  UPC_E = "UPC_E",

  /**
   * Android only
   */
  UPC_EAN_EXTENSION = "UPC_EAN_EXTENSION",

  EAN_8 = "EAN_8",

  EAN_13 = "EAN_13",
  // END 1D Product

  // BEGIN 1D Industrial
  CODE_39 = "CODE_39",

  /**
   * iOS only
   */
  CODE_39_MOD_43 = "CODE_39_MOD_43",

  CODE_93 = "CODE_93",

  CODE_128 = "CODE_128",

  /**
   * Android only
   */
  CODABAR = "CODABAR",

  ITF = "ITF",

  /**
   * iOS only
   */
  ITF_14 = "ITF_14",
  // END 1D Industrial

  // BEGIN 2D
  AZTEC = "AZTEC",

  DATA_MATRIX = "DATA_MATRIX",

  /**
   * Android ios desktop
   */
  QR_CODE = "QR_CODE",
  MAXICODE = "MAXICODE",

  /**
   * Android only
   */
  RSS_14 = "RSS_14",
  PDF_417 = "PDF_417",

  /**
   * Android only
   */
  RSS_EXPANDED = "RSS_EXPANDED",
  // END 2D
}
```
