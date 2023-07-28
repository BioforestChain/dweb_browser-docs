---
title: BarcodeScannerPlugin
category:
  - Plugin
tag:
  - barcode-scanner
---

BarcodeScannerPlugin是一个实现了条码解码接口；

```javascript
import { barcodeScannerPlugin } from "@plaoc/plugins";
barcodeScannerPlugin.process(blob)
```

## 属性
  - 无

 
## 方法 Method

  - [BarcodeScannerPlugin.process()](./process.md)

    解析条码的方法；

  - [BarcodeScannerPlugin.stop()](./stop.md)

    停止解析条码；
  
  - [BarcodeScannerPlugin.getSupportedFormats()](./get-supported-formats.md)

## 事件 Event
  - 无


## 平台兼容性


| 属性/方法/事件            | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:-----------:|:-------:|
| process                 | ✅      | ✅  | ✅          | ✅        |
| stop                    | ✅      | ✅  | ✅          | ✅        |
| getSupportedFormats     | ✅      | ✅  | ✅          | ✅        |


## 相关链接

[Plaoc](../)


