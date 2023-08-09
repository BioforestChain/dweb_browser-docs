---
title: BarcodeScannerPlugin.process()
category: 
  - Plugin
tag:
  - BarcodeScannerPlugin
  - process
  - qr_code
---

Decodes barcode data. 

```js
BarcodeScannerPlugin.process(blob, rotation, formats)
```

## Parameters

- blob

  The Blob object of the barcode image.

- rotation
  
  Whether to rotate. Number type, default is 0. Do not set other values.

- formats

  Describes the barcode type. Possible values are `["qr_code", "code_39", "codabar", "ean_13"]`.

## Returns

A Promise that resolves to an array of decoded strings.

## Example

```js
import { barcodeScannerPlugin } from "@plaoc/plugins";

(async () => {
  const blob = new Blob();
  const res = await barcodeScannerPlugin.process(blob); 
})();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop | 
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| process               | ✅      | ✅  | ✅          | ✅      |

## See Also

[BarcodeScannerPlugin](./index.md)