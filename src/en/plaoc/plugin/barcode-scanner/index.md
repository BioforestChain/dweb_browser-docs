---
title: BarcodeScannerPlugin
category:
  - Plugin
tag:
  - barcode-scanner
---

BarcodeScannerPlugin is a barcode decoding interface;

```javascript
import { barcodeScannerPlugin } from "@plaoc/plugins";
barcodeScannerPlugin.process(blob)
```

## Property
  - none

 
## Method

  - [BarcodeScannerPlugin.process()](./process.md)

    The method of parsing the barcode;

  - [BarcodeScannerPlugin.stop()](./stop.md)

    Stop parsing the barcode;
  
  - [BarcodeScannerPlugin.getSupportedFormats()](./get-supported-formats.md)

## Event
  - none


## Platform Compatibility


| Property/Method/Event           | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:-----------:|:-------:|
| process                 | ✅      | ✅  | ✅          | ✅        |
| stop                    | ✅      | ✅  | ✅          | ✅        |
| getSupportedFormats     | ✅      | ✅  | ✅          | ✅        |


## Related Links

[Plaoc](../)


