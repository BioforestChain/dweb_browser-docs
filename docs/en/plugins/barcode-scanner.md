---
outline: deep
---

# bacode-scanner

::: tip intro:
Scan code plugin
:::

- [Reference](#reference)
  - [Method](#method)
  - [Parameter](#parameter)
- [Usage](#usage)

## Reference

#### Method

- `createProcesser`
  
  **_scan code_**

```ts twoslash
import { SupportedFormat, barcodeScannerPlugin } from "@plaoc/plugins";
const controller = await barcodeScannerPlugin.createProcesser(SupportedFormat.QR_CODE);
//                                            ^?
controller.process(new Uint8Array());
//         ^|
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
import { SupportedFormat, barcodeScannerPlugin } from "@plaoc/plugins";
await barcodeScannerPlugin.stop();
//                         ^?
```

#### Parameter
- `SupportedFormat`

  **_Supported code types_**

```ts twoslash
import { SupportedFormat } from "@plaoc/plugins";
SupportedFormat.QR_CODE
//              ^|
```

## Usage

```vue {5,9}
<script setup lang="ts">
import { barcodeScannerPlugin } from "@plaoc/plugins";

async function onFileChanged($event: Event) {
  const scannerServer = await barcodeScannerPlugin.createProcesser();
  const target = $event.target as HTMLInputElement;
  if (target && target.files?.[0]) {
    const img = target.files[0];
    const res = await scannerServer.process(img);
  }
}
</script>
<template>
  <dweb-barcode-scanning></dweb-barcode-scanning>
  <input type="file" @change="onFileChanged($event)" accept="image/*" capture />
</template>
```
