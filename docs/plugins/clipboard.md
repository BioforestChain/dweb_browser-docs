---
outline: deep
---

# clipboard

<Badges name="@plaoc/plugins" />

::: tip 介绍：
剪切板插件  
:::

- [clipboard](#clipboard)
  - [Reference](#reference)
    - [Method](#method)
    - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

#### Method

- `read`

  **_读取剪切板_**

```ts twoslash
import { clipboardPlugin } from "@plaoc/plugins";
const res = await clipboardPlugin.read();
//                                ^?
```

- `write`

  **_写入剪切板_**

根据规范，区分文本，图片，链接，都为字符串类型，另外`android`可传递`label`。

```ts twoslash
import { clipboardPlugin, ClipboardWriteOptions } from "@plaoc/plugins";

await clipboardPlugin.write({ string: "test" });
//                    ^?
```

#### Parameter

- `ClipboardWriteOptions`

  **_剪切板写入参数_**

```ts twoslash
import { ClipboardWriteOptions } from "@plaoc/plugins";

const options: ClipboardWriteOptions = {
  string: "",
  image: "",
  url: "",
  label: "" /**android only */,
};
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { clipboardPlugin } from "@plaoc/plugins";

async function read() {
  await clipboardPlugin.read();
}
async function write() {
  await clipboardPlugin.write({ string: "hi" });
}
</script>
```

## Usage WebComponent

```vue {4,7}
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { HTMLDwebClipboardElement } from "@plaoc/plugins";

const $clipboardPlugin = ref<HTMLDwebClipboardElement>();
let clipboard: HTMLDwebClipboardElement;
onMounted(async () => {
  clipboard = $clipboardPlugin.value!;
});

async function read() {
  await clipboard.read();
}
async function write() {
  await clipboard.write({ string: "usage" });
}
</script>
<template>
  <dweb-clipboard ref="$clipboardPlugin"></dweb-clipboard>
</template>
```
