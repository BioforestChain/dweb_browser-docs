---
outline: deep
---

# window

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip Introduction:
Window control plug-in, control window zooming, hiding and other operations.
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

**_Set window size_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.setBounds(false, 500, 750);
```

### `getDisplay`

**_Get screen information_**

```ts twoslash
import { windowPlugin, $DisplayState } from "@plaoc/plugins";
const displayInfo: $DisplayState = await windowPlugin.getDisplay();
```

- [$DisplayState](#displaystate)

### `focusWindow`

**_Window focus_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.focusWindow();
```

### `blurWindow`

**_Window out of focus_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.blurWindow();
```

### `maximize`

**_Maximize window_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.maximize();
```

### `unMaximize`

**_Unmaximize window_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.unMaximize();
```

### `visible`

**_Hide or show window_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.visible();
```

### `close`

**_Close window_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
await windowPlugin.close();
```

### `alert`

**_Popup modal box_**

```ts twoslash
import { windowPlugin, $AlertOptions } from "@plaoc/plugins";
const options: $AlertOptions = {
  title: "Prompt information",
  message: "Login successful! ",
};
await windowPlugin.alert(options);
```

- [$AlertOptions](#alertoptions)

### `createBottomSheets`

**_Create BottomSheets interface_**

```ts twoslash
import { windowPlugin } from "@plaoc/plugins";
const contentUrl = "http://dweb.中国";
await windowPlugin.createBottomSheets(contentUrl);
```

## Parameter

### `$AlertOptions`

**_Popup parameters_**

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

**_Screen state_**

```ts twoslash
import { $Rect } from "@plaoc/plugins";
export type $DisplayState = {
  /**
   * Screen height
   */
  height: number;
  /**
   * Screen width
   */
  width: number;
  /**
   * Keyboard outer border position size
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
// Listening window status
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
  console.log("Current screen information:", JSON.stringify(info));
};
</script>
<template>
  <dweb-window
    ref="$window"
    @statechange="onStatusBarChange($event.detail, 'change')"
  ></dweb-window>
</template>
```
