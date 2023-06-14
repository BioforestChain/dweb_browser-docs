# DwebBrowser 前端开发文档

## 快速上手

安装项目：

```bash
npm install @dweb-browser/plaoc
```

### 如何以插件形式使用 

```typescript
import { barcodeScannerPlugin } from "@dweb-browser/plaoc";

// 调用扫码
const taskPshoto = async () => {
  await barcodeScannerPlugin.startScanning();
};
```

### 如何以 webComponent 形式使用

> 以 vue3 为例

```vue
<script setup lang="ts">
import { HTMLDwebBarcodeScanningElement } from "@dweb-browser/plaoc";

const $barcodeScannerPlugin = ref<HTMLDwebBarcodeScanningElement>();
let barcodeScanner: HTMLDwebBarcodeScanningElement;
onMounted(() => {
  // 这里就拿到了webComponent 对象
  barcodeScanner = $barcodeScannerPlugin.value!;
});

// 调用扫码
const taskPshoto = async () => {
  await barcodeScanner.startScanning();
};
</script>

<template>
  <dweb-barcode-scanning ref="$barcodeScannerPlugin"></dweb-barcode-scanning>
  <button @click="taskPhoto">scanner</button>
</template>
```

所有的API调用都遵循简洁，方便的原则，并且所有的权限申请，已经对开发者进行隐藏。
开发者不再需要在调用的时候，对权限另外耗费心力。