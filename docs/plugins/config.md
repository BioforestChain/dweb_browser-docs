---
outline: deep
---

# config <Badge type="warning">不稳定</Badge>

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip 介绍：
配置插件，可用于设置`Plaoc App`的当前语言,或者用于切换入口。

该插件与`plaoc.json`里的 `defaultConfig.lang`配合，用来切换整个基本的文件路由。
:::

- [config](#config)
  - [Reference](#reference)
    - [Method](#method)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

#### Method

- `setLang`

  **_切换当前语言(入口)_**

假设您当前有两个语言入口，当在`plaoc.json`配置完成之后就可以进行切换入口。

```ts twoslash
import { configPlugin } from "@plaoc/plugins";
await configPlugin.setLang("en", true);
//                 ^?

// my-app
// ├── en
// └── zh
```

- `getLang`

  **_获取当前的语言(入口)_**

```ts twoslash
import { configPlugin } from "@plaoc/plugins";

await configPlugin.getLang();
//                 ^?
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { configPlugin } from "@plaoc/plugins";

async function setLang() {
  await configPlugin.setLang("en", true);
}
async function getLang() {
  const res = await configPlugin.getLang();
}
</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { onMounted, ref } from "vue";
// @noErrors
import { HTMLDwebConfigElement } from "@plaoc/plugins";

const $configPlugin = ref<HTMLDwebConfigElement>();
let config: HTMLDwebConfigElement;

onMounted(async () => {
  config = $configPlugin.value!;
});

async function setLang() {
  await config.setLang("en", true);
}
async function getLang() {
  const res = await config.getLang();
}
</script>
<template>
  <dweb-config ref="$configPlugin"></dweb-config>
</template>
```
