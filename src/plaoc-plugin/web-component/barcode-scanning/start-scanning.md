---
title: HTMLDwebBarcodeScanningElement.startScanning()
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
  - startScanning
---

开始扫一扫

```js
HTMLDwebBarcodeScanningElement.startScanning()
```

## 参数

  - 无

## 返回值

  返回一个Promise,resolve兑现一个[ScanResult]()对象；

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

| 属性/方法/事件      | Android | IOS | Desktop-Dev | Desktop |
|:-----------------:|:-------:|:---:|:-----------:|:-------:|
| startScanning     | ✅       | ✅  | ✅          | X       |

## 相关链接

[Plaoc WebComponent](../index.md)


