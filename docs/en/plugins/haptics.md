---
outline: deep
---

# haptics

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip intro:
Haptics plugin
:::

- [Reference](#reference)
  - [Method](#method)
    - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `impactLight`

  **_Touching lightweight objects_**

```ts twoslash
import { hapticsPlugin, ImpactStyle } from "@plaoc/plugins";
await hapticsPlugin.impactLight({ style: ImpactStyle.Heavy });
//                  ^?
```

- `notification`

  **_Vibration notification_**

```ts twoslash
import { hapticsPlugin, NotificationType } from "@plaoc/plugins";

await hapticsPlugin.notification({ type: NotificationType.Success });
//                  ^?
```

- `vibrateClick`

  **_Feedback vibration for click gestures_**

```ts twoslash
import { hapticsPlugin } from "@plaoc/plugins";
await hapticsPlugin.vibrateClick();
//                  ^?
```

- `vibrateDisabled`

  **_Disable feedback vibration for gestures_**

```ts twoslash
import { hapticsPlugin } from "@plaoc/plugins";
await hapticsPlugin.vibrateDisabled();
//                  ^?
```

- `vibrateDoubleClick`

  **_Feedback vibration for double tap gesture_**

```ts twoslash
import { hapticsPlugin } from "@plaoc/plugins";
await hapticsPlugin.vibrateDoubleClick();
//                  ^?
```

- `vibrateHeavyClick`

  **_Feedback vibration for heavy tap gestures, such as menu key/tragedy/3Dtouch_**

```ts twoslash
import { hapticsPlugin } from "@plaoc/plugins";
await hapticsPlugin.vibrateHeavyClick();
//                  ^?
```

- `vibrateTick`

  **_tick_**

```ts twoslash
import { hapticsPlugin } from "@plaoc/plugins";
await hapticsPlugin.vibrateTick();
//                  ^?
```

- `vibrate`

  **_Custom effects_**

```ts twoslash
import { hapticsPlugin, VibrateOptions } from "@plaoc/plugins";
await hapticsPlugin.vibrate({ duration: [100, 200, 300] });
//                  ^?
```

#### Parameter

- `ImpactStyle`

  **_Touch feedback intensity_**

```ts twoslash
import { ImpactStyle } from "@plaoc/plugins";
ImpactStyle.Heavy;
//          ^|
```

- `NotificationType`

  **_notification type_**

```ts twoslash
import { NotificationType } from "@plaoc/plugins";
NotificationType.Success;
//               ^|
```

- `VibrateOptions`

  **_Vibration frequency_**

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
