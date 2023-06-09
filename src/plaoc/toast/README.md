---
title: Toast
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

Toast,一个小的弹窗信息，在一段时间后消失。

> 具体查看示例代码： [Toast](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Toast.vue)

## Toast WebComponent API

先挂载 DOM 节点，然后就能调用相应 API。
以 vue3 为示例：

```ts
<script setup lang="ts">
import { HTMLDwebToastElement,ToastDuration } from '@bfex/plugin';
const $toastPlugin = ref<HTMLDwebToastElement>();

let toast: HTMLDwebToastElement;

onMounted(async () => {
  toast = $toastPlugin.value!;
})
const toast_message = ref("我是toast🍓");
const toast_duration = ref<ToastDuration>("short");
// 显示
const showToast = async () => {
  await toast.show({ text: toast_message.value, duration: toast_duration.value })
}

<script>
<template>
   <dweb-toast ref="$toastPlugin"></dweb-toast>
</template>
```

### show

调用显示。

- 调用签名：

```ts
  async show(options: ToastShowOptions):Promise<void>
```

| Param         | Type                                                          | Description              |
| ------------- | ------------------------------------------------------------- | ------------------------ |
| **`options`** | <code><a href="#toastshowoptions">ToastShowOptions</a></code> | 控制显示的位置内容和时间 |

## Toast Plugin API

WebComponent 的功能本质上由 Plugin 提供，因此 Plugin 的 API 同 WebComponent。

```ts
import { toastPlugin } from "@bfex/plugin";

toastPlugin.show({ text: "我是toast🍉", duration: "short", position: "top" });
```

## Interfaces

### ToastShowOptions

| Prop           | Type                                                    | Description                                                         | Since |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------------- | ----- |
| **`text`**     | <code>string</code>                                     | Toast 上显示的文本                                                  | 1.0.0 |
| **`duration`** | <code><a href="#toastduration">ToastDuration</a></code> | Toast 的持续时间，“短”（2000 毫秒）或“长”（3500 毫秒）              | 1.0.0 |
| **`position`** | <code><a href="#toastposition">ToastPosition</a></code> | Toast 的位置。在 Android 12 及更高版本上，所有 toast 都显示在底部。 | 1.0.0 |

#### ToastDuration

| Prop        | Type               | Description | Since |
| ----------- | ------------------ | ----------- | ----- |
| **`short`** | <code>short</code> | 显示 2000ms | 1.0.0 |
| **`long`**  | <code>long</code>  | 显示 3500ms | 1.0.0 |

#### ToastPosition

| Prop         | Type                | Description | Since |
| ------------ | ------------------- | ----------- | ----- |
| **`top`**    | <code>top</code>    | 显示在上面  | 1.0.0 |
| **`center`** | <code>center</code> | 显示在中间  | 1.0.0 |
| **`bottom`** | <code>bottom</code> | 显示在底部  | 1.0.0 |
