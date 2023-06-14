# DwebBrowser Plaoc Development Doc

## Getting Started

Install the project:

```bash
npm install @dweb-browser/plaoc
```

### How to Use as a Plugin

```typescript
import { barcodeScannerPlugin } from "@dweb-browser/plaoc";

// Call barcode scanning
const taskPhoto = async () => {
  await barcodeScannerPlugin.startScanning();
};
```

### How to Use as a webComponent

```HTML
<body>
  <dweb-barcode-scanning ref="$barcodeScannerPlugin"></dweb-barcode-scanning>
  <button @click="taskPhoto">scanner</button>
<script type="module">
import { HTMLDwebBarcodeScanningElement } from "@dweb-browser/plaoc";

const $barcodeScannerPlugin = null;
let barcodeScanner: HTMLDwebBarcodeScanningElement;
onMounted(() => {
  // Here we have access to the webComponent object
  barcodeScanner = $barcodeScannerPlugin.value!;
});

// Call barcode scanning
const taskPhoto = async () => {
  await barcodeScanner.startScanning();
};
</script>
</body>
```

All API calls follow a concise and convenient principle, and all permission requests have been hidden from developers. Developers no longer need to worry about permissions when making calls.
