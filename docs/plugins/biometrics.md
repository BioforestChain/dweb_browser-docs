---
outline: deep
---

# biometrics

<Badges name="@plaoc/plugins" />

::: tip 介绍：
生物识别插件  
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `check`

  **_检查是否支持生物识别_**

```ts twoslash
import { biometricsPlugin } from "@plaoc/plugins";
await biometricsPlugin.check();
//                     ^?
```

- `biometrics`

  **_生物识别_**

```ts twoslash
import { biometricsPlugin } from "@plaoc/plugins";

await biometricsPlugin.biometrics();
//                     ^?
```

## Usage

```vue {5,6}
<script setup lang="ts">
import { biometricsPlugin } from "@plaoc/plugins";

async function biometrics() {
  if (await biometricsPlugin.check()) {
    const res = await biometricsPlugin.biometrics();
  }
}
</script>
<template>
  <dweb-biometrics></dweb-biometrics>
</template>
```
