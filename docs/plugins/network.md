---
outline: deep
---

# network

::: tip 介绍：
网络状态插件  
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `onLine`
  
  **_查看网络是否在线_**

```ts twoslash
import { networkPlugin } from "@plaoc/plugins";
await networkPlugin.onLine();
//                  ^?
```

- `getStatus`

  **_获取网络状态_**

```ts twoslash
import { networkPlugin } from "@plaoc/plugins";

await networkPlugin.getStatus();
//                  ^?
```

## Usage

```vue {5,6}
<script setup lang="ts">
import { networkPlugin } from "@plaoc/plugins";

async function getNetworkState() {
  const state = networkPlugin.onLine();
  const status = networkPlugin.getStatus();
}
</script>
<template>
  <dweb-network></dweb-network>
</template>
```
