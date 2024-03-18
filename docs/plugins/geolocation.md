---
outline: deep
---

# geolocation

<Badges name="@plaoc/plugins" />

::: tip 介绍：
地理位置插件
:::

- [geolocation](#geolocation)
  - [Reference](#reference)
    - [Method](#method)
      - [Parameter](#parameter)
  - [Usage Plugins](#usage-plugins)
  - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `getLocation`

  **_获取当前位置_**

```ts twoslash
import { geolocationPlugin } from "@plaoc/plugins";
await geolocationPlugin.getLocation();
//                       ^?
```

- `createLocation`

  **_创建获取当前位置的监听控制器_**

```ts twoslash
import type { $LocationOptions, $GeolocationContoller } from "@plaoc/plugins";
import { geolocationPlugin } from "@plaoc/plugins";
const options: $LocationOptions = {};
const controller: $GeolocationContoller =
  await geolocationPlugin.createLocation(options);
contoller.listen((res) => {
  const coords = res.coords;
  console.log(
    `经度：${coords.longitude} 纬度：${coords.latitude} 海拔：${coords.altitude}`
  );
});
```

#### Parameter

- `$LocationOptions`

  **_位置获取得到的结果_**

```ts twoslash
export interface $GeolocationPosition {
  /**当前状态 */
  state: $GeolocationPositionState;
  /**地理位置坐标包含经纬度 */
  coords: GeolocationCoordinates;
  /**时间戳 */
  timestamp: number;
}
export interface $GeolocationPositionState {
  code: $GeolocationCode;
  message: string | null;
}
export enum $GeolocationCode {
  success = 0,
  permission_denied = 1,
  position_unavailable = 2,
  timeout = 3,
}
```

- [GeolocationCoordinates](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates)

## Usage Plugins

```vue twoslash
<script setup lang="ts">
import { geolocationPlugin } from "@plaoc/plugins";

async function getLocation() {
  const res = await geolocationPlugin.getLocation();
}
</script>
```

## Usage WebComponent

```vue
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { HTMLGeolocationElement } from "@plaoc/plugins";

const $geolocationPlugin = ref<HTMLGeolocationElement>();
let geolocation: HTMLGeolocationElement;

onMounted(async () => {
  geolocation = $geolocationPlugin.value!;
});

async function getLocation() {
  const res = await geolocation.getLocation();
}
</script>
<template>
  <dweb-geolocation ref="$geolocationPlugin"></dweb-geolocation>
</template>
```
