---
title: BarcodeScannerPlugin
category:
  - Plugin
tag:
  - barcode-scanner
---

BarcodeScannerPlugin 是一个实现了条码解码接口；

```javascript
import { barcodeScannerPlugin } from "@plaoc/plugins";
barcodeScannerPlugin.process(blob);
```

## 方法 Method

### [barcodeScannerPlugin.process()](./process.md)

  解析条码的方法；

### [barcodeScannerPlugin.stop()](./stop.md)

  停止解析条码；

## 事件 Event

- 无

## 平台兼容性

|   属性/方法/事件    | Android | IOS | Desktop |
| :-----------------: | :-----: | :-: | :-----: |
|       process       |   ✅    | ✅  |   ✅    |
|        stop         |   ✅    | ✅  |   ✅    |
| getSupportedFormats |   ✅    | ✅  |   ✅    |

