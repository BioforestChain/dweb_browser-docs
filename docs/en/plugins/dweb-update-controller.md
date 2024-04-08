---
outline: deep
---

# dweb-update-controller

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip intro:
dweb download controller plugin
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `download`
  
  **_Download Plaoc App_**

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
