---
outline: deep
---

# clipboard

<Badges name="@plaoc/plugins" />

::: tip 介绍：
剪切板插件  
:::

- [Reference](#reference)
  - [Method](#method)
  - [Parameter](#parameter)
- [Usage](#usage)

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

```ts twoslash
import { clipboardPlugin, ClipboardWriteOptions } from "@plaoc/plugins";

await clipboardPlugin.write({ string: "test" });
//                    ^?
```

#### Parameter

- `ClipboardWriteOptions`

  **_支持的码类型_**

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
