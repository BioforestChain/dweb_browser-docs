---
title: BarcodeScannerPlugin.getSupportedFormats()
category:
  - Plugin
tag:
  - BarcodeScannerPlugin
  - getSupportedFormats
 
---

A method for parsing barcode data;

```js
BarcodeScannerPlugin.getSupportedFormats()
```

## parameters

  - none
    

## return value

  A Promise object, resolve fulfills an array; the array item is the name of the type that supports resolution;

## Example
```js
import { barcodeScannerPlugin } from "@plaoc/plugin";
;(async () => {
  const res = await barcodeScannerPlugin.getSupportedFormats()
})();
```

## Platform Compatibility

| Property/Method/Event           | Android | IOS | Desktop-Dev | Desktop |
|:-------------------------------:|:-------:|:---:|:-----------:|:-------:|
|getSupportedFormats              | ✅      | ✅  | ✅          | ✅      |

## Related Links

[BarcodeScannerPlugin](./index.md)


