---
outline: deep
---

# geolocation

::: tip 介绍：
地理位置插件
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `getLocation`

  **_获取当前位置_**

```ts twoslash
import { geolocationPlugin, $GeolocationPosition } from "@plaoc/plugins";
await geolocationPlugin.getLocation();
//                      ^?
```

## Usage

```vue {5}
<script setup lang="ts">
import { geolocationPlugin } from "@plaoc/plugins";

async function getLocation() {
  const res = await geolocationPlugin.getLocation();
}
</script>
<template>
  <dweb-geolocation></dweb-geolocation>
</template>
```
