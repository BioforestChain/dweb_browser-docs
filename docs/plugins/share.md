---
outline: deep
---

# share

::: tip 介绍：
分享插件  
:::

- [Reference](#reference)
  - [Method](#method)
  - [Parameter](#parameter)
- [Usage](#usage)

## Reference

#### Method

- `canShare`
  
  **_识别二维码_**

```ts twoslash
import { sharePlugin } from "@plaoc/plugins";
await sharePlugin.canShare();
//                ^?
```

- `share`

  **_解析二维码，需要将图片转化为 blob 数据，再传递给函数进行识别。_**

```ts twoslash
import { sharePlugin, type ShareOptions } from "@plaoc/plugins";
// @noErrors
await sharePlugin.share(options: ShareOptions);
//                ^?
```

#### Parameter
- ShareOptions

  **_分享参数_**

```ts twoslash
import type { ShareOptions, ImageBlobOptions } from "@plaoc/plugins";
// @noErrors
const imageOptions: ImageBlobOptions = {
  type: "",
  quality: 0.8
};
const options: ShareOptions = {
  title: "",
  text: "",
  url: "",
  file: File,
  files: FileList,
  imageBlobOptions: imageOptions
};
```

## Usage

```vue {12,23}
<script setup lang="ts">
import { reactive } from "vue";
import type { HTMLDwebShareElement } from "@plaoc/plugins";

const shareData = reactive({
  title: "分享标题🍉",
  text: "分享文字分享文字",
  url: "https://gpt.waterbang.top",
  files: null as FileList | null,
});

const $sharePlugin = ref<HTMLDwebShareElement>();

const fileChange = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  if (target && target.files?.[0]) {
    shareData.files = target.files;
  }
};

async function shareHandle() {
  const share = $sharePlugin.value!
  const result = await share.share(shareData as unknown as ShareOptions);
}

</script>
<template>
  <dweb-share ref="$sharePlugin"></dweb-share>
  <input type="file" @change="fileChange($event)" />
  <button @click="shareHandle">Share</button>
</template>
```
