---
title: HTMLDwebBarcodeScanningElement
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
---

HTMLDwebBarcodeScanningElement is a WebComponent element that implements barcode scanning functionality.
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-barcode-scanning></dweb-barcode-scanning>  
```

## Properties

  - plugin

    The property value is the [BarcodeScannerPlugin](../../plugin/barcode-scanner/index.md) Object;

  - getView

    The property value is the parent element of the video element;

  - process

    The property value is the [BarcodeScannerPlugin.process()](../../plugin/barcode-scanner/process.md) method;

  - stop 

    The property is just the [BarcodeScannerPlugin.stop()](../../plugin/barcode-scanner/stop.md) method;


## Methods

  - [HTMLDwebBarcodeScanningElement.startScanning()](./start-scanning.md)

    Starts the scanning process

  - [HTMLDwebBarcodeScanningElement.stopScanning()](./stop-scanning.md)

    Stops the scanning process

  - [HTMLDwebBarcodeScanningElement.getSupportedFormats()](./get-supported-formats.md)

    Gets the supported formats

## Events

  Supports any events, no predefined events

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
|:-----------------------:|:-------:|:---:|:----------:|:-------:|
| getView                 | ✅      | ✅   | ✅          | X       |
| process                 | ✅      | ✅   | ✅         | X       |
| stop                    | ✅      | ✅   | ✅         | X       |
| startScanning           | ✅      | ✅   | ✅         | X       |
| stopScanning            | ✅      | ✅   | ✅         | X       |
| getSupportedFormats     | ✅      | ✅   | ✅         | X       |

## Related Links

[Plaoc WebComponent](../index.md)