# device

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip Introduction:
Device Information Plugin
:::

- [device](#device)
  - [Method](#method)
    - [`getUUID`](#getuuid)
  - [Plugin Usage](#plugin-usage)
  - [WebComponent Usage](#webcomponent-usage)

## Method

### `getUUID`

**_Obtain the unique device identifier UUID_**

The application deletion will not change it.

```ts twoslash
import { devicePlugin } from "@plaoc/plugins";
await devicePlugin.getUUID();
//                 ^?
```

## Plugin Usage

```vue twoslash
<script setup lang="ts">
import { devicePlugin } from "@plaoc/plugins";

async function getUUID() {
  const { uuid } = await devicePlugin.getUUID();
}
</script>
```

## WebComponent Usage

```vue twoslash
<script setup lang="ts">
import { onMounted, ref } from "vue";
// @noErrors
import { HTMLDeviceElement } from "@plaoc/plugins";

const $devicePlugin = ref<HTMLDeviceElement>();
let config: HTMLDeviceElement;

onMounted(async () => {
  config = $devicePlugin.value!;
});

async function getUUID() {
  const { uuid } = await config.getUUID();
}
</script>
<template>
  <dweb-device ref="$devicePlugin"></dweb-device>
</template>
```
