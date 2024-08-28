---
outline: deep
---

# Keychain

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip Introduction:
Keychain plugin  
:::

- [Keychain](#keychain)
  - [Reference](#reference)
    - [Method](#method)
  - [Plugin Usage](#plugin-usage)
  - [WebComponent Usage](#webcomponent-usage)

## Reference

### Method

- `keys`

  **Retrieve all key-value pairs in the keychain**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";
const res = await keychainPlugin.keys();
//                               ^?
```

- `get`

  **Return the value associated with a given key in the keychain**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.get("test");
//                   ^?
```

- `set`

  **Bind a specified key-value pair to the keychain**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.set("test", "xxx");
//                   ^?
```

- `delete`

  **Remove the value associated with a given key from the keychain**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.delete("test");
//                   ^?
```

- `has`

  **Check if there is a value associated with a specified key in the keychain**

```ts twoslash
import { keychainPlugin } from "@plaoc/plugins";

await keychainPlugin.has("test");
//                   ^?
```

## Plugin Usage

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

## WebComponent Usage

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
