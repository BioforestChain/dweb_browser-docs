---
title: Haptics
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

设备的振动反馈 API。

> 具体查看示例代码： [Haptics](https://github.com/BioforestChain/dweb_browser/blob/main/example/vue3/src/pages/Haptics.vue)

## Haptics WebComponent API

使用 WebComponent 需要先挂载 DOM 节点，然后就能调用相应 API。
以 vue3 为示例：

```ts
<script setup lang="ts">
import { HTMLDwebHapticsElement } from '@bfex/plugin';
const $hapticsPlugin = ref<HTMLDwebHapticsElement>();

let haptics: HTMLDwebHapticsElement;

onMounted(async () => {
  haptics = $hapticsPlugin.value!;
})
// 触碰轻质量物体
const impactStyle = ref<ImpactStyle>("HEAVY" as never)
const impactLight = async () => {
  await haptics.impactLight({ style: impactStyle.value })
}
// 振动通知
const notificationStyle = ref<NotificationType>("SUCCESS" as never)
const notification = async () => {
  await  haptics.notification({ type: notificationStyle.value })
}
<script>
<template>
   <dweb-haptics ref="$hapticsPlugin"></dweb-haptics>
</template>
```

### impactLight

触碰轻质量物体。

- 调用签名：

```ts
  async impactLight(options: ImpactOptions): Promise<void>
```

| Param         | Type                                                    | Description    |
| ------------- | ------------------------------------------------------- | -------------- |
| **`options`** | <code><a href="#impactoptions">ImpactOptions</a></code> | 振动的反馈风格 |

### vibrate

自定义振动效果。

- 调用签名：

```ts
  async vibrate(options: VibrateOptions): Promise<void>
```

| Param         | Type                                                      | Description                  |
| ------------- | --------------------------------------------------------- | ---------------------------- |
| **`options`** | <code><a href="#vibrateoptions">VibrateOptions</a></code> | 振动持续时间（以毫秒为单位） |

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

### ImpactOptions

| Prop        | Type                                                | Description    | Since |
| ----------- | --------------------------------------------------- | -------------- | ----- |
| **`style`** | <code><a href="#impactstyle">ImpactStyle</a></code> | 振动的反馈风格 | 1.0.0 |

#### ImpactStyle

| Prop        | Type               | Description    | Since |
| ----------- | ------------------ | -------------- | ----- |
| **`Heavy`** | <code>Heavy</code> | 振动的反馈风格 | 1.0.0 |
| **`Heavy`** | <code>Heavy</code> | 振动的反馈风格 | 1.0.0 |
| **`Heavy`** | <code>Heavy</code> | 振动的反馈风格 | 1.0.0 |

### VibrateOptions

| Prop           | Type                | Description                  | Since |
| -------------- | ------------------- | ---------------------------- | ----- |
| **`duration`** | <code>number</code> | 振动持续时间（以毫秒为单位） | 1.0.0 |
