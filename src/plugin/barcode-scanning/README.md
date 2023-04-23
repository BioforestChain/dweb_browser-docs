---
title: Barcode Scanning
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

提供扫码功能。

> 具体查看示例代码： [Barcode Scanning](https://github.com/BioforestChain/dweb_browser/blob/main/example/vue3/src/pages/BarcodeScanning.vue)

## HTMLDwebBarcodeScanningElement

声明的 html 标签样式。

```html
<dweb-barcode-scanning></dweb-barcode-scanning>
```

### getView

- 作用:

  获取 video 的容器元素,根据这个 DOM 用户可以自定义样式.

- 可能的值：

  `HTMLElement`

  `null`

  `undefined`

### toggleTorch

- 作用：

  打开/关闭手电筒

- 调用签名：

```js
   async toggleTorch(): Promise<boolean>
```

### getTorchState

- 作用：

  手电筒状态

- 调用签名：

```js
  async getTorchState(): Promise<boolean>
```

### hasMedia

- 作用：

  判断是否支持扫描功能

- 调用签名：

```js
  hasMedia(): boolean;
```

### startScanning

- 作用：

  启动摄像头扫描， 解析成功后关闭摄像头；

- 调用签名：

```js
  async startScanning(): Promise<string[]>
```

### stopScanning

- 作用：

  停止扫描；会关闭摄像头;

- 调用签名：

```js
  stopScanning(): void;
```

## BarcodeScannerPlugin

扫码功能对外提供的插件功能。

导入

```ts
import { barcodeScannerPlugin } from "@bfex/plugin";
```

### process

- 作用：

  解析二维码图片,没有识别到二维码时，返回空数组。

- 调用签名：

```js
  async process(blob: Blob, rotation = 0, formats = SupportedFormat.QR_CODE): Promise<string[]>
```

- 参数说明：

  - blob

    - 数据类型

      `Blob`

    - 参数的作用：

      需要解析的图片数据

  - rotation （暂不开放）

    - 数据类型

      `Number`

    - 参数的作用：

      图片偏转角度

  - formats（暂不开放）

  - 数据类型

    `SupportedFormat`

  - 参数的作用：

    解析的数据类型，比如解析二维码，条形码

### stop

- 作用：

  停止解析二维码图片

- 调用签名

```js
  async stop(): Promise<boolean>
```
