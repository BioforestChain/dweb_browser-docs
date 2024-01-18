---
outline: deep
---

# torch

<Badges name="@plaoc/plugins" />

::: tip 介绍：
手电筒插件  
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `toggleTorch`
  
  **_打开/关闭手电筒_**

```ts twoslash
import { torchPlugin } from "@plaoc/plugins";
await torchPlugin.toggleTorch();
//                ^?
```

- `getTorchState`

  **_手电筒状态_**

```ts twoslash
import { torchPlugin } from "@plaoc/plugins";

await torchPlugin.getTorchState();
//                ^?
```

## Usage

```vue {5,8}
<script setup lang="ts">
import { torchPlugin } from "@plaoc/plugins";

async function toggleTorch() {
  await torchPlugin.toggleTorch();
}
async function getTorchState() {
  await torchPlugin.getTorchState();
}

</script>
<template>
  <dweb-torch></dweb-torch>
</template>
```
