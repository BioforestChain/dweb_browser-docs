---
outline: deep
---

# config

<Badges name="@plaoc/plugins" />

::: tip 介绍：
配置插件，可用于设置`Plaoc App`的当前语言。
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `setLang`
  
  **_设置语言_**

```ts twoslash
import { configPlugin } from "@plaoc/plugins";
await configPlugin.setLang("en", true);
//                 ^?
```

- `getLang`

  **_获取语言_**

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
