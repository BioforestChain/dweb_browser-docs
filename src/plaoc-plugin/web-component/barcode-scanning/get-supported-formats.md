---
title: HTMLDwebBarcodeScanningElement.getSupportedFormats()
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
  - getSupportedFormats 
---

获取支持的格式


```js
HTMLDwebBarcodeScanningElement.getSupportedFormats()
```

## 参数

  - 无

## 返回值

  返回一个Promise;

## 示例
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

## 平台兼容性

| 属性/方法/事件            | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:-----------:|:-------:|
| getSupportedFormats     | ✅       | ✅  | ✅          | X       |

## 相关链接

[Plaoc WebComponent](../index.md)


