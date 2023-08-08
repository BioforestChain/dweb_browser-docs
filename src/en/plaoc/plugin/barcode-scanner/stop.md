---
title: BarcodeScannerPlugin.stop()
category:
   - Plugins
tag:
   - BarcodeScannerPlugin
   - stop
---

The method to stop parsing the barcode data;

```js
BarcodeScannerPlugin.stop()
```

## parameters

   - none

## return value

   A Promise object, resolve fulfills boolean;

## Example
```js
import { barcodeScannerPlugin } from "@plaoc/plugins";
;(async () => {
  const res = await barcodeScannerPlugin.stop();
})();
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:--- ----:|
| stop | ✅ | ✅ | ✅ | ✅ |

## Related Links
[BarcodeScannerPlugin](./index.md)

