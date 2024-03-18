---
outline: deep
---

# config

<Badges name="@plaoc/plugins" /> <Badge type="warning">Unstable</Badge>

::: tip introduction:
Configuration plug-in can be used to set the current language of `Plaoc App`, or to switch the entrance.

This plug-in works with `defaultConfig.lang` in `plaoc.json` to switch the entire basic file routing.
:::

- [config](#config)
  - [Reference](#reference)
    - [Method](#method)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

#### Method

- `setLang`

  **_Switch current language (entry)_**

Assume that you currently have two language portals. You can switch portals after configuring `plaoc.json`.

```ts twoslash
import { configPlugin } from "@plaoc/plugins";
await configPlugin.setLang("en", true);
//                    ^?

// my-app
// ├── en
// └── en
```

- `getLang`

  **_Get the current language (entry)_**

```ts twoslash
import { configPlugin } from "@plaoc/plugins";

await configPlugin.getLang();
//                   ^?
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

```vue
<script setup lang="ts">
import { onMounted, ref } from "vue";
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
