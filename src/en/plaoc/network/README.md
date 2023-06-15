---
title: Network
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

该插件能提供获取设备网络状态的能力。

> 具体查看示例代码： [Network](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Network.vue)

## Network WebComponent API

先挂载 DOM 节点，然后就能调用相应 API。
以 vue3 为示例：

```ts
<script setup lang="ts">
import { HTMLDwebNetworkElement } from '@dweb-browser/plaoc';
const $networkPlugin = ref<HTMLDwebNetworkElement>();

let network: HTMLDwebNetworkElement;

onMounted(async () => {
  network = $networkPlugin.value!;
})
// 查看网络状态
const getStatus = async () => {
  await network.getStatus()
}
// 查看网络是否在线
const onLine = async () => {
  await network.onLine()
}
<script>
<template>
   <dweb-network ref="$networkPlugin"></dweb-network>
</template>
```

### onLine

查看网络是否在线。

- 调用签名：

```ts
  async onLine():Promise<boolean>
```

### getStatus

获取网络状态。

- 调用签名：

```ts
  async getStatus(): Promise<ConnectionStatus>
```

**Returns:** <code>Promise&lt;<a href="#connectionstatus">ConnectionStatus</a>&gt;</code>

## Network Plugin API

WebComponent 的功能本质上由 Plugin 提供，因此 Plugin 的 API 同 WebComponent。

```ts
import { networkPlugin } from "@dweb-browser/plaoc";

// 获取网络状态
networkPlugin.getStatus();
// 查看网络是否在线
networkPlugin.onLine();
```

## Interfaces

### ConnectionStatus

| Prop                 | Type                                                      | Description            | Since |
| -------------------- | --------------------------------------------------------- | ---------------------- | ----- |
| **`connected`**      | <code>boolean</code>                                      | 是否存在网络连接       | 1.0.0 |
| **`connectionType`** | <code><a href="#connectiontype">ConnectionType</a></code> | 当前使用的网络连接类型 | 1.0.0 |

#### ConnectionType

| Prop           | Type                | Description                    |
| -------------- | ------------------- | ------------------------------ |
| **`wifi`**     | <code>string</code> |                                |
| **`cellular`** | <code>string</code> | 蜂窝网络                       |
| **`2g`**       | <code>string</code> |                                |
| **`3g`**       | <code>string</code> |                                |
| **`4g`**       | <code>string</code> |                                |
| **`5g`**       | <code>string</code> |                                |
| **`6g`**       | <code>string</code> |                                |
| **`none`**     | <code>string</code> | 没有活动的网络连接时的网络状态 |
| **`unknown`**  | <code>string</code> |                                |
