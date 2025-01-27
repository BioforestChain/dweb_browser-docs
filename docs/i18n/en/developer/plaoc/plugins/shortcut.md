---
outline: deep
---

# Shortcut

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip Introduction:
The shortcut plugin enables quick actions that appear when long-pressing an app.
:::

- [Shortcut](#shortcut)
  - [Reference](#reference)
    - [Method](#method)
      - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `registry`

  **_Register Quick Actions_**

  If no icon is provided, the Android platform defaults to using the app icon. iOS currently does not support passing an icon when registering dynamic shortcuts.

```ts twoslash
import { shortcutPlugin, ShortcutOption } from "@plaoc/plugins";
const option: ShortcutOption = {
  title: "Happy New Year",
  data: "This is a message sent to ipcEvent🧨",
  icon: null,
};
const res = await shortcutPlugin.registry(option);
//                                   ^?
```

- `Receive Shortcut Messages`

Register a shortcut event listener to receive messages.

```ts twoslash
import { dwebServiceWorker, toastPlugin } from "@plaoc/plugins";
dwebServiceWorker.addEventListener("shortcut", (event) => {
  console.log("shortcut", event.data);
  toastPlugin.show({ text: event.data });
});
```

#### Parameter

- `ShortcutOption`

  **_Parameters for Registering Shortcuts_**

```ts twoslash
export interface ShortcutOption {
  /**Title */
  title: string;
  /**Data passed to the application */
  data: string;
  /**Application icon, defaults to appIcon if not provided */
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
