---
outline: deep
---

# torch

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip 介绍：
手电筒插件  
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage Plugins](#usage-plugins)
- [Usage WebComponent](#usage-webcomponent)

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

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { torchPlugin } from "@plaoc/plugins";

async function toggleTorch() {
  await torchPlugin.toggleTorch();
}
async function getTorchState() {
  await torchPlugin.getTorchState();
}

</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { ref, onMounted } from "vue";
// @noErrors
import { HTMLDwebTorchElement } from "@plaoc/plugins";

const $torchPlugin = ref<HTMLDwebTorchElement>();
let torch: HTMLDwebTorchElement;

onMounted(() => {
  torch = $torchPlugin.value!;
});

async function toggleTorch() {
  await torch.toggleTorch();
}
async function getTorchState() {
  await torch.getTorchState();
}

</script>
<template>
  <dweb-torch ref="$torchPlugin"></dweb-torch>
</template>
```
