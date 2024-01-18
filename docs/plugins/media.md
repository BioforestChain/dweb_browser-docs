---
outline: deep
---

# media

<Badges name="@plaoc/plugins" />

::: tip 介绍：
媒体插件  
:::

- [Reference](#reference)
  - [Method](#method)
  - [Parameter](#parameter)
- [Usage](#usage)

## Reference

#### Method

- `savePictures`

  **_保存图片到相册_**

```ts twoslash
import { mediaPlugin } from "@plaoc/plugins";
// @noErrors
await mediaPlugin.savePictures({ file: File, saveLocation: "dwebbrowser") });
//                ^?
```

#### Parameter

- `MediaOption`

  **_媒体参数_**

```ts twoslash
import type { MediaOption } from "@plaoc/plugins";
// @noErrors
const options: MediaOption = { file: File, saveLocation: "" };
//                                         ^?
```

## Usage

```vue {7}
<script setup lang="ts">
import { mediaPlugin } from "@plaoc/plugins";

const fileChange = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  if (target && target.files?.[0]) {
    mediaPlugin.savePictures({ file: target.files[0] });
  }
};
</script>
<template>
  <dweb-media></dweb-media>
  <input type="file" accept="image/*" @change="fileChange($event)" />
</template>
```
