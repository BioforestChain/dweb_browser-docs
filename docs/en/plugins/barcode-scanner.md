---
outline: deep
---

# bacode-scanner

<Badges name="@plaoc/plugins" />

::: tip intro:
Scan code plugin
:::

- [bacode-scanner](#bacode-scanner)
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

  **_scan code_**

```ts twoslash
import { SupportedFormat, barcodeScannerPlugin } from "@plaoc/plugins";
const controller = await barcodeScannerPlugin.createProcesser(
  SupportedFormat.QR_CODE
);
// To parse the code
controller.process(new Uint8Array());
// stop parsing
controller.stop();
```

- `process`

  **_To parse the code, you need to convert the image into blob data and then pass it to the function for identification._**

```ts twoslash
import { SupportedFormat, barcodeScannerPlugin } from "@plaoc/plugins";

await barcodeScannerPlugin.process(new Uint8Array());
//                         ^?
```

- `stop`

  **_How to stop parsing barcode data_**

```ts twoslash
import { barcodeScannerPlugin } from "@plaoc/plugins";
await barcodeScannerPlugin.stop();
```

#### Parameter

- `SupportedFormat`

  **_Supported code types_**

```ts twoslash
import { SupportedFormat } from "@plaoc/plugins";
SupportedFormat.QR_CODE;
```

### Usage Plugin

```vue twoslash
<script setup lang="ts">
import { onMounted } from "vue";
import { barcodeScannerPlugin, ScannerProcesser } from "@plaoc/plugins";

let controller: ScannerProcesser;
onMounted(async () => {
  // get controller
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

**_start scan_**

#### Parameter

- `ScanOptions?`

  **_Scan code delivery options_**

```ts twoslash
import type { ScanOptions } from "@plaoc/plugins";
import { CameraDirection, SupportedFormat } from "@plaoc/plugins";
const options: ScanOptions = {
  rotation: 0,
  direction: CameraDirection.FRONT,
  //                         ^|
  width: 0,
  height: 0,
  formats: SupportedFormat.QR_CODE,
  //                       ^|
};
```

### Usage WebComponent

```vue
<script setup>
import { onMounted, ref } from 'vue'
import { HTMLDwebBarcodeScanningElement } from "@plaoc/plugins";

const $barcodeScannerPlugin = ref<HTMLDwebBarcodeScanningElement>();
let barcodeScanner: HTMLDwebBarcodeScanningElement;

onMounted(async () => {
  barcodeScanner = $barcodeScannerPlugin.value!
});

const startScanning = async () => {
  return await barcodeScanner.startScanning()
}

const stop = async () => {
  return await barcodeScanner.stop()
}
</script>
<template>
  <dweb-barcode-scanning ref="$barcodeScannerPlugin"></dweb-barcode-scanning>
</template>
```
