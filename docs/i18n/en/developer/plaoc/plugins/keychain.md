---
outline: deep
---

# keychain

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip Introduction:
Keychain Plugin
:::

- [Keychain](#keychain)
  - [Reference](#reference)
    - [Method](#method)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `keys`

  **_Read all key-value pairs in the keychain_**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";
const res = await keychainPlugin.keys();
//                               ^?
```

- `get`

  **_Returns the value bound to the given key in the keychain_**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.get("test");
//                   ^?
```

- `set`

  **_Binds the specified key and value in the keychain_**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.set("test", "xxx");
//                   ^?
```

- `delete`

  **_Deletes the value bound to the specified key in the keychain_**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.delete("test");
//                   ^?
```

- `has`

  **_Determines if there is a value bound to the specified key in the keychain_**

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
