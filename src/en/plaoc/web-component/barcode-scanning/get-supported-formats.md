---
title: HTMLDwebBarcodeScanningElement.getSupportedFormats()
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
  - getSupportedFormats
---

Gets the supported formats

```js 
HTMLDwebBarcodeScanningElement.getSupportedFormats()
```

## Parameters

  - None

## Return Value

  Returns a Promise

## Example

```html
<body>
  <dweb-barcode-scanning></dweb-barcode-scanning>
  
  <button>getSupportedFormats</button>

  <script type="module">
    import "@plaoc/plugins"
    
    const barcodeScanner = document.querySelector("dweb-barcode-scanning")!
    
    const btn = document.querySelector('button');
    
    btn.addEventListener('click', async () => {
      const res = await barcodeScanner.getSupportedFormats();
    })
  </script>
</body>
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:----------:|:-------:|
| getSupportedFormats     | ✅       | ✅   | ✅         | X       |

## Related Links 

[Plaoc WebComponent](../index.md)