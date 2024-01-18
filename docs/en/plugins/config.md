---
outline: deep
---

# config

::: tip intro:
Configuration plugin that can be used to set the current language of `Plaoc App`.
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `setLang`
  
  **_set language_**

```ts twoslash
import { configPlugin } from "@plaoc/plugins";
await configPlugin.setLang("en", true);
//                 ^?
```

- `getLang`

  **_get language_**

```ts twoslash
import { configPlugin } from "@plaoc/plugins";

await configPlugin.getLang();
//                 ^?
```

## Usage

```vue {5,8}
<script setup lang="ts">
import { configPlugin } from "@plaoc/plugins";

async function setLang() {
  await configPlugin.setLang("en", true);
}
async function getLang() {
  const res = await configPlugin.getLang();
}
</script>
<template>
  <dweb-config></dweb-config>
</template>
```
