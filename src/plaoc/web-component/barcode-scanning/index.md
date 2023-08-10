---
title: HTMLDwebBarcodeScanningElement
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
---

HTMLDwebBarcodeScanningElement是一个实现扫码功能的 WebComponent元素；
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);

```html
<dweb-barcode-scanning></dweb-barcode-scanning>
```

## 属性

  - plugin

    属性值是 [BarcodeScannerPlugin](../../plugin/barcode-scanner/index.md)

  - getView

    属性值是 video 元素的父元素；

  - process

    属性值是 [BarcodeScannerPlugin.process()](../../plugin/barcode-scanner/process.md)方法;

  - stop

    属性只是 [BarcodeScannerPlugin.stop()](../../plugin/barcode-scanner/stop.md) 方法；


## 方法

  - [HTMLDwebBarcodeScanningElement.startScanning()](./start-scanning.md)

    启动扫码程序

  - [HTMLDwebBarcodeScanningElement.stopScanning()](./stop-scanning.md)

    停止扫码程序；

  - [HTMLDwebBarcodeScanningElement.getSupportedFormats()](./get-supported-formats.md)

    获取支持的格式；

## 事件

  支持任意事件，无预定义事件；

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

| 属性/方法/事件           | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| getView                | ✅      | ✅  | ✅           | X       |
| process                | ✅      | ✅  | ✅          | X       |
| stop                   | ✅      | ✅  | ✅          | X       |
| startScanning          | ✅      | ✅  | ✅          | X       |
| stopScanning           | ✅      | ✅  | ✅          | X       |
| getSupportedFormats    | ✅      | ✅  | ✅          | X       |

## 相关链接

[Plaoc WebComponent](../index.md)


