---
outline: deep
---

# clipboard

::: tip intro:
clipboard plugin
:::

- [Reference](#reference)
  - [Method](#method)
  - [Parameter](#parameter)
- [Usage](#usage)

## Reference

#### Method

- `read`

  **_read clipboard_**

```ts twoslash
import { clipboardPlugin } from "@plaoc/plugins";
const res = await clipboardPlugin.read();
//                                ^?
```

- `write`

  **_write to clipboard_**

```ts twoslash
import { clipboardPlugin, ClipboardWriteOptions } from "@plaoc/plugins";

await clipboardPlugin.write({ string: "test" });
//                    ^?
```

#### Parameter

- `ClipboardWriteOptions`

  **_support code type_**

```ts twoslash
import { clipboardPlugin, ClipboardWriteOptions } from "@plaoc/plugins";

const options: ClipboardWriteOptions = {
  string: "",
  image: "",
  url: "",
  label: "",
};
```

## Usage

```vue {4,7}
<script setup lang="ts">
import { clipboardPlugin } from "@plaoc/plugins";

async function read() {
  await clipboardPlugin.read();
}
async function write() {
  await clipboardPlugin.write({ string: "usage" });
}
</script>
<template>
  <dweb-clipboard></dweb-clipboard>
</template>
```
