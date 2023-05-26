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

### notification

振动通知。

- 调用签名：

```ts
  async notification(options: NotificationOptions): Promise<void>
```

| Param         | Type                                                                | Description    |
| ------------- | ------------------------------------------------------------------- | -------------- |
| **`options`** | <code><a href="#notificationoptions">NotificationOptions</a></code> | 振动的反馈风格 |

### vibrateClick

单击手势的反馈振动。

- 调用签名：

```ts
  async vibrateClick(): Promise<void>
```

### vibrateDisabled

禁用手势的反馈振动。一段抖动特效, 前面抖动增强然后衰退，
这里只针对抖动增强阶段提供同步的振动反馈。

- 调用签名：

```ts
  async vibrateDisabled(): Promise<void>
```

### vibrateDoubleClick

双击手势的反馈振动。

- 调用签名：

```ts
  async vibrateDoubleClick(): Promise<void>
```

### vibrateHeavyClick

重击手势的反馈振动, 比如菜单键/惨案/3Dtouch。

- 调用签名：

```ts
  async vibrateHeavyClick(): Promise<void>
```

### vibrateTick

滴答的反馈振动。

- 调用签名：

```ts
  async vibrateTick(): Promise<void>
```

### vibrate

自定义振动效果。

- 调用签名：

```ts
  async vibrate(options: VibrateOptions): Promise<void>
```

| Param         | Type                                                      | Description                  |
| ------------- | --------------------------------------------------------- | ---------------------------- |
| **`options`** | <code><a href="#vibrateoptions">VibrateOptions</a></code> | 振动持续时间（以毫秒为单位） |

## Haptics Plugin API

WebComponent 的功能本质上由 Plugin 提供，因此 Plugin 的 API 同 WebComponent。

```ts
import { hapticsPlugin } from "@bfex/plugin";

// 单击手势的反馈振动
biometricsPlugin.vibrateClick();
// 双击手势的反馈振动
biometricsPlugin.vibrateDoubleClick();
```

## Interfaces

### ImpactOptions

| Prop        | Type                                                | Description    | Since |
| ----------- | --------------------------------------------------- | -------------- | ----- |
| **`style`** | <code><a href="#impactstyle">ImpactStyle</a></code> | 振动的反馈风格 | 1.0.0 |

#### ImpactStyle

| Prop         | Type                | Description                      | Since |
| ------------ | ------------------- | -------------------------------- | ----- |
| **`Heavy`**  | <code>HEAVY</code>  | 大而重的用户界面元素之间的碰撞   | 1.0.0 |
| **`Medium`** | <code>MEDIUM</code> | 中等大小的用户界面元素之间的冲突 | 1.0.0 |
| **`Light`**  | <code>LIGHT</code>  | 小而轻的用户界面元素之间的碰撞   | 1.0.0 |

### NotificationOptions

| Prop       | Type                          | Description  | Since |
| ---------- | ----------------------------- | ------------ | ----- |
| **`type`** | <code>NotificationType</code> | 通知反馈类型 | 1.0.0 |

### NotificationType

| Prop          | Type                 | Description                      | Since |
| ------------- | -------------------- | -------------------------------- | ----- |
| **`Success`** | <code>SUCCESS</code> | 表示任务已成功完成的通知反馈类型 | 1.0.0 |
| **`Warning`** | <code>WARNING</code> | 指示任务已产生警告的通知反馈类型 | 1.0.0 |
| **`Error`**   | <code>ERROR</code>   | 任务失败的通知反馈类型           | 1.0.0 |

### VibrateOptions

| Prop           | Type                | Description                  | Since |
| -------------- | ------------------- | ---------------------------- | ----- |
| **`duration`** | <code>number</code> | 振动持续时间（以毫秒为单位） | 1.0.0 |
