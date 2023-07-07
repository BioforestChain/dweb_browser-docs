# DwebBrowser Plaoc Development Doc

## Getting Started

Install the project:

```bash
npm install @plaoc/plugins
```

### How to Use as a Plugin

```typescript
import { barcodeScannerPlugin } from "@plaoc/plugins";
// Call barcode scanning
const taskPhoto = async () => {
  await barcodeScannerPlugin.startScanning();
};
```

### How to Use as a webComponent

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

All API calls follow a concise and convenient principle, and all permission requests have been hidden from developers. Developers no longer need to worry about permissions when making calls.
