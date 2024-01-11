---
title: startScanning()
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
  - startScanning
---

开始扫码，这个接口会调用摄像头，但是开发者并不用去管理权限，系统会帮助开发者去申请摄像头权限。

关于权限，开发者只需要处理用户拒绝权限时应该逻辑如何处理。

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

## 函数签名

```ts
startScanning(rotation?: number, formats?: SupportedFormat): Promise<ScanResult>
```

### 参数

- rotation

表示图片的旋转角度，一般为0。

- [formats](../interface/supported-format.md)

支持的解码类型，一般默认为`QR_CODE`。


### 返回值

- [ScanResult](../interface/scan-result.md)

扫描结果的返回值，包含结果和用户是否授权了摄像头。

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
| startScanning  |   ✅    | ✅  |   ✅    |
