---
outline: deep
---

# virtual-keyboard

<Badges name="@plaoc/plugins" />

::: tip intro:
Virtual keyboard plugin  
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
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.setState({ overlay: false });
//                    ^?
```

- `getState`

  **_get current state_**

```ts twoslash
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.getState();
//                    ^?
```

- `setOverlay`

  **_set overlay_**

```ts twoslash
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.setOverlay(true);
//                    ^?
```

- `getOverlay`

  **_get current overlay_**

```ts twoslash
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.getOverlay();
//                    ^?
```

#### Parameter

- `$VirtualKeyboardWritableState`

  **_virtual keyboard state_**

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
