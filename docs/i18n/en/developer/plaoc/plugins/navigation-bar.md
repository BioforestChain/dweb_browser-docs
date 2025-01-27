---
outline: deep
---

# navigation-bar

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip Introduction:
Navigation Bar Plugin
:::

- [Reference](#reference)
  - [Method](#method)
    - [Parameter](#parameter)
- [Usage Plugins](#usage-plugins)
- [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `setState`

  **_Set State_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setState({ color: "#ff00ff" });
//                  ^?
```

- `getState`

  **_Get Current State_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getState();
//                  ^?
```

- `setColor`

  **_Set Color_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setColor("#ff00ff");
//                  ^?
```

- `getColor`

  **_Get Current Color_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getColor();
//                  ^?
```

- `setStyle`

  **_Set Mode, e.g., Dark Mode_**

```ts twoslash
import { navigationBarPlugin, NAVIGATION_BAR_STYLE } from "@plaoc/plugins";
navigationBarPlugin.setStyle(NAVIGATION_BAR_STYLE.Dark);
//                  ^?
```

- `getStyle`

  **_Get Current Mode_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getStyle();
//                  ^?
```

- `setOverlay`

  **_Set Overlay_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setOverlay(true);
//                  ^?
```

- `getOverlay`

  **_Get Overlay State_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getOverlay();
//                  ^?
```

<!-- - `setVisible`

  **_Set Visibility_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setVisible(true);
//                  ^?
```

- `getVisible`

  **_Get Current Visibility State_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getVisible();
//                  ^?
``` -->

#### Parameter

- `NAVIGATION_BAR_STYLE`

  **_Navigation Bar Mode_**

```ts twoslash
import { NAVIGATION_BAR_STYLE } from "@plaoc/plugins";
NAVIGATION_BAR_STYLE.Dark;
//                   ^|
```

- `$NavigationBarWritableState`

  **_Status Bar State Value_**

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
