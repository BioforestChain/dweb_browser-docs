# Plaoc

plaoc 是基于 dweb-browser 平台的一个对标 Cordova、Capacitor、Tauri 的“跨平台 Web 应用”开发工具包，它是提供跨平台的访问系统功能的前端插件。

## 快速上手

安装项目：

```bash
npm install @plaoc/plugins
```

### 以 插件的形式 使用

```typescript
import { barcodeScannerPlugin } from "@plaoc/plugins";
// 调用扫码
const startScanning = async () => {
  await barcodeScannerPlugin.startScanning();
};
```

### 以 webComponent 形式使用

```html
<body>
  <dweb-barcode-scanning></dweb-barcode-scanning>
  <button @click="startScanning()">scanner</button>
  <script type="module">
    import "@plaoc/plugins"
    const barcodeScanner = document.querySelector("dweb-barcode-scanning")!
    // Call barcode scanning
    async function startScanning() {
      await barcodeScanner.startScanning();
    }
    Object.assign(globalThis,{ startScanning })
  </script>
</body>
```

所有的 API 调用都遵循简洁，方便的原则，并且所有的权限申请，已经对开发者进行隐藏。
开发者不再需要在调用的时候，对权限另外耗费心力。

::: tip
如果有更多的插件需要支持，请到 github 上提出 issuse 进行讨论。
:::
