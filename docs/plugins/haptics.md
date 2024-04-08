---
outline: deep
---

# haptics

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip 介绍：
振动插件  
:::

- [Reference](#reference)
  - [Method](#method)
    - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `impactLight`

  **_触碰轻质量物体_**

```ts twoslash
import { hapticsPlugin, ImpactStyle } from "@plaoc/plugins";
await hapticsPlugin.impactLight({ style: ImpactStyle.Heavy });
//                  ^?
```

- `notification`

  **_振动通知_**

```ts twoslash
import { hapticsPlugin, NotificationType } from "@plaoc/plugins";

await hapticsPlugin.notification({ type: NotificationType.Success });
//                  ^?
```

- `vibrateClick`

  **_单击手势的反馈振动_**

```ts twoslash
import { hapticsPlugin } from "@plaoc/plugins";
await hapticsPlugin.vibrateClick();
//                  ^?
```

- `vibrateDisabled`

  **_禁用手势的反馈振动_**

```ts twoslash
import { hapticsPlugin } from "@plaoc/plugins";
await hapticsPlugin.vibrateDisabled();
//                  ^?
```

- `vibrateDoubleClick`

  **_双击手势的反馈振动_**

```ts twoslash
import { hapticsPlugin } from "@plaoc/plugins";
await hapticsPlugin.vibrateDoubleClick();
//                  ^?
```

- `vibrateHeavyClick`

  **_重击手势的反馈振动, 比如菜单键/惨案/3Dtouch_**

```ts twoslash
import { hapticsPlugin } from "@plaoc/plugins";
await hapticsPlugin.vibrateHeavyClick();
//                  ^?
```

- `vibrateTick`

  **_滴答_**

```ts twoslash
import { hapticsPlugin } from "@plaoc/plugins";
await hapticsPlugin.vibrateTick();
//                  ^?
```

- `vibrate`

  **_自定义效果_**

```ts twoslash
import { hapticsPlugin, VibrateOptions } from "@plaoc/plugins";
await hapticsPlugin.vibrate({ duration: [100, 200, 300] });
//                  ^?
```

#### Parameter

- `ImpactStyle`

  **_触碰反馈强度_**

```ts twoslash
import { ImpactStyle } from "@plaoc/plugins";
ImpactStyle.Heavy;
//          ^|
```

- `NotificationType`

  **_通知类型_**

```ts twoslash
import { NotificationType } from "@plaoc/plugins";
NotificationType.Success;
//               ^|
```

- `VibrateOptions`

  **_振动频率_**

```ts twoslash
import { VibrateOptions } from "@plaoc/plugins";

const options: VibrateOptions = { duration: [100, 1, 200] };
//                                ^?
```

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { hapticsPlugin } from "@plaoc/plugins";

async function customVibrate() {
  await hapticsPlugin.vibrate({ duration: [10, 2, 100, 3, 10] });
}
</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
// @noErrors
import { HTMLDwebHapticsElement } from "@plaoc/plugins";

const $hapticsPlugin = ref<HTMLDwebHapticsElement>();
let haptics: HTMLDwebHapticsElement;

onMounted(async () => {
  haptics = $hapticsPlugin.value!;
});
async function customVibrate() {
  haptics.vibrate({ duration: [10, 2, 100, 3, 10] });
}
</script>
<template>
  <dweb-haptics ref="$hapticsPlugin"></dweb-haptics>
</template>
```
