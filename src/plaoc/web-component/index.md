# Plaoc WebComponent

一个提供跨平台的访问系统功能的 WebComponent 形式的前端插件；

## 安装
```bash
npm install @plaoc/plugins
```

## 示例

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

## 相关链接
[Plaoc Plugin](../plugin/index.md)