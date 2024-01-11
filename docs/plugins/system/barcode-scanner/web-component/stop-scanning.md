---
title: stopScanning()
category:
  - WebComponent
tag:
  - HTMLDwebBarcodeScanningElement
  - stopScanning
---

停止正在进行的扫码，会立即退出正在进行扫描的摄像头。

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


## 函数签名

```ts
stopScanning(): void
```

### 参数

- 无

### 返回值

- void

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|  stopScanning  |   ✅    | ✅  |   ✅    |
