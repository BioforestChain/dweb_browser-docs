---
outline: deep
---

# device

::: tip 介绍：
设备信息插件
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `getUUID`

  **_获取设备唯一标识 UUID_**

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
