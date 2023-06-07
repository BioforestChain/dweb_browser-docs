---
title: SplashScreen (开发中)
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

提供启动屏功能。

> 具体查看示例代码： [SplashScreen](https://github.com/BioforestChain/dweb_browser/blob/main/example/vue3/src/pages/SplashScreen.vue)

## SplashScreen WebComponent API

<!-- #### SplashScreen

启动屏配置项。

| Prop        | Type                | Description                                   | Since |
| ----------- | ------------------- | --------------------------------------------- | ----- |
| **`entry`** | <code>string</code> | 启动屏页面地址，相对于 app 根目录或者远程地址 | 1.0.0 | -->

<!--
先挂载 DOM 节点，然后就能调用相应 API。
以 vue3 为示例：

```ts
<script setup lang="ts">
import { HTMLDwebBiometricsElement } from '@bfex/plugin';
const $biometricsPlugin = ref<HTMLDwebBiometricsElement>();

let biometrics: HTMLDwebBiometricsElement;

onMounted(async () => {
  biometrics = $biometricsPlugin.value!;
})
// 检查设备是否可以生物识别
const check = async () => {
  await biometrics.check()
}
// 调用生物识别
const fingerprint = async () => {
  await biometrics.biometrics()
}
<script>
<template>
  <dweb-biometrics ref="$biometricsPlugin"></dweb-biometrics>
</template>
```

### check

检查是否支持生物识别。

- 调用签名：

```ts
  async check():Promise<boolean>
```

### biometrics

调用生物识别。

- 调用签名：

```ts
  async biometrics(): Promise<BioetricsResult>
```

**Returns:** <code>Promise&lt;<a href="#bioetricsresult">BioetricsResult</a>&gt;</code>

## Biometrics Plugin API

WebComponent 的功能本质上由 Plugin 提供，因此 Plugin 的 API 同 WebComponent。

```ts
import { biometricsPlugin } from "@bfex/plugin";

// 调用生物识别
biometricsPlugin.biometrics();
// 检查是否支持生物识别
biometricsPlugin.check();
```

## Interfaces

### BioetricsResult

| Prop          | Type                 | Description                      | Since |
| ------------- | -------------------- | -------------------------------- | ----- |
| **`success`** | <code>boolean</code> | 返回设备是否通过生物识别         | 1.0.0 |
| **`message`** | <code>string</code>  | 体现有关用户授权信息和报错返回值 | 1.0.0 | -->
