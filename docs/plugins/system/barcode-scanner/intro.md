---
title: BarcodeScannerPlugin
category:
  - Plugin
tag:
  - barcode-scanner
---

这个插件提供了二维码解析的能力。

```ts
import { barcodeScannerPlugin } from "@plaoc/plugins";
barcodeScannerPlugin.process(blob);
```

## 方法 Method

### [barcodeScannerPlugin.process()](./process.md)

解析二维码。

### [barcodeScannerPlugin.stop()](./stop.md)

停止解析二维码。

## 平台兼容性

|   属性/方法/事件    | Android | IOS | Desktop |
| :-----------------: | :-----: | :-: | :-----: |
|       process       |   ✅    | ✅  |   ✅    |
|        stop         |   ✅    | ✅  |   ✅    |
| getSupportedFormats |   ✅    | ✅  |   ✅    |
