---
title: HTMLDwebBarcodeScanningElement.stopScanning()
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
  - stopScanning
---

Stops scanning

```js
HTMLDwebBarcodeScanningElement.stopScanning()
``` 

## Parameters

  - None
  
## Return Value

  void

## Example

```html
<body>

  <dweb-barcode-scanning></dweb-barcode-scanning>
  
  <button>stop</button>

  <script type="module">
  
    import "@plaoc/plugins"
    
    const barcodeScanner = document.querySelector("dweb-barcode-scanning")!
    
    const btn = document.querySelector('button');
    
    btn.addEventListener('click', async () => {
    
      barcodeScanner.stopScanning();
      
    })
    
  </script>
  
</body>
```

## Platform Compatibility 

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:-----------------:|:-------:|:---:|:----------:|:-------:|
| stopScanning      | ✅       | ✅   | ✅         | X       |

## Related Links

[Plaoc WebComponent](../index.md)