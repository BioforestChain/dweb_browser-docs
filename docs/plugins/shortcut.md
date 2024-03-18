---
outline: deep
---

# shortcut

<Badges name="@plaoc/plugins" />

::: tip 介绍：
shortcut 插件，即长按 app 出现的捷径操作。
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

  **_注册快速操作_**

  icon 不传递在 Android 平台默认使用 app icon, iOS 当前不支持注册动态 shortcut 的时候传递 icon。

```ts twoslash
import { shortcutPlugin, ShortcutOption } from "@plaoc/plugins";
const option: ShortcutOption = {
  title: "新年快乐",
  data: "这是一条发到ipcEvent的消息🧨",
  icon: null,
};
const res = await shortcutPlugin.registry(option);
//                                   ^?
```

- `接收快捷消息`

注册 shortcut 事件监听，来接收消息。

```ts twoslash
import { dwebServiceWorker, toastPlugin } from "@plaoc/plugins";
dwebServiceWorker.addEventListener("shortcut", (event) => {
  console.log("shortcut", event.data);
  toastPlugin.show({ text: event.data });
});
```

#### Parameter

- `ShortcutOption`

  **_注册捷径的参数_**

```ts twoslash
export interface ShortcutOption {
  /**标题 */
  title: string;
  /**传递给应用的数据 */
  data: string;
  /**应用icon,不传递默认使用appIcon */
  icon: Uint8Array | null;
}
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { reactive } from "vue";
import { shortcutPlugin, ShortcutOption } from "@plaoc/plugins";

const shortcut: ShortcutOption = reactive({
  title: "新年快乐",
  data: "这是一条发到ipcEvent的消息🧨",
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
  title: "新年快乐",
  data: "这是一条发到ipcEvent的消息🧨",
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
