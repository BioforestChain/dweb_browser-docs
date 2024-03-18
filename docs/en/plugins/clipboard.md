---
outline: deep
---

# clipboard

<Badges name="@plaoc/plugins" />

::: tip intro:
clipboard plugin
:::

- [clipboard](#clipboard)
  - [Reference](#reference)
    - [Method](#method)
      - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `read`

  **_read clipboard_**

```ts twoslash
import { clipboardPlugin } from "@plaoc/plugins";
const res = await clipboardPlugin.read();
//                                ^?
```

- `write`

  **_write to clipboard_**

According to the specification, text, images, and links are all of string type. In addition, `android` can pass `label`.

```ts twoslash
import { clipboardPlugin } from "@plaoc/plugins";

await clipboardPlugin.write({ string: "test" });
//                    ^?
```

#### Parameter

- `ClipboardWriteOptions`

  **_Clipboard writing parameters_**

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

```vue
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
