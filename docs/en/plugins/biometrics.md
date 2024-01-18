---
outline: deep
---

# biometrics

::: tip intro:
biometrics plugin 
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `check`

  **_Check if biometrics is supported_**

```ts twoslash
import { biometricsPlugin } from "@plaoc/plugins";
await biometricsPlugin.check();
//                     ^?
```

- `biometrics`

  **_biometrics_**

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
