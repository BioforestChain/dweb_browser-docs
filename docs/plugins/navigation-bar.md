---
outline: deep
---

# navigation-bar

<Badges name="@plaoc/plugins" />

::: tip 介绍：
导航栏插件  
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
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setState({ color: "#ff00ff" });
//                  ^?
```

- `getState`

  **_获取当前状态_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getState();
//                  ^?
```

- `setColor`

  **_设置颜色_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setColor("#ff00ff");
//                  ^?
```

- `getColor`

  **_获取当前颜色_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getColor();
//                  ^?
```

- `setStyle`

  **_设置模式，如：暗黑模式_**

```ts twoslash
import { navigationBarPlugin, NAVIGATION_BAR_STYLE } from "@plaoc/plugins";
navigationBarPlugin.setStyle(NAVIGATION_BAR_STYLE.Dark);
//                  ^?
```

- `getStyle`

  **_获取当前模式_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getStyle();
//                  ^?
```

- `setOverlay`

  **_设置覆盖_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setOverlay(true);
//                  ^?
```

- `getOverlay`

  **_获取覆盖状态_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getOverlay();
//                  ^?
```

<!-- - `setVisible`

  **_设置显示隐藏_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.setVisible(true);
//                  ^?
```

- `getVisible`

  **_获取当前显示隐藏状态_**

```ts twoslash
import { navigationBarPlugin } from "@plaoc/plugins";
navigationBarPlugin.getVisible();
//                  ^?
``` -->

#### Parameter

- `NAVIGATION_BAR_STYLE`

  **_导航栏模式_**

```ts twoslash
import { NAVIGATION_BAR_STYLE } from "@plaoc/plugins";
NAVIGATION_BAR_STYLE.Dark;
//                   ^|
```

- `$NavigationBarWritableState`

  **_状态栏状态值_**

```ts twoslash
import { NAVIGATION_BAR_STYLE, type $NavigationBarWritableState } from "@plaoc/plugins";
const state: Partial<$NavigationBarWritableState> = {
  color: "",
  style: NAVIGATION_BAR_STYLE.Light,
  overlay: true,
  visible: true,
};
```

## Usage

```vue
<script setup lang="ts">
import { ref } from "vue";
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
