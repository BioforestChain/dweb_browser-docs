---
title: BarcodeScannerPlugin.stop()
category:
  - Plugin
tag:
  - BarcodeScannerPlugin
  - stop
---

停止解析条码数据的方法；

```js
BarcodeScannerPlugin.stop()
```

## 参数

  - 无
    

## 返回值

  一个Promise对象，resolve兑现boolean；

## 示例
```js
import { barcodeScannerPlugin } from "@plaoc/plugins";
;(async () => {
  const res = await barcodeScannerPlugin.stop();
})();
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| stop         | ✅      | ✅  | ✅          | ✅      |

## 相关链接
[BarcodeScannerPlugin](./index.md)


