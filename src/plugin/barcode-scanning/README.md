---
title: BarcodeScanning
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

提供扫码功能。

> 具体查看示例代码： [BarcodeScanning](https://github.com/BioforestChain/dweb_browser/blob/main/example/vue3/src/pages/BarcodeScanning.vue)

## BarcodeScanning WebComponent API

首先需要声明的 html 标签样式，使用的时候需要先挂载到 DOM 上，以 vue3 为示例：

```ts
<script setup lang="ts">
import { HTMLDwebBarcodeScanningElement } from '@bfex/plugin';
const $barcodeScannerPlugin = ref<HTMLDwebBarcodeScanningElement>();

let barcodeScanner: HTMLDwebBarcodeScanningElement;
onMounted(() => {
// 挂载上去
  barcodeScanner = $barcodeScannerPlugin.value!;
});
// 就可以调用扫码了
const startScanner = () => {
  await barcodeScanner.startScanning()
}
<script>
<template>
  <dweb-barcode-scanning ref="$barcodeScannerPlugin"></dweb-barcode-scanning>
</template>
```

### startScanning

启动摄像头扫描， 解析成功后关闭摄像头；

- 调用签名：

```ts
  async startScanning(): Promise<ScanResult>
```

**Returns:** <code>Promise&lt;<a href="#scanresult">ScanResult</a>&gt;</code>

### stopScanning

停止扫描；会关闭摄像头;

- 调用签名：

```ts
  stopScanning(): void;
```

### getView

获取 video 的容器元素,开发者根据这个 DOM 用户可以自定义样式.

- 调用签名：

```ts
getView: HTMLElement | null;
```

### toggleTorch

打开/关闭手电筒

- 调用签名：

```ts
   async toggleTorch(): Promise<boolean>
```

### getTorchState

手电筒状态

- 调用签名：

```ts
  async getTorchState(): Promise<boolean>
```

### hasMedia

判断是否支持扫描功能

- 调用签名：

```ts
  hasMedia(): boolean;
```

## BarcodeScanner Plugin API

扫码功能对外提供的插件功能,在单独使用 plugin 功能的时候，不用声明组件。

```ts
<script setup lang="ts">
import { barcodeScannerPlugin } from "@bfex/plugin";
const onFileChanged = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  if (target && target.files?.[0]) {
    const img = target.files[0];
    console.info("photo ==> ", img.name, img.type, img.size);
    result.value = await barcodeScannerPlugin.process(img);
  }
};
<script>
<template>
<input type="file" @change="onFileChanged($event)" accept="image/*" capture>
</template>
```

### process

解析二维码图片,没有识别到二维码时，返回空数组。

- 调用签名：

```ts
  async process(blob: Blob, rotation = 0, formats = SupportedFormat.QR_CODE): Promise<string[]>
```

| Param          | Type                                                        | Description                            |
| -------------- | ----------------------------------------------------------- | -------------------------------------- |
| **`blob`**     | <code>Blob</code>                                           | 需要解析的图片数据                     |
| **`rotation`** | <code>number</code>                                         | 图片偏转角度                           |
| **`formats`**  | <code><a href="#supportedformat">SupportedFormat</a></code> | 解析的数据类型，比如解析二维码，条形码 |

### stop

停止解析二维码图片

- 调用签名

```ts
  async stop(): Promise<boolean>
```

## Interfaces

### ScanResult

扫码返回的结果。

| Prop             | Type                                                                          | Description                                  | Since |
| ---------------- | ----------------------------------------------------------------------------- | -------------------------------------------- | ----- |
| **`hasContent`** | <code>boolean</code>                                                          | 是否有识别到内容                             | 1.0.0 |
| **`content`**    | <code>string[]</code>                                                         | 扫码具体内容，是字符串数组                   | 1.0.0 |
| **`permission`** | <code><a href="#barcodescannerpermission">BarcodeScannerPermission</a></code> | 权限结果返回，用来判断用户是否对权限申请拒绝 | 1.0.0 |

#### BarcodeScannerPermission

对用户的权限返回进行标识。

| Prop             | Type                    | Description                  | Since |
| ---------------- | ----------------------- | ---------------------------- | ----- |
| **`UserReject`** | <code>UserReject</code> | 用户拒绝                     | 1.0.0 |
| **`UserAgree`**  | <code>UserAgree</code>  | 用户同意                     | 1.0.0 |
| **`UserError`**  | <code>UserError</code>  | 用户手机版本太低，不支持扫码 | 1.0.0 |

### SupportedFormat

扫码识别支持的格式

| Prop              | Type                | Platform     | Description |
| ----------------- | ------------------- | ------------ | ----------- |
| UPC_A             | 'UPC_A'             | Android only |             |
| UPC_E             | 'UPC_E'             | Android only |             |
| UPC_EAN_EXTENSION | 'UPC_EAN_EXTENSION' | Android only |             |
| EAN_8             | 'EAN_8'             | Android only |             |
| EAN_13            | 'EAN_13'            | Android only |             |
| CODE_39           | 'CODE_39'           | Android only |             |
| CODE_39_MOD_43    | 'CODE_39_MOD_43'    | iOS only     |             |
| CODE_93           | 'CODE_93'           | iOS only     |             |
| CODE_128          | 'CODE_128'          | iOS only     |             |
| CODABAR           | 'CODABAR'           | Android only |             |
| ITF               | 'ITF'               | Android only |             |
| ITF_14            | 'ITF_14'            | iOS only     |             |
| AZTEC             | 'AZTEC'             | iOS only     |             |
| DATA_MATRIX       | 'DATA_MATRIX'       | iOS only     |             |
| MAXICODE          | 'MAXICODE'          | Android only |             |
| PDF_417           | 'PDF_417'           | Android only |             |
| QR_CODE           | 'QR_CODE'           | Android only |             |
| RSS_14            | 'RSS_14'            | Android only |             |
| RSS_EXPANDED      | 'RSS_EXPANDED'      | Android only |             |
