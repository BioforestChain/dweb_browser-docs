---
outline: deep
---

# device

<Badges name="@plaoc/plugins" />

::: tip intro:
Device Info plugin
:::

- [device](#device)
  - [Reference](#reference)
    - [Method](#method)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

#### Method

- `getUUID`

  **_Get the unique identifier of the device UUID_**

Deleting the app will not change it.

```ts twoslash
import { devicePlugin } from "@plaoc/plugins";
await devicePlugin.getUUID();
//                 ^?
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { devicePlugin } from "@plaoc/plugins";

async function getUUID() {
  const { uuid } = await devicePlugin.getUUID();
}
</script>
```

## Usage WebComponent

```vue {5}
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { HTMLDeviceElement } from "@plaoc/plugins";

const $devicePlugin = ref<HTMLDeviceElement>();
let config: HTMLDeviceElement;

onMounted(async () => {
  config = $devicePlugin.value!;
});

async function getUUID() {
  const { uuid } = await config.getUUID();
}
</script>
<template>
  <dweb-device ref="$devicePlugin"></dweb-device>
</template>
```
