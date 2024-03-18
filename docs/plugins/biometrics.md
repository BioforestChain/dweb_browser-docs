---
outline: deep
---

# biometrics

<Badges name="@plaoc/plugins" />

::: tip 介绍：
生物识别插件  
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

  **_检查是否支持生物识别_**

```ts twoslash
import { biometricsPlugin } from "@plaoc/plugins";
const result = await biometricsPlugin.check();
//                                     ^?
```

- `biometrics`

  **_生物识别_**

```ts twoslash
import { biometricsPlugin } from "@plaoc/plugins";

await biometricsPlugin.biometrics();
//                     ^?
```

#### Parameter

- `BioetricsCheckResult?`

  **_检测生物识别返回的结果_**

::: tip
iOS 环境的 dwebBrowser 最低版本为 17 以上，因此都是支持人脸识别的。
:::

```ts twoslash
export enum BioetricsCheckResult {
  /**用户无法进行身份验证，因为没有注册生物识别或设备凭据。 */
  BIOMETRIC_ERROR_NONE_ENROLLED = 11,
  /**用户可以成功进行身份验证。 */
  BIOMETRIC_SUCCESS = 0,
  /**无法确定用户是否可以进行身份验证。 */
  BIOMETRIC_STATUS_UNKNOWN = -1,
  /**用户无法进行身份验证，因为指定的选项与当前的 Android 版本不兼容。 */
  BIOMETRIC_ERROR_UNSUPPORTED = -2,
  /**由于硬件不可用，用户无法进行身份验证。 稍后再试。 */
  BIOMETRIC_ERROR_HW_UNAVAILABLE = 1,
  /**用户无法进行身份验证，因为没有合适的硬件（例如没有生物识别传感器或没有键盘保护装置）。 */
  BIOMETRIC_ERROR_NO_HARDWARE = 12,
  /**用户无法进行身份验证，因为发现一个或多个硬件传感器存在安全漏洞。 在安全更新解决该问题之前，受影响的传感器将不可用。 */
  BIOMETRIC_ERROR_SECURITY_UPDATE_REQUIRED = 15,
}
```

- `BaseResult?`

  **_生物识别的结果_**

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

```vue
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { HTMLDwebBiometricsElement } from "@plaoc/plugins";

const $biometricsPlugin = ref<HTMLDwebBiometricsElement>();
let biometrics: HTMLDwebBiometricsElement;

onMounted(async () => {
  biometrics = $biometricsPlugin.value!;
});

async function check() {
  return await biometrics.check();
}

async function biometrics() {
  return await biometrics.biometrics();
}
</script>
<template>
  <dweb-biometrics ref="$biometricsPlugin"></dweb-biometrics>
</template>
```
