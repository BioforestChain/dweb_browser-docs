---
title: dweb-barcode-scanning
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
---

HTMLDwebBarcodeScanningElement 是一个实现扫码功能的 WebComponent。

他的基本原理是使用 `navigator.mediaDevices` 调用摄像头，然后绘制到 canvas 上转换为 blob 数据，接着调用接口进行识别。

因此您也可以使用类似思路定制自己的二维码识别插件。

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

## 方法

### [startScanning()](./start-scanning.md)

启动扫码程序，会开启摄像头，开始进行扫描。

### [stopScanning()](./stop-scanning.md)

停止正在进行的扫码，会退出摄像头拍摄。

