---
title: StatusBar
category:
  - Plugin
tag:
  - WebComponent
---

控制系统状态栏。

> 具体查看示例代码： [Status Bar](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/StatusBar.vue)

## StatusBar WebComponent API

首先需要声明的 html 标签样式，该组件挂载了 statechange 方法，当有状态改变时会触发。

```ts
<script setup lang="ts">
import { HTMLDwebStatusBarElement,$StatusBarState } from '@dweb-browser/plaoc';
const $statusBar = ref<HTMLDwebStatusBarElement>();

let statusBar: HTMLDwebStatusBarElement;
onMounted(async () => {
  statusBar = $statusBar.value!;
  // 初始化赋值
  onStatusBarChange(await statusBar.getState(), "init");
});
// 伴随着状态改变而触发
const onStatusBarChange = (info: $StatusBarState, type: string) => {
  // color.value = info.color;
  // style.value = info.style;
  // overlay.value = info.overlay;
  // visible.value = info.visible;
  console.log(type, info);
};
<script>
<template>
   <dweb-status-bar ref="$statusBar" @statechange="onStatusBarChange($event.detail, 'change')"></dweb-status-bar>
</template>
```

### setColor

设置状态栏背景色

- 调用签名：

  ```ts
    async setColor(color: string): Promise<string>
  ```

  | Param       | Type                | Description                        |
  | ----------- | ------------------- | ---------------------------------- |
  | **`color`** | <code>string</code> | 十六进制背景色的值,如`#3C5D65B6`。     |

### getColor

获取状态栏背景色。

- 调用签名

  ```ts
    async getColor(): Promise<string>
  ```

### setStyle

设置状态栏的风格，是需要亮色调还是暗色调。

- 调用签名

  ```ts
    setStyle(style: BAR_STYLE): Promise<unknown>
  ```

| Param       | Type                                            | Description        |
| ----------- | ----------------------------------------------- | ------------------ |
| **`style`** | <code><a href="#bar-style">BAR_STYLE</a></code> | 设置状态栏的风格。 |

### getStyle

获取当前状态栏风格。

- 调用签名

  ```ts
    async getStyle(): Promise<BAR_STYLE>
  ```

  **Returns:** <code>Promise&lt;<a href="#bar-style">BAR_STYLE</a>&gt;</code>

### show

显示状态栏。

- 调用签名

  ```ts
    async show(): Promise<unknown>
  ```

### hide

隐藏状态栏。

- 调用签名

  ```ts
    async hide(): Promise<unknown>
  ```

### setVisible

设置 状态栏 显示/隐藏

- 调用签名

  ```ts
    async setVisible(visible: boolean): Promise<unknown>
  ```

### getVisible

获取状态栏是否显示

- 调用签名

  ```ts
    async getVisible(): Promise<boolan>
  ```

### setOverlay

设置状态栏 是否遮盖内容

- 调用签名

  ```ts
    setOverlay(overlay: boolean): Promise<unknown>
  ```

### getOverlay

获取状态栏 遮盖状态

- 调用签名
  ```ts
   async getOverlay(): Promise<boolan>
  ```

## StatusBar Plugin API

控制系统状态栏，对外提供的插件功能。WebComponent 的功能本质由 Plugin 提供，因此，Plugin 包含 WebComponent 所有 API。
用户也可以依据 Plugin 开发自己定制化的 WebComponent。

导入

```ts
import { statusBarPlugin } from "@dweb-browser/plaoc";
```

### setState

设置系统状态栏状态。

- 调用签名

  ```ts
  setState(state: Partial<$StatusBarWritableState>):Promise<void>
  ```

  | Param       | Type                                                                       | Description        |
  | ----------- | -------------------------------------------------------------------------- | ------------------ |
  | **`state`** | <code><a href="#statusbarwritablestate">$StatusBarWritableState</a></code> | 设置状态栏的风格。 |

> `Partial<Type>` 构造一个类型，其中 Type 的所有属性都设置为可选。该实用程序将返回一个表示给定类型的所有子集的类型。

### setStateByKey

单独设置某一项状态

- 调用签名

```ts
  setStateByKey<K extends keyof $StatusBarWritableState>(key: K, value: $StatusBarWritableState[key]): Promise<void>
```

| Param       | Type                                                                            | Description            |
| ----------- | ------------------------------------------------------------------------------- | ---------------------- |
| **`key`**   | <code><a href="#statusbarwritablestate">string</a></code>                       | 设置状态栏的某一个值。 |
| **`value`** | <code><a href="#statusbarwritablestate">$StatusBarWritableState[key]</a></code> | 设置状态栏的风格值。   |

### getState

获取状态

- 调用签名

  ```ts
    async getState(force_update?: boolean): Promise<$BarState>
  ```

  | Param              | Type                 | Description       |
  | ------------------ | -------------------- | ----------------- |
  | **`force_update`** | <code>boolean</code> | 是否需要强制更新     |

  **Returns:** <code>Promise&lt;<a href="#barstate">$BarState</a>&gt;</code>

## Interfaces

### BAR_STYLE

状态栏的风格类型约束，Light 代表文字为黑色，Dark 代表文字为白色。

Default：如果设备使用深色模式，条形文字将变亮。如果设备使用浅色模式，条形文字将变暗。在 Android 上，默认将是启动应用程序的那个风格。

| Prop          | Type                 | Description        | Since |
| ------------- | -------------------- | ------------------ | ----- |
| **`Dark`**    | <code>DARK</code>    | 深色背景的浅色文本 | 1.0.0 |
| **`Light`**   | <code>LIGHT</code>   | 浅色背景的深色文字 | 1.0.0 |
| **`Default`** | <code>DEFAULT</code> | 样式基于设备改变   | 1.0.0 |

### $BarState

#### $StatusBarWritableState

| Prop          | Type                                            | Description    | Since |
| ------------- | ----------------------------------------------- | -------------- | ----- |
| **`color`**   | <code>string</code>                             | 背景颜色       | 1.0.0 |
| **`style`**   | <code><a href="#bar-style">BAR_STYLE</a></code> | 整体风格       | 1.0.0 |
| **`overlay`** | <code>boolean</code>                            | 是否覆盖内容   | 1.0.0 |
| **`visible`** | <code>boolean</code>                            | 是否显示状态栏 | 1.0.0 |
