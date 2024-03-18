---
outline: deep
---

# motion-sensors

<Badges name="@plaoc/plugins" />

::: tip intro:
Motion sensors plugin
:::

- [Reference](#reference)
  - [Method](#method)
    - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `startAccelerometer`

  **_Start accelerometer sensor_**

```ts twoslash
import { motionSensorsPlugin } from "@plaoc/plugins";
await motionSensorsPlugin.startAccelerometer(3);
//                        ^?
```

- `startGyroscope`

  **_Start the gyro sensor_**

```ts twoslash
import { motionSensorsPlugin } from "@plaoc/plugins";

await motionSensorsPlugin.startGyroscope(2);
//                        ^?
```

#### Parameter

- `fps`

  **_frames per second_**

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { motionSensorsPlugin, $Axis } from "@plaoc/plugins";

async function startAccelerometer() {
  const controller = await motionSensorsPlugin.startAccelerometer(1);
  controller.listen((axis) => {
    console.log(`x: ${axis.x} y: ${axis.y} z: ${axis.y}`);
  });

  setTimeout(() => controller.stop(), 3000);
}
</script>
```

## Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
// @noErrors
import { HTMLDwebMotionSensorsElement, $Axis } from "@plaoc/plugins";

const $motionSensorsPlugin = ref<HTMLDwebMotionSensorsElement>();
let motionSensors: HTMLDwebMotionSensorsElement;

onMounted(async () => {
  motionSensors = $motionSensorsPlugin.value!;
});
function startAccelerometer() {
  motionSensors.startAccelerometer(1);
  motionSensors.addEventListener("readAccelerometer", (event: Event) => {
    const e = event as CustomEvent<$Axis>;
    console.log("Accelerometer: ", e.detail);
  });
}

function startGyroscope() {
  motionSensors.startGyroscope(1);
  motionSensors.addEventListener("readGyroscope", (event: Event) => {
    const e = event as CustomEvent<$Axis>;
    console.log("Gyroscope: ", e.detail);
  });
}
</script>
<template>
  <dweb-motion-sensors ref="$motionSensorsPlugin"></dweb-motion-sensors>
</template>
```
