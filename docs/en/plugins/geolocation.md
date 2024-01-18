---
outline: deep
---

# geolocation

<Badges name="@plaoc/plugins" />

::: tip intro:
Geolocation plugin
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `getLocation`

  **_Get current location_**

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
