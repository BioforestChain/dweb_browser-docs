---
outline: deep
---

# motion-sensors

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip 介绍：
运动传感器插件  
:::

- [Reference](#reference)
  - [Method](#method)
    - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

#### Method

- `startAccelerometer`

  **_启动加速计传感器_**

```ts twoslash
import { motionSensorsPlugin } from "@plaoc/plugins";
await motionSensorsPlugin.startAccelerometer(3);
//                        ^?
```

- `startGyroscope`

  **_启动陀螺仪传感器_**

```ts twoslash
import { motionSensorsPlugin } from "@plaoc/plugins";

await motionSensorsPlugin.startGyroscope(2);
//                        ^?
```

#### Parameter

- `fps`

  **_每秒帧率_**

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
