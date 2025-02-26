---
outline: deep
---

# bacode-scanner

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android" />

::: tip Introduction:
Barcode Scanner Plugin
:::

- [Barcode Scanner](#barcode-scanner)
  - [Reference](#reference)
    - [Method](#method)
      - [Parameter](#parameter)
    - [Usage Plugin](#usage-plugin)
    ***
    - [Method](#method-1)
      - [Parameter](#parameter-1)
    - [Usage WebComponent](#usage-webcomponent)

## Reference

### Method

- `createProcesser`

  **_Create Control Handle_**

```typescript twoslash
import { barcodeScannerPlugin } from "@plaoc/plugins";
const controller = await barcodeScannerPlugin.createProcesser();
// To decode, convert the image to blob data and pass it to the function for recognition. Supports Uint8Array, Blob
controller.process(new Uint8Array());
// Method to stop decoding barcode data
controller.stop();
```

- `process`

  **_Decode, requires converting the image to blob data and passing it to the function for recognition._**

```ts twoslash
import { barcodeScannerPlugin } from "@plaoc/plugins";

await barcodeScannerPlugin.process(new Uint8Array());
//                         ^?
```

- `stop`

  **_Method to stop decoding barcode data_**

```ts twoslash
import { barcodeScannerPlugin } from "@plaoc/plugins";
await barcodeScannerPlugin.stop();
//                         ^?
```

#### Parameter

- `SupportedFormat`

  **_Supported barcode types_**

```ts twoslash
import { SupportedFormat } from "@plaoc/plugins";
SupportedFormat.QR_CODE;
```

## Usage Plugin

```vue twoslash
<script setup lang="ts">
import { onMounted } from "vue";
import { barcodeScannerPlugin, ScannerProcesser } from "@plaoc/plugins";

let controller: ScannerProcesser;
onMounted(async () => {
  // Get controller
  controller = await barcodeScannerPlugin.createProcesser();
});
async function onFileChanged($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files?.[0]) {
    const img = target.files[0];
    const res = await controller.process(img);
  }
}
</script>
<template>
  <input type="file" @change="onFileChanged($event)" accept="image/*" capture />
</template>
```

---

### Method

- `startScanning`

**_Start Scanning_**

#### Parameter

- `ScanOptions?`

  **_Scanning options_**

```ts twoslash
import type { ScanOptions } from "@plaoc/plugins";
import { CameraDirection, SupportedFormat } from "@plaoc/plugins";
const options: ScanOptions = {
  rotation: 0,
  direction: CameraDirection.FRONT,
  width: 0,
  height: 0,
  formats: SupportedFormat.QR_CODE,
};
```

### Usage WebComponent

```vue twoslash
<script setup lang="ts">
import { onMounted, ref } from "vue";
// @noErrors
import { HTMLDwebBarcodeScanningElement } from "@plaoc/plugins";

const $barcodeScannerPlugin = ref<HTMLDwebBarcodeScanningElement>();
let barcodeScanner: HTMLDwebBarcodeScanningElement;

onMounted(async () => {
  barcodeScanner = $barcodeScannerPlugin.value!;
});

const startScanning = async () => {
  return await barcodeScanner.startScanning();
};

const stop = async () => {
  return await barcodeScanner.stop();
};
</script>
<template>
  <dweb-barcode-scanning ref="$barcodeScannerPlugin"></dweb-barcode-scanning>
</template>
```
