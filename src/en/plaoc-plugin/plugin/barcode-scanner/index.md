---
title: BarcodeScannerPlugin
category:
  - Plugin
tag:
  - barcode-scanner
---

BarcodeScannerPlugin is a plugin that implements barcode scanning interfaces.

```javascript
import { barcodeScannerPlugin } from "@plaoc/plugins";
barcodeScannerPlugin.process(blob); 
```

## Properties

- None

## Methods

- [BarcodeScannerPlugin.process()](./process.md)
  
  Decodes barcode data.

- [BarcodeScannerPlugin.stop()](./stop.md)

  Stops barcode decoding.

- [BarcodeScannerPlugin.getSupportedFormats()](./get-supported-formats.md)

## Events

- None

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| process               | ✅      | ✅  | ✅          | ✅      |  
| stop                  | ✅      | ✅  | ✅          | ✅      |
| getSupportedFormats   | ✅      | ✅  | ✅          | ✅      |

## See Also 

[Plaoc](../../)




 


