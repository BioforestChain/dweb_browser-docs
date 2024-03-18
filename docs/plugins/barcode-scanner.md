---
outline: deep
---

# bacode-scanner

<Badges name="@plaoc/plugins" />

::: tip 介绍：
扫码插件  
:::

- [bacode-scanner](#bacode-scanner)
  - [Reference](#reference)
    - [Method](#method)
      - [Parameter](#parameter)
    - [Usage Plugin](#usage-plugin)
    ***
    - [Method](#method-1)
      - [Parameter](#parameter-1)
    - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `createProcesser`

  **_创建控制句柄_**

```ts twoslash
import { barcodeScannerPlugin } from "@plaoc/plugins";
const controller = await barcodeScannerPlugin.createProcesser();
// 解析码，需要将图片转化为 blob 数据，再传递给函数进行识别。支持Uint8Array,Blob
controller.process(new Uint8Array());
// 停止解析条码数据的方法
controller.stop();
```

- `process`

  **_解析码，需要将图片转化为 blob 数据，再传递给函数进行识别。_**

```ts twoslash
import { barcodeScannerPlugin } from "@plaoc/plugins";

await barcodeScannerPlugin.process(new Uint8Array());
//                         ^?
```

- `stop`

  **_停止解析条码数据的方法_**

```ts twoslash
import { SupportedFormat, barcodeScannerPlugin } from "@plaoc/plugins";
await barcodeScannerPlugin.stop();
//                         ^?
```

#### Parameter

- `SupportedFormat`

  **_支持的码类型_**

```ts twoslash
import { SupportedFormat } from "@plaoc/plugins";
SupportedFormat.QR_CODE;
```

## Usage Plugin

```vue twoslash
<script setup lang="ts">
import { onMounted } from "vue";
import { barcodeScannerPlugin, ScannerProcesser } from "@plaoc/plugins";

let controller: ScannerProcesser;
onMounted(async () => {
  // 获取控制器
  controller = await barcodeScannerPlugin.createProcesser();
});
async function onFileChanged($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files?.[0]) {
    const img = target.files[0];
    const res = await controller.process(img);
  }
}
</script>
<template>
  <input type="file" @change="onFileChanged($event)" accept="image/*" capture />
</template>
```

---

### Method

- `startScanning`

**_开始扫码_**

#### Parameter

- `ScanOptions?`

  **_扫码传递的选项_**

```ts twoslash
import type { ScanOptions } from "@plaoc/plugins";
import { CameraDirection, SupportedFormat } from "@plaoc/plugins";
const options: ScanOptions = {
  rotation: 0,
  direction: CameraDirection.FRONT,
  //                         ^|
  width: 0,
  height: 0,
  formats: SupportedFormat.QR_CODE,
  //                       ^|
};
```

### Usage WebComponent

```vue
<script setup>
import { onMounted, ref } from 'vue'
import { HTMLDwebBarcodeScanningElement } from "@plaoc/plugins";

const $barcodeScannerPlugin = ref<HTMLDwebBarcodeScanningElement>();
let barcodeScanner: HTMLDwebBarcodeScanningElement;

onMounted(async () => {
  barcodeScanner = $barcodeScannerPlugin.value!
});

const startScanning = async () => {
  return await barcodeScanner.startScanning()
}

const stop = async () => {
  return await barcodeScanner.stop()
}
</script>
<template>
  <dweb-barcode-scanning ref="$barcodeScannerPlugin"></dweb-barcode-scanning>
</template>
```
