---
title: BarcodeScannerPlugin.process()
category:
  - Plugin
tag:
  - BarcodeScannerPlugin
  - process
  - qr_code
---

解析条码数据的方法；

```js
BarcodeScannerPlugin.process(blob, rotation, formats)
```

## 参数

  - blob

    条码图片的Blob对象；

  - rotation

    是否旋转；参数值是number类型；默认值是0；请不要设置为其他数值

  - formats

    用来描述是那种类型的条码图片；可能的值是`["qr_code", "code_39", "codabar", "ean_13"]`
    

## 返回值

  一个Promise对象，resolve兑现一个数组，数组内是解析出来的字符串；

## 示例
```js
import { barcodeScannerPlugin } from "@plaoc/plugins";
;(async () => {
  const blob = new Blob() 
  const res = await barcodeScannerPlugin.process(blob);
})();
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| process      | ✅      | ✅  | ✅          | ✅      |

## 相关链接
[BarcodeScannerPlugin](./index.md)


