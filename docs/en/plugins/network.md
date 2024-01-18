---
outline: deep
---

# network

<Badges name="@plaoc/plugins" />

::: tip intro:
Network status plugin
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `onLine`
  
  **_Check if the network is online_**

```ts twoslash
import { networkPlugin } from "@plaoc/plugins";
await networkPlugin.onLine();
//                  ^?
```

- `getStatus`

  **_Get network status_**

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
