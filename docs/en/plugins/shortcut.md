---
outline: deep
---

# shortcut

<Badges name="@plaoc/plugins" />

::: tip introduction:
The shortcut plug-in is a shortcut operation that appears when you long press the app.
:::

- [shortcut](#shortcut)
  - [Reference](#reference)
    - [Method](#method)
      - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `registry`

  **_Quick registration operation_**

  If the icon is not passed, the Android platform uses the app icon by default. iOS currently does not support passing the icon when registering dynamic shortcuts.

```ts twoslash
import { shortcutPlugin, ShortcutOption } from "@plaoc/plugins";
const option: ShortcutOption = {
  title: "Happy New Year",
  data: "This is a message sent to ipcEvent🧨",
  icon: null,
};
const res = await shortcutPlugin.registry(option);
//                                 ^?
```

- `Receive quick messages`

Register shortcut event listener to receive messages.

```ts twoslash
import { dwebServiceWorker, toastPlugin } from "@plaoc/plugins";
dwebServiceWorker.addEventListener("shortcut", (event) => {
  console.log("shortcut", event.data);
  toastPlugin.show({ text: event.data });
});
```

#### Parameter

- `ShortcutOption`

  **_Parameters for registration shortcut_**

```ts twoslash
export interface ShortcutOption {
  /**Title */
  title: string;
  /**Data passed to the application */
  data: string;
  /**Application icon, if not passed, appIcon will be used by default */
  icon: Uint8Array | null;
}
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { reactive } from "vue";
import { shortcutPlugin, ShortcutOption } from "@plaoc/plugins";

const shortcut: ShortcutOption = reactive({
  title: "Happy New Year",
  data: "This is a message sent to ipcEvent🧨",
  icon: null,
});

const registry = async () => {
  const res = await shortcutPlugin.registry(shortcut);
  console.log("registry=>", res);
};
</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
// @noErrors
import {
  shortcutPlugin,
  ShortcutOption,
  HTMLDwebShortcutElement,
} from "@plaoc/plugins";

const $shortcutPlugin = ref<HTMLDwebShortcutElement>();
let shortcut: HTMLDwebShortcutElement;

onMounted(async () => {
  shortcut = $shortcutPlugin.value!;
});

const shortcut: ShortcutOption = reactive({
  title: "Happy New Year",
  data: "This is a message sent to ipcEvent🧨",
  icon: null,
});

const registry = async () => {
  const res = await shortcut.registry(shortcut);
  console.log("registry=>", res);
};
</script>
<template>
  <dweb-shortcut ref="$shortcutPlugin"></dweb-shortcut>
</template>
```
