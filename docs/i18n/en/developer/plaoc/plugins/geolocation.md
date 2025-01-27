---
outline: deep
---

# geolocation

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip Introduction:
Geolocation Plugin
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
import { geolocationPlugin } from "@plaoc/plugins";
await geolocationPlugin.getLocation();
//                       ^?
```

- `createLocation`

  **_Create a listener controller for getting current location_**

```ts twoslash
import type { $LocationOptions, $GeolocationController } from "@plaoc/plugins";
import { geolocationPlugin } from "@plaoc/plugins";
const options: $LocationOptions = {};
const controller: $GeolocationController =
  await geolocationPlugin.createLocation(options);
controller.listen((res) => {
  const coords = res.coords;
  console.log(
    `Longitude: ${coords.longitude} Latitude: ${coords.latitude} Altitude: ${coords.altitude}`
  );
});
```

#### Parameter

- `$LocationOptions`

  **_Result of location acquisition_**

```ts twoslash
export interface $GeolocationPosition {
  /**Current state */
  state: $GeolocationPositionState;
  /**Geographical coordinates including longitude and latitude */
  coords: GeolocationCoordinates;
  /**Timestamp */
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

```vue twoslash
<script setup lang="ts">
import { onMounted, ref } from "vue";
// @noErrors
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
