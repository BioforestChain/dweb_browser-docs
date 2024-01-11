# Plaoc

plaoc is a "cross-platform web application" development toolkit based on the dweb-browser platform that benchmarks Cordova, Capacitor, and Tauri. It is a front-end plug-in that provides cross-platform access to system functions.

## Getting Started

Install the project:

```bash
npm install @plaoc/plugins
```

### How to Use as a Plugin

```typescript
import { barcodeScannerPlugin } from "@plaoc/plugins";
// Call barcode scanning
const startScanning = async () => {
  await barcodeScannerPlugin.startScanning();
};
```

### How to Use as a webComponent

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

All API calls follow a concise and convenient principle, and all permission requests have been hidden from developers. Developers no longer need to worry about permissions when making calls.
