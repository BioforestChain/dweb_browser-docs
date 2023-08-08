---
title: BarcodeScannerPlugin.process()
category:
  - Plugin
tag:
  - BarcodeScannerPlugin
  - process
  - qr_code
---

A method for parsing barcode data;

```js
BarcodeScannerPlugin.process(blob, rotation, formats)
```

## parameters

  - blob

    The Blob object of the barcode image;

  - rotation

    Whether to rotate; the parameter value is number type; the default value is 0; please do not set it to other values

  - formats

    Used to describe the type of barcode image; possible values are `["qr_code", "code_39", "codabar", "ean_13"]`
    

## return value

  A Promise object, resolve fulfills an array, and the array contains the parsed strings;

## Example
```js
import { barcodeScannerPlugin } from "@plaoc/plugins";
;(async () => {
  const blob = new Blob() 
  const res = await barcodeScannerPlugin.process(blob);
})();
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| process              | ✅      | ✅  | ✅          | ✅      |

## Related Links
[BarcodeScannerPlugin](./index.md)


