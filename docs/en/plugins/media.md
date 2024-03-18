---
outline: deep
---

# media

<Badges name="@plaoc/plugins" />

::: tip intro:
Media plugin
:::

- [Reference](#reference)
  - [Method](#method)
    - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `savePictures`

  **_Save picture to photo album_**

```ts twoslash
import { mediaPlugin } from "@plaoc/plugins";
// @noErrors
await mediaPlugin.savePictures({ file: File, saveLocation: "dwebbrowser") });
//                ^?
```

#### Parameter

- `MediaOption`

  **_media option_**

```ts twoslash
import type { MediaOption } from "@plaoc/plugins";
// @noErrors
const options: MediaOption = { file: File, saveLocation: "" };
//                                         ^?
```

## Usage Plugins

```vue twoslash
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
  <input type="file" accept="image/*" @change="fileChange($event)" />
</template>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { ref, onMounted } from "vue";
// @noErrors
import { HTMLDwebMediaElement } from "@plaoc/plugins";

const $mediaPlugin = ref<HTMLDwebMediaElement>();
let media: HTMLDwebMediaElement;

onMounted(async () => {
  media = $mediaPlugin.value!;
});

const fileChange = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  if (target && target.files?.[0]) {
    mediaPlugin.savePictures({ file: target.files[0] });
  }
};
</script>
<template>
  <dweb-media ref="$mediaPlugin"></dweb-media>
  <input type="file" accept="image/*" @change="fileChange($event)" />
</template>
```
