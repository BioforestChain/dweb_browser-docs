---
title: HTMLDwebBarcodeScanningElement.startScanning()
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
  - startScanning
---

开始扫码，这个接口会调用摄像头，但是开发者并不用去管理权限，系统会帮助开发者去申请摄像头权限。

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
- formats

### 返回值

- ScanResult

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
| startScanning  |   ✅    | ✅  |   ✅    |
