---
outline: deep
---

# torch

<Badges name="@plaoc/plugins" />

::: tip intro:
Torch plugin 
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `toggleTorch`
  
  **_open/close torch_**

```ts twoslash
import { torchPlugin } from "@plaoc/plugins";
await torchPlugin.toggleTorch();
//                ^?
```

- `getTorchState`

  **_get torch state_**

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
