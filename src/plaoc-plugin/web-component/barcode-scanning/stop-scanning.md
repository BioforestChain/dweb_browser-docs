---
title: HTMLDwebBarcodeScanningElement.stopScanning()
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
  - stopScanning 
---

停止扫描；

```js
HTMLDwebBarcodeScanningElement.stopScanning()
```

## 参数

  - 无

## 返回值

  void;

## 示例
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

## 平台兼容性

| 属性/方法/事件     | Android | IOS | Desktop-Dev | Desktop |
|:----------------:|:-------:|:---:|:-----------:|:-------:|
| stopScanning     | ✅       | ✅  | ✅          | X       |

## 相关链接
[Plaoc WebComponent](../index.md)


