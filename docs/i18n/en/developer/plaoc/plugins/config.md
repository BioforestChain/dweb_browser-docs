---
outline: deep
---

# config <Badge type="warning">Unstable</Badge>

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip Introduction:
Configuration plugin, can be used to set the current language of `Dweb App`, or to switch entry points.

This plugin works with `defaultConfig.lang` in `plaoc.json` to switch the entire basic file routing.
:::

- [config Unstable](#config-unstable)
  - [Reference](#reference)
      - [Method](#method)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

#### Method

- `setLang`

  **_Switch current language (entry)_**

Assuming you have two language entries, you can switch the entry after configuring in `plaoc.json`.

```ts twoslash
import { configPlugin } from "@plaoc/plugins";
await configPlugin.setLang("en", true);
//                 ^?

// my-app
// ├── en
// └── zh
```

- `getLang`

  **_Get current language (entry)_**

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
