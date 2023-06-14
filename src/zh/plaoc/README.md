# DwebBrowser 前端开发文档

## 快速上手

### 在页面引用 Plugin

> 以 vue3 为例：

```typescript
import { barcodeScannerPlugin } from "@dweb-browser/plaoc";
```

### 在页面使用 webComponent

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

## 配置参考
