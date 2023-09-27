---
title: HTMLDwebBarcodeScanningElement
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
---

HTMLDwebBarcodeScanningElement 是一个实现扫码功能的 WebComponent 元素；
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);

```html
<dweb-barcode-scanning></dweb-barcode-scanning>
```

## 方法

- [HTMLDwebBarcodeScanningElement.startScanning()](./start-scanning.md)

  启动扫码程序

- [HTMLDwebBarcodeScanningElement.stopScanning()](./stop-scanning.md)

  停止扫码程序；

## 示例

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

## 平台兼容性

|   属性/方法/事件    | Android | IOS | Desktop |
| :-----------------: | :-----: | :-: | :-----: |
|       getView       |   ✅    | ✅  |   ✅    |
|       process       |   ✅    | ✅  |   ✅    |
|        stop         |   ✅    | ✅  |   ✅    |
|    startScanning    |   ✅    | ✅  |   ✅    |
|    stopScanning     |   ✅    | ✅  |   ✅    |
| getSupportedFormats |   ✅    | ✅  |   ✅    |

## 相关链接

[Plaoc WebComponent](../index.md)
