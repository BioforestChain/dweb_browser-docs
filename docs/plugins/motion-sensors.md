---
outline: deep
---

# motion-sensors

<Badges name="@plaoc/plugins" />

::: tip 介绍：
运动传感器插件  
:::

- [Reference](#reference)
  - [Method](#method)
  - [Parameter](#parameter)
- [Usage](#usage)

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
    console.log("加速计: ", e.detail);
  });
}

function startGyroscope() {
  motionSensors.startGyroscope(1);
  motionSensors.addEventListener("readGyroscope", (event: Event) => {
    const e = event as CustomEvent<$Axis>;
    console.log("陀螺仪: ", e.detail);
  });
}
</script>
<template>
  <dweb-motion-sensors ref="$motionSensorsPlugin"></dweb-motion-sensors>
</template>
```
