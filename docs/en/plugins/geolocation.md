---
outline: deep
---

# geolocation

<Badges name="@plaoc/plugins" />

::: tip intro:
Geolocation plugin
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

  **_Get current location_**

```ts twoslash
import { geolocationPlugin, $GeolocationPosition } from "@plaoc/plugins";
await geolocationPlugin.getLocation();
//                      ^?
```

- `createLocation`

  **_Watch location_**

```ts twoslash
import type { $LocationOptions, $GeolocationContoller } from "@plaoc/plugins";
import { geolocationPlugin } from "@plaoc/plugins";
const options: $LocationOptions = {};
const controller: $GeolocationContoller =
  await geolocationPlugin.createLocation(options);
contoller.listen((res) => {
  const coords = res.coords;
  console.log(
    `longitude：${coords.longitude} latitude：${coords.latitude} altitude：${coords.altitude}`
  );
});
```

#### Parameter

- `$LocationOptions`

  **_Results obtained by location acquisition_**

```ts twoslash
export interface $GeolocationPosition {
  /**Current status */
  state: $GeolocationPositionState;
  /**Geographical location coordinates include latitude and longitude */
  coords: GeolocationCoordinates;
  /**Time stamp */
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
