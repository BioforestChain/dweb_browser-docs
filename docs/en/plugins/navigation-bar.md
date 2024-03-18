---
outline: deep
---

# navigation-bar

<Badges name="@plaoc/plugins" />

::: tip intro:
Navigation bar plugin 
:::

- [Reference](#reference)
  - [Method](#method)
    - [Parameter](#parameter)
- [Usage Plugins](#usage-plugins)
- [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `setState`

  **_set state_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setState({ color: "#ff00ff" });
//                  ^?
```

- `getState`

  **_get current state_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getState();
//                  ^?
```

- `setColor`

  **_set color_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setColor("#ff00ff");
//                  ^?
```

- `getColor`

  **_get current color_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getColor();
//                  ^?
```

- `setStyle`

  **_set style, such as dark mode_**

```ts twoslash
import { navigationBarPlugin, NAVIGATION_BAR_STYLE } from "@plaoc/plugins";
navigationBarPlugin.setStyle(NAVIGATION_BAR_STYLE.Dark);
//                  ^?
```

- `getStyle`

  **_get current style_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getStyle();
//                  ^?
```

- `setOverlay`

  **_set overlay_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setOverlay(true);
//                  ^?
```

- `getOverlay`

  **_get overlay_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getOverlay();
//                  ^?
```

<!-- - `setVisible`

  **_set visible_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setVisible(true);
//                  ^?
```

- `getVisible`

  **_get current visible_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getVisible();
//                  ^?
``` -->

#### Parameter

- `NAVIGATION_BAR_STYLE`

  **_navigation bar style_**

```ts twoslash
import { NAVIGATION_BAR_STYLE } from "@plaoc/plugins";
NAVIGATION_BAR_STYLE.Dark;
//                   ^|
```

- `$NavigationBarWritableState`

  **_navigation bar state_**

```ts twoslash
import { NAVIGATION_BAR_STYLE, type $NavigationBarWritableState } from "@plaoc/plugins";
const state: Partial<$NavigationBarWritableState> = {
  color: "",
  style: NAVIGATION_BAR_STYLE.Light,
  overlay: true,
  visible: true,
};
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
import { navigationBarPlugin } from "@plaoc/plugins";

async function getState() {
  const state = navigationBarPlugin.getState();
}

</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
// @noErrors
import { HTMLDwebNavigationBarElement } from "@plaoc/plugins";

const $navigationBarPlugin = ref<HTMLDwebNavigationBarElement>();

async function getState() {
  const navigationBar = $navigationBarPlugin.value!;
  const state = navigationBar.getState();
}

</script>
<template>
  <dweb-navigation-bar ref="$navigationBarPlugin"></dweb-navigation-bar>
</template>
```
