---
outline: deep
---

# biometrics

<Badges name="@plaoc/plugins" />

::: tip intro:
biometrics plugin
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

  **_biometrics_**

```ts twoslash
import { biometricsPlugin } from "@plaoc/plugins";

await biometricsPlugin.biometrics();
//                     ^?
```

#### Parameter

- `BioetricsCheckResult?`

  **_Results returned by biometric detection_**

::: tip
The minimum version of dwebBrowser in the iOS environment is 17 or above, so they all support face recognition.
:::

```ts twoslash
export enum BioetricsCheckResult {
  /** The user cannot authenticate because no biometric or device credentials are registered. */
  BIOMETRIC_ERROR_NONE_ENROLLED = 11,
  /** The user can successfully authenticate. */
  BIOMETRIC_SUCCESS = 0,
  /** Unable to determine if user can authenticate. */
  BIOMETRIC_STATUS_UNKNOWN = -1,
  /** The user cannot authenticate because the specified option is incompatible with the current Android version. */
  BIOMETRIC_ERROR_UNSUPPORTED = -2,
  /** User cannot authenticate due to hardware unavailability. Try again later. */
  BIOMETRIC_ERROR_HW_UNAVAILABLE = 1,
  /** The user cannot authenticate because there is no suitable hardware (e.g. no biometric sensor or no keyguard). */
  BIOMETRIC_ERROR_NO_HARDWARE = 12,
  /** The user cannot authenticate because a security vulnerability was found in one or more hardware sensors. The affected sensors will be unavailable until a security update resolves the issue. */
  BIOMETRIC_ERROR_SECURITY_UPDATE_REQUIRED = 15,
}
```

- `BaseResult?`

  **_Biometric results_**

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

onMounted(() => {
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
