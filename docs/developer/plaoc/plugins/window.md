---
outline: deep
---

# window

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip 介绍：
窗口控制插件，控制窗口放大缩小，隐藏等一系列操作。
:::

- [window](#window)
  - [Method](#method)
    - [`setBounds`](#setbounds)
    - [`getDisplay`](#getdisplay)
    - [`focusWindow`](#focuswindow)
    - [`blurWindow`](#blurwindow)
    - [`maximize`](#maximize)
    - [`unMaximize`](#unmaximize)
    - [`visible`](#visible)
    - [`close`](#close)
    - [`alert`](#alert)
    - [`createBottomSheets`](#createbottomsheets)
  - [Parameter](#parameter)
    - [`$AlertOptions`](#alertoptions)
    - [`$DisplayState`](#displaystate)
  - [Example](#example)
    - [Usage Plugins](#usage-plugins)
    - [Usage WebComponent](#usage-webcomponent)

## Method

### `setBounds`

**_设置窗口大小_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.setBounds(false, 500, 750);
```

### `getDisplay`

**_获取屏幕信息_**

```ts twoslash
import { windowPlugin, $DisplayState } from "@plaoc/plugins";
const displayInfo: $DisplayState = await windowPlugin.getDisplay();
```

- [$DisplayState](#displaystate)

### `focusWindow`

**_窗口聚焦_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.focusWindow();
```

### `blurWindow`

**_窗口失焦_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.blurWindow();
```

### `maximize`

**_最大化窗口_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.maximize();
```

### `unMaximize`

**_取消最大化窗口_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.unMaximize();
```

### `visible`

**_隐藏或者显示窗口_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.visible();
```

### `close`

**_关闭窗口_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.close();
```

### `alert`

**_弹出模态框_**

```ts twoslash
import { windowPlugin, $AlertOptions } from "@plaoc/plugins";
const options: $AlertOptions = {
  title: "提示信息",
  message: "登陆成功！",
};
await windowPlugin.alert(options);
```

- [$AlertOptions](#alertoptions)

### `createBottomSheets`

**_创建 BottomSheets 界面_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
const contentUrl = "http://dweb.中国";
await windowPlugin.createBottomSheets(contentUrl);
```

## Parameter

### `$AlertOptions`

**_弹出参数_**

```ts twoslash
export interface $AlertOptions {
  title: string;
  message: string;
  iconUrl?: string;
  iconAlt?: string;
  confirmText?: string;
  dismissText?: string;
}
```

### `$DisplayState`

**_屏幕状态_**

```ts twoslash
import { $Rect } from "@plaoc/plugins";
export type $DisplayState = {
  /**
   * 屏幕高度
   */
  height: number;
  /**
   * 屏幕宽度
   */
  width: number;
  /**
   * 键盘外边界位置大小
   */
  imeBoundingRect: $Rect;
};
```

## Example

### Usage Plugins

```vue twoslash
<script setup lang="ts">
import { reactive } from "vue";
import { windowPlugin } from "@plaoc/plugins";

const boardData = reactive({
  width: 500,
  height: 750,
  resizeable: false,
});
const setBounds = () => {
  windowPlugin.setBounds(
    boardData.resizeable,
    boardData.width,
    boardData.height
  );
};
</script>
```

### Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
// @noErrors
import { HTMLDwebWindowElement, $WindowState } from "@plaoc/plugins";

const $window = ref<HTMLDwebWindowElement>();
let windowComponent: HTMLDwebWindowElement;
onMounted(async () => {
  windowComponent = $window.value!;
  onStatusBarChange(await windowComponent.getState(), "init");
});
// 监听窗口状态
const onStatusBarChange = (info: $WindowState, type: string) => {
  console.log(
    info.topBarContentColor,
    info.topBarBackgroundColor,
    info.topBarOverlay
  );
};

const focus = () => {
  return windowComponent.focusWindow();
};
const blur = () => {
  return windowComponent.blurWindow();
};
const maximize = () => {
  return windowComponent.maximize();
};
const unMaximize = () => {
  return windowComponent.unMaximize();
};
const visible = () => {
  return windowComponent.visible();
};
const getDisplayInfo = async () => {
  const info = await windowComponent.getDisplay();
  console.log("当前屏幕信息：", JSON.stringify(info));
};
</script>
<template>
  <dweb-window
    ref="$window"
    @statechange="onStatusBarChange($event.detail, 'change')"
  ></dweb-window>
</template>
```
