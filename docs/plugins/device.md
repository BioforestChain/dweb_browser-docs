# device

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip 介绍：
设备信息插件
:::

- [device](#device)
  - [Method](#method)
    - [`getUUID`](#getuuid)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Method

### `getUUID`

**_获取设备唯一标识 UUID_**

删除应用不会改变。

```ts twoslash
import { devicePlugin } from "@plaoc/plugins";
await devicePlugin.getUUID();
//                 ^?
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { devicePlugin } from "@plaoc/plugins";

async function getUUID() {
  const { uuid } = await devicePlugin.getUUID();
}
</script>
```

## Usage WebComponent

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
