---
outline: deep
---

# dweb-update-controller

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip 介绍：
dweb 下载控制插件
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `download`
  
  **_下载Plaoc App_**

```ts twoslash
import { updateControllerPlugin } from "@plaoc/plugins";
await updateControllerPlugin.download("http://game.www.bfchain.org/metadata.json");
//                           ^?
```

## Usage

```vue twoslash
<script setup lang="ts">
import { updateControllerPlugin } from "@plaoc/plugins";

async function download() {
  const res = await updateControllerPlugin.download("http://game.www.bfchain.org/metadata.json");
}
</script>
<template>
</template>
```
