# DwebBrowser 前端开发文档

## 快速上手

### Dweb 配置

首先需要配置 Dweb API 的地址,直接配置到入口文件中。

> 以vue3为例：

```vue
/// APP.vue
<script setup lang="ts">
import "@bfex/plugin";
</script>

<template>
  <dweb-config></dweb-config>
</template>
```

#### (可选) 动态配置 api-url

`api-url` 设置本质上是设置 `public_origin`，其中 `public_origin` 是指标准的 http 协议链接，可以在标准的网络中被访问（包括本机的其它应用、以及本机所处的局域网），
它的本质就是一个网关，所有的本机请求都会由它代理分发。

所以如果要调用别的应用的服务，则需要填写别的应用的 `public_origin` 服务地址。

比如：
```vue
/// APP.vue
<script setup lang="ts">
import "@bfex/plugin";

const apiUrl = "https://api.dweb.waterbang.top.dweb/index.html?X-Dweb-Host=api.cotdemo.bfs.dweb:443#/"
</script>

<template>
  <dweb-config :apiUrl="apiUrl"></dweb-config>
</template>
```


### 在页面引用 Plugin

> 以 vue3 为例：

```typescript
import { barcodeScannerPlugin } from "@bfex/plugin";
```

### 在页面使用 webComponent

> 以 vue3 为例

```vue
<script setup lang="ts">
import { HTMLDwebBarcodeScanningElement } from "@bfex/plugin";

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
