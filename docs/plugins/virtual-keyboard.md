---
outline: deep
---

# virtual-keyboard

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip 介绍：
虚拟键盘插件  
:::

- [Reference](#reference)
  - [Method](#method)
    - [Parameter](#parameter)
- [Usage Plugins](#usage-plugins)
- [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `setState`

  **_设置状态_**

```ts twoslash
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.setState({ overlay: false });
//                    ^?
```

- `getState`

  **_获取当前状态_**

```ts twoslash
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.getState();
//                    ^?
```

- `setOverlay`

  **_设置覆盖_**

```ts twoslash
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.setOverlay(true);
//                    ^?
```

- `getOverlay`

  **_获取覆盖状态_**

```ts twoslash
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.getOverlay();
//                    ^?
```

#### Parameter

- `$VirtualKeyboardWritableState`

  **_虚拟键盘状态值_**

```ts twoslash
import type { $VirtualKeyboardWritableState } from "@plaoc/plugins";
const state: Partial<$VirtualKeyboardWritableState> = {
  overlay: true,
};
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
import { virtualKeyboardPlugin } from "@plaoc/plugins";

async function getState() {
  const state = virtualKeyboardPlugin.getState();
}
</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
// @noErrors
import { HTMLDwebVirtualKeyboardElement } from "@plaoc/plugins";

const $virtualKeyboardPlugin = ref<HTMLDwebVirtualKeyboardElement>();

async function getState() {
  const virtualKeyboard = $virtualKeyboardPlugin.value!;
  const state = virtualKeyboard.getState();
}

</script>
<template>
  <dweb-virtual-keyboard ref="$virtualKeyboardPlugin"></dweb-virtual-keyboard>
</template>
```
