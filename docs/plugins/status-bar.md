---
outline: deep
---

# status-bar

<Badges name="@plaoc/plugins" />

::: tip 介绍：
状态栏插件  
:::

- [Reference](#reference)
  - [Method](#method)
  - [Parameter](#parameter)
- [Usage](#usage)

## Reference

#### Method

- `setState`

  **_设置状态_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setState({ color: "#ff00ff" });
//              ^?
```

- `getState`

  **_获取当前状态_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getState();
//              ^?
```

- `setColor`

  **_设置颜色_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setColor("#ff00ff");
//              ^?
```

- `getColor`

  **_获取当前颜色_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getColor();
//              ^?
```

- `setStyle`

  **_设置模式，如：暗黑模式_**

```ts twoslash
import { statusBarPlugin, STATUS_BAR_STYLE } from "@plaoc/plugins";
statusBarPlugin.setStyle(STATUS_BAR_STYLE.Dark);
//              ^?
```

- `getStyle`

  **_获取当前模式_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getStyle();
//              ^?
```

- `setOverlay`

  **_设置覆盖_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setOverlay(true);
//              ^?
```

- `getOverlay`

  **_获取覆盖状态_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getOverlay();
//              ^?
```

<!-- - `setVisible`

  **_设置显示隐藏_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setVisible(true);
//              ^?
```

- `getVisible`

  **_获取当前显示隐藏状态_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getVisible();
//              ^?
``` -->

#### Parameter

- `STATUS_BAR_STYLE`

  **_状态栏模式_**

```ts twoslash
import { STATUS_BAR_STYLE } from "@plaoc/plugins";
STATUS_BAR_STYLE.Dark;
//               ^|
```

- `$StatusBarWritableState`

  **_状态栏状态值_**

```ts twoslash
import { STATUS_BAR_STYLE, type $StatusBarWritableState } from "@plaoc/plugins";
const state: Partial<$StatusBarWritableState> = {
  color: "",
  style: STATUS_BAR_STYLE.Light,
  overlay: true,
  visible: true,
};
```

## Usage

```vue
<script setup lang="ts">
import { ref } from "vue";
import { HTMLDwebStatusBarElement } from "@plaoc/plugins";

const $statusBarPlugin = ref<HTMLDwebStatusBarElement>();

async function getState() {
  const statusBar = $statusBarPlugin.value!;
  const state = statusBar.getState();
}

</script>
<template>
  <dweb-status-bar ref="$statusBarPlugin"></dweb-status-bar>
</template>
```
