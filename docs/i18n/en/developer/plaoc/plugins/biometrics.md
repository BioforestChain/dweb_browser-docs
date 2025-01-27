---
outline: deep
---

# biometrics

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip Introduction:
Biometrics Plugin
:::

- [biometrics](#biometrics)
  - [Reference](#reference)
    - [Method](#method)
      - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `check`

  **_Check if biometrics is supported_**

```ts twoslash
import { biometricsPlugin } from "@plaoc/plugins";
const result = await biometricsPlugin.check();
//                                     ^?
```

- `biometrics`

  **_Biometrics_**

```ts twoslash
import { biometricsPlugin } from "@plaoc/plugins";

await biometricsPlugin.biometrics();
//                     ^?
```

#### Parameter

- `BioetricsCheckResult?`

  **_Result of biometrics check_**

::: tip
dwebBrowser on iOS requires version 17 or above, thus all support face recognition.
:::

```ts twoslash
export enum BioetricsCheckResult {
  /**User cannot authenticate because no biometrics or device credentials are enrolled. */
  BIOMETRIC_ERROR_NONE_ENROLLED = 11,
  /**User can successfully authenticate. */
  BIOMETRIC_SUCCESS = 0,
  /**Cannot determine if the user can authenticate. */
  BIOMETRIC_STATUS_UNKNOWN = -1,
  /**User cannot authenticate because the specified options are incompatible with the current Android version. */
  BIOMETRIC_ERROR_UNSUPPORTED = -2,
  /**User cannot authenticate due to hardware unavailability. Try again later. */
  BIOMETRIC_ERROR_HW_UNAVAILABLE = 1,
  /**User cannot authenticate because there is no suitable hardware (e.g., no biometric sensor or no keyguard). */
  BIOMETRIC_ERROR_NO_HARDWARE = 12,
  /**User cannot authenticate because one or more hardware sensors have security vulnerabilities. Affected sensors will be unavailable until a security update resolves the issue. */
  BIOMETRIC_ERROR_SECURITY_UPDATE_REQUIRED = 15,
}
```

- `BaseResult?`

  **_Result of biometrics_**

```ts twoslash
export interface BaseResult {
  success: boolean;
  message: string;
}
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { biometricsPlugin } from "@plaoc/plugins";

async function check() {
  return await biometricsPlugin.check();
}

async function biometrics() {
  return await biometricsPlugin.biometrics();
}
</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { onMounted, ref } from "vue";
// @noErrors
import { HTMLDwebBiometricsElement } from "@plaoc/plugins";

const $biometricsPlugin = ref<HTMLDwebBiometricsElement>();
let biometricsPlugin: HTMLDwebBiometricsElement;

onMounted(async () => {
  biometricsPlugin = $biometricsPlugin.value!;
});

async function check() {
  return await biometricsPlugin.check();
}

async function biometrics() {
  return await biometricsPlugin.biometrics();
}
</script>
<template>
  <dweb-biometrics ref="$biometricsPlugin"></dweb-biometrics>
</template>
```
