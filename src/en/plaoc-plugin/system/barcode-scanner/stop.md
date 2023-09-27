---
title: BarcodeScannerPlugin.stop()
category:
  - Plugin
tag:
  - BarcodeScannerPlugin
  - stop
---

Stops barcode decoding.

```js
BarcodeScannerPlugin.stop() 
```

## Parameters

- None

## Returns 

A Promise that resolves to a boolean.

## Example

```js
import { barcodeScannerPlugin } from "@plaoc/plugins";

(async () => {
  const res = await barcodeScannerPlugin.stop(); 
})();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| stop                  | ✅      | ✅  | ✅          | ✅      |

## See Also

[BarcodeScannerPlugin](./index.md)

