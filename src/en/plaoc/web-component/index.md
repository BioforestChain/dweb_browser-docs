# Plaoc WebComponent 

A WebComponent frontend plugin that provides cross-platform access to system capabilities.

## Installation

```bash
npm install @plaoc/plugins
```

## Example

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

## Related Links
[Plaoc Plugin](../plugin/index.md)