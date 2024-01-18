---
outline: deep
---

# device

::: tip intro:
Device Info plugin
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `getUUID`

  **_Get the unique identifier of the device UUID_**

```ts twoslash
import { devicePlugin } from "@plaoc/plugins";
await devicePlugin.getUUID();
//                 ^?
```

## Usage

```vue {5}
<script setup lang="ts">
import { devicePlugin } from "@plaoc/plugins";

async function getUUID() {
  const { uuid } = await devicePlugin.getUUID();
}
</script>
<template>
  <dweb-device></dweb-device>
</template>
```
