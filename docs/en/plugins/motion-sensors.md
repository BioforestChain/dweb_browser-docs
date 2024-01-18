---
outline: deep
---

# motion-sensors

::: tip intro:
Motion sensors plugin 
:::

- [Reference](#reference)
  - [Method](#method)
  - [Parameter](#parameter)
- [Usage](#usage)

## Reference

#### Method

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

## Usage

```vue {5,8,9,10,16,17,18}
<script setup lang="ts">
import { ref } from "vue";
import type { HTMLDwebMotionSensorsElement, $Axis } from "@plaoc/plugins";

const $motionSensorsPlugin = ref<HTMLDwebMotionSensorsElement>();
const motionSensors = $motionSensorsPlugin.value!;
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
