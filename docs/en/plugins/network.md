---
outline: deep
---

# network

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip intro:
Network status plugin
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage Plugins](#usage-plugins)
- [Usage WebComponent](#usage-webcomponent)

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

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { networkPlugin } from "@plaoc/plugins";

async function getNetworkState() {
  const state = networkPlugin.onLine();
  const status = networkPlugin.getStatus();
}
</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { ref, onMounted } from "vue";
// @noErrors
import { HTMLDwebNetworkElement } from "@plaoc/plugins";

let $networkPlugin = ref<HTMLDwebNetworkElement>();
let network: HTMLDwebNetworkElement;

onMounted(() => {
  network = $networkPlugin.value!;
});

async function getNetworkState() {
  const state = network.onLine();
  const status = network.getStatus();
}
</script>
<template>
  <dweb-network ref="$networkPlugin"></dweb-network>
</template>
```
