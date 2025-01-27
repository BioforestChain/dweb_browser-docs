---
outline: deep
---

# status-bar

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip Introduction:
Status Bar Plugin
:::

- [Reference](#reference)
  - [Method](#method)
    - [Parameter](#parameter)
- [Usage Plugins](#usage-plugins)
- [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `setState`

  **_Set Status_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setState({ color: "#ff00ff" });
//              ^?
```

- `getState`

  **_Get Current Status_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getState();
//              ^?
```

- `setColor`

  **_Set Color_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setColor("#ff00ff");
//              ^?
```

- `getColor`

  **_Get Current Color_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getColor();
//              ^?
```

- `setStyle`

  **_Set Mode, e.g.: Dark Mode_**

```ts twoslash
import { statusBarPlugin, STATUS_BAR_STYLE } from "@plaoc/plugins";
statusBarPlugin.setStyle(STATUS_BAR_STYLE.Dark);
//              ^?
```

- `getStyle`

  **_Get Current Mode_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getStyle();
//              ^?
```

- `setOverlay`

  **_Set Overlay_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setOverlay(true);
//              ^?
```

- `getOverlay`

  **_Get Overlay Status_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getOverlay();
//              ^?
```

<!-- - `setVisible`

  **_Set Visibility_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setVisible(true);
//              ^?
```

- `getVisible`

  **_Get Current Visibility Status_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getVisible();
//              ^?
``` -->

#### Parameter

- `STATUS_BAR_STYLE`

  **_Status Bar Mode_**

```ts twoslash
import { STATUS_BAR_STYLE } from "@plaoc/plugins";
STATUS_BAR_STYLE.Dark;
//               ^|
```

- `$StatusBarWritableState`

  **_Status Bar State Values_**

```ts twoslash
import { STATUS_BAR_STYLE, type $StatusBarWritableState } from "@plaoc/plugins";
const state: Partial<$StatusBarWritableState> = {
  color: "",
  style: STATUS_BAR_STYLE.Light,
  overlay: true,
  visible: true,
};
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
import { statusBarPlugin } from "@plaoc/plugins";

async function getState() {
  const state = statusBarPlugin.getState();
}
</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
// @noErrors
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
