---
title: BarcodeScannerPlugin.getSupportedFormats()
category:
  - Plugin
tag:
  - BarcodeScannerPlugin
  - getSupportedFormats
 
---

Gets the supported barcode formats.

```js
BarcodeScannerPlugin.getSupportedFormats()
```

## Parameters

- None

## Returns

A Promise that resolves to an array of supported format names.

## Example

```js
import { barcodeScannerPlugin } from "@plaoc/plugins";

(async () => {
  const res = await barcodeScannerPlugin.getSupportedFormats();
})();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |  
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| getSupportedFormats   | ✅      | ✅  | ✅          | ✅      |

## See Also

[BarcodeScannerPlugin](./index.md)
