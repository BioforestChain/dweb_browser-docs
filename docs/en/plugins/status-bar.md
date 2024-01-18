---
outline: deep
---

# status-bar

<Badges name="@plaoc/plugins" />

::: tip intro:
Status bar plugin 
:::

- [Reference](#reference)
  - [Method](#method)
  - [Parameter](#parameter)
- [Usage](#usage)

## Reference

#### Method

- `setState`

  **_set state_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setState({ color: "#ff00ff" });
//              ^?
```

- `getState`

  **_get current state_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getState();
//              ^?
```

- `setColor`

  **_set color_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setColor("#ff00ff");
//              ^?
```

- `getColor`

  **_get current color_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getColor();
//              ^?
```

- `setStyle`

  **_set style, such as dark mode_**

```ts twoslash
import { statusBarPlugin, STATUS_BAR_STYLE } from "@plaoc/plugins";
statusBarPlugin.setStyle(STATUS_BAR_STYLE.Dark);
//              ^?
```

- `getStyle`

  **_get current style_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getStyle();
//              ^?
```

- `setOverlay`

  **_set overlay_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setOverlay(true);
//              ^?
```

- `getOverlay`

  **_get current overlay_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getOverlay();
//              ^?
```

<!-- - `setVisible`

  **_set visible_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.setVisible(true);
//              ^?
```

- `getVisible`

  **_get current visible_**

```ts twoslash
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.getVisible();
//              ^?
``` -->

#### Parameter

- `STATUS_BAR_STYLE`

  **_status bar style_**

```ts twoslash
import { STATUS_BAR_STYLE } from "@plaoc/plugins";
STATUS_BAR_STYLE.Dark;
//               ^|
```

- `$StatusBarWritableState`

  **_status bar state_**

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
