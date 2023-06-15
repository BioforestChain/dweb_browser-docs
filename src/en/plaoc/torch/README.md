---
title: Torch
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

手电筒控制插件。

> 具体查看示例代码： [Torch](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Torch.vue)

## Torch WebComponent API

先挂载 DOM 节点，然后就能调用相应 API。
以 vue3 为示例：

```ts
<script setup lang="ts">
import { HTMLDwebTorchElement } from '@dweb-browser/plaoc';
const $torchPlugin = ref<HTMLDwebTorchElement>();

let toast: HTMLDwebTorchElement;

onMounted(async () => {
  toast = $torchPlugin.value!;
})
// 打开/关闭手电筒
const toggleTorch = async () => {
  await toast.toggleTorch()
}
// 手电筒状态
const getTorchState = async () => {
  await toast.getTorchState()
}
<script>
<template>
  <dweb-torch ref="$torchPlugin"></dweb-torch>
</template>
```

### toggleTorch

控制打开/关闭手电筒。

- 调用签名：

```ts
  async toggleTorch(): Promise<boolean>
```

### getTorchState

手电筒状态，返回`true`是开。

- 调用签名：

```ts
  async getTorchState(): Promise<boolean>
```

## Torch Plugin API

WebComponent 的功能本质上由 Plugin 提供，因此 Plugin 的 API 同 WebComponent。

```ts
import { torchPlugin } from "@dweb-browser/plaoc";

// 获取手电筒状态
torchPlugin.getTorchState();
```
