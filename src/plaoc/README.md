# DwebBrowser 前端开发文档

## 快速上手

安装项目：

```bash
npm install @plaoc/plugins
```

### 如何以插件形式使用 

```typescript
import { barcodeScannerPlugin } from "@plaoc/plugins";
// 调用扫码
const taskPshoto = async () => {
  await barcodeScannerPlugin.startScanning();
};
```

### 如何以 webComponent 形式使用

```html
<body>
  <dweb-barcode-scanning></dweb-barcode-scanning>
  <button @click="taskPhoto()">scanner</button>
<script type="module">
import "@plaoc/plugins"
const barcodeScanner = document.querySelector("dweb-barcode-scanning")!
// Call barcode scanning
async function taskPhoto() {
  await barcodeScanner.startScanning();
}
Object.assign(globalThis,{ taskPhoto })
</script>
</body>
```

所有的API调用都遵循简洁，方便的原则，并且所有的权限申请，已经对开发者进行隐藏。
开发者不再需要在调用的时候，对权限另外耗费心力。