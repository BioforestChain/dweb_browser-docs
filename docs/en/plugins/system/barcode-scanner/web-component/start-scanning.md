---
title: HTMLDwebBarcodeScanningElement.startScanning()
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
  - startScanning  
---

Starts barcode scanning

```js
HTMLDwebBarcodeScanningElement.startScanning() 
```

## Parameters

  - None

## Return Value

  Returns a Promise that resolves to a [ScanResult]() object

## Example

```html
<body>

  <dweb-barcode-scanning></dweb-barcode-scanning>
  
  <button>scanner</button>

  <script type="module">

    import "@plaoc/plugins"
    
    const barcodeScanner = document.querySelector("dweb-barcode-scanning")!
    
    const btn = document.querySelector('button');
    
    btn.addEventListener('click', async () => {
    
      const res = await barcodeScanner.startScanning();
      
    })
    
  </script>
  
</body>
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:-------------------------:|:-------:|:---:|:----------:|:-------:|
| startScanning             | ✅       | ✅   | ✅         | X       |

## Related Links

[Plaoc WebComponent](../index.md)