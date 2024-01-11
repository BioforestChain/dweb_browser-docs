---
title: BarcodeScannerPlugin.process()
category:
  - Plugin
tag:
  - BarcodeScannerPlugin
  - process
  - qr_code
---

解析二维码，需要将图片转化为 blob 数据，再传递给函数进行识别。

## 示例

```ts
import { barcodeScannerPlugin } from "@plaoc/plugins";
const fileInput = document.getElementById("fileInput");
const file = fileInput.files[0];
const reader = new FileReader();
reader.readAsArrayBuffer(file);
reader.onload = async function (e) {
  const arrayBuffer = reader.result;
  const blob = new Blob([arrayBuffer]);
  const res = await barcodeScannerPlugin.process(blob);
};
```

## 函数签名

```ts
process(blob: Blob, rotation?: number, formats?: SupportedFormat): Promise<string[]>
```

### 参数

- blob

  条码图片的 Blob 对象。

- rotation

  是否旋转；参数值是 number 类型；默认值是 0。

- [formats](./interface/supported-format.md)

  用来描述是那种类型的条码图片。

### 返回值

- string[]

识别完成的数据，可同时识别多个二维码，因此返回的是个数组。

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|    process     |   ✅    | ✅  |   ✅    |
