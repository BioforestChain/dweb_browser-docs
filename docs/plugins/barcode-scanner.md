---
outline: deep
---

# bacode-scanner

<Badges name="@plaoc/plugins" />

::: tip 介绍：
扫码插件  
:::

- [Reference](#reference)
  - [Method](#method)
  - [Parameter](#parameter)
- [Usage](#usage)

## Reference

#### Method

- `createProcesser`
  
  **_识码_**

```ts twoslash
import { SupportedFormat, barcodeScannerPlugin } from "@plaoc/plugins";
const controller = await barcodeScannerPlugin.createProcesser(SupportedFormat.QR_CODE);
//                                            ^?
controller.process(new Uint8Array());
//         ^|
```

- `process`

  **_解析码，需要将图片转化为 blob 数据，再传递给函数进行识别。_**

```ts twoslash
import { SupportedFormat, barcodeScannerPlugin } from "@plaoc/plugins";

await barcodeScannerPlugin.process(new Uint8Array());
//                         ^?
```

- `stop`

  **_停止解析条码数据的方法_**

```ts twoslash
import { SupportedFormat, barcodeScannerPlugin } from "@plaoc/plugins";
await barcodeScannerPlugin.stop();
//                         ^?
```

#### Parameter
- `SupportedFormat`

  **_支持的码类型_**

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
