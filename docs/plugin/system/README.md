# 系统API

## `QrcodeScanner`

二维码扫码。

### example

<CodeGroup>
  <CodeGroupItem title="typescript" active>

```typescript
<script setup lang="ts">
  let scannerData = ref("DwebView-js ♻️ Deno-js");
  async function openScanner() {
  const scanner = document.querySelector<OpenScanner>('dweb-scanner')!;
  const iter = await scanner.openScanner()
  console.log("scannerData.value = await scanner.openScanner() -->",JSON.stringify(iter))
  scannerData.value = iter
  }
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="vue3" >

```html
 <dweb-scanner ></dweb-scanner>
```

  </CodeGroupItem>
</CodeGroup>

## `BarcodeScanner`

条形码扫码。

:::warning
现在这里的效果是不断扫二维码,还需要修改。
:::

### example

<CodeGroup>
  <CodeGroupItem title="typescript" active>

```typescript
<script setup lang="ts">
  let scannerData = ref("DwebView-js ♻️ Deno-js");
 async function openBarScanner() {
   const scanner = document.querySelector<OpenScanner>('dweb-scanner')!;
  const iter = await scanner.openBarCodeScanner()
  console.log("scannerData.value = await scanner.openBarCodeScanner() -->",JSON.stringify(iter))
  scannerData.value = iter
}
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="vue3" >

```html
 <dweb-scanner ></dweb-scanner>
```

  </CodeGroupItem>
</CodeGroup>


## `DCIMPicker`

## `DCIMSaver`

## `*DCIMViewer`

## `PermissionManager`

## `DeepLink`

## `DevicesInfo`

## `Notification`
