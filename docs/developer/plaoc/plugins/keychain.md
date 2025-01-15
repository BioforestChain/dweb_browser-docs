---
outline: deep
---

# keychain

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip 介绍：
钥匙串插件  
:::

- [keychain](#keychain)
  - [Reference](#reference)
    - [Method](#method)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `keys`

  **_读取钥匙串中所有键值_**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";
const res = await keychainPlugin.keys();
//                               ^?
```

- `get`

  **_返回给定键值在钥匙串中绑定的值_**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.get("test");
//                   ^?
```

- `set`

  **_将指定的键值与值绑定到钥匙串中_**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.set("test", "xxx");
//                   ^?
```

- `delete`

  **_删除钥匙串中与指定键值绑定的值_**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.delete("test");
//                   ^?
```

- `has`

  **_判断钥匙串中是否有与指定键值绑定的值_**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.has("test");
//                   ^?
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { keychainPlugin } from "@plaoc/plugins";

async function keys() {
  await keychainPlugin.keys();
}
async function get() {
  await keychainPlugin.get("test");
}
async function set() {
  await keychainPlugin.set("test", "xxx");
}
async function deleteKey() {
  await keychainPlugin.delete("test");
}
async function has() {
  await keychainPlugin.has("test");
}
</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { onMounted, ref } from "vue";
// @noErrors
import { HTMLDwebKeychainElement } from "@plaoc/plugins";

const $keychainPlugin = ref<HTMLDwebKeychainElement>();
let keychain: HTMLDwebKeychainElement;
onMounted(async () => {
  keychain = $keychainPlugin.value!;
});

async function keys() {
  await keychain.keys();
}
async function get() {
  await keychain.get("test");
}
async function set() {
  await keychain.set("test", "xxx");
}
async function deleteKey() {
  await keychain.delete("test");
}
async function has() {
  await keychain.has("test");
}
</script>
<template>
  <dweb-keychain ref="$keychainPlugin"></dweb-keychain>
</template>
```
