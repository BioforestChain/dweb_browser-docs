title: BarcodeScanning
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

Provides barcode scanning functionality.

> Check out the example code: [BarcodeScanning](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/BarcodeScanning.vue)

## BarcodeScanning WebComponent API

To use this functionality, you need to declare the HTML tag style, mount it to the DOM, and then call the API.

```html
<body>
  <dweb-barcode-scanning></dweb-barcode-scanning>
  <button @click="taskPhoto()">scanner</button>
  <script type="module">
    import "@dweb-browser/plaoc"
    const barcodeScanner = document.querySelector("dweb-barcode-scanning")!
    // Call barcode scanning
    async function taskPhoto() {
      await barcodeScanner.startScanning();
    }
    Object.assign(globalThis,{ taskPhoto })
  </script>
</body>
```

### startScanning

Starts the camera scanning and closes it after a successful scan.

- Method Signature:

```ts
  async startScanning(): Promise<ScanResult>
```

**Returns:** <code>Promise&lt;<a href="#scanresult">ScanResult</a>&gt;</code>

### stopScanning

Stops the scanning process and closes the camera.

- Method Signature:

```ts
  stopScanning(): void;
```

### getView

Gets the container element for the video. Developers can customize the style using this DOM element.

- Method Signature:

```ts
getView: HTMLElement | null;
```

### hasMedia

Checks if scanning functionality is supported.

- Method Signature:

```ts
  hasMedia(): boolean;
```

## BarcodeScanner Plugin API

This API provides barcode scanning functionality as a plugin. When using only the plugin functionality, there is no need to declare the component.

```html
<body>
  <input
    type="file"
    onchange="onFileChanged($event)"
    accept="image/*"
    capture
  />
  <script type="module">
    import { barcodeScannerPlugin } from "@dweb-browser/plaoc";
    const onFileChanged = async ($event: Event) => {
      const target = $event.target as HTMLInputElement;
      if (target && target.files?.[0]) {
        const img = target.files[0];
        alert(await barcodeScannerPlugin.process(img))
      }
    };
    Object.assign(globalThis,{ onFileChanged })
  </script>
</body>
```

### process

Processes a QR code image and returns the decoded content as an array of strings. When no QR code is recognized, an empty array is returned.

- Method Signature:

```ts
  async process(blob: Blob, rotation = 0, formats = SupportedFormat.QR_CODE): Promise<string[]>
```

| Param          | Type                                                        | Description                            |
| -------------- | ----------------------------------------------------------- | -------------------------------------- |
| **`blob`**     | <code>Blob</code>                                           | The image data to be decoded.          |
| **`rotation`** | <code>number</code>                                         | The rotation angle of the image.       |
| **`formats`**  | <code><a href="#supportedformat">SupportedFormat</a></code> | The type of data to decode, e.g., QR code, barcode. |

### stop

Stops the process of decoding QR code images.

- Method Signature:

```ts
  async stop(): Promise<boolean>
```

## Interfaces

### ScanResult

The result of a barcode scan.

| Prop             | Type                                                                          | Description                                  | Since |
| ---------------- | ----------------------------------------------------------------------------- | -------------------------------------------- | ----- |
| **`hasContent`** | <code>boolean</code>                                                          | 是否有识别到内容                             | 1.0.0 |
| **`content`**    | <code>string[]</code>                                                         | 扫码具体内容，是字符串数组                   | 1.0.0 |
| **`permission`** | <code><a href="#barcodescannerpermission">BarcodeScannerPermission</a></code> | 权限结果返回，用来判断用户是否对权限申请拒绝 | 1.0.0 |

#### BarcodeScannerPermission

对用户的权限返回进行标识。

| Prop             | Type                    | Description                  | Since |
| ---------------- | ----------------------- | ---------------------------- | ----- |
| **`UserReject`** | <code>UserReject</code> | 用户拒绝                     | 1.0.0 |
| **`UserAgree`**  | <code>UserAgree</code>  | 用户同意                     | 1.0.0 |
| **`UserError`**  | <code>UserError</code>  | 用户手机版本太低，不支持扫码 | 1.0.0 |

### SupportedFormat

扫码识别支持的格式

| Prop              | Type                | Platform     | Description |
| ----------------- | ------------------- | ------------ | ----------- |
| UPC_A             | 'UPC_A'             | Android only |             |
| UPC_E             | 'UPC_E'             | Android only |             |
| UPC_EAN_EXTENSION | 'UPC_EAN_EXTENSION' | Android only |             |
| EAN_8             | 'EAN_8'             | Android only |             |
| EAN_13            | 'EAN_13'            | Android only |             |
| CODE_39           | 'CODE_39'           | Android only |             |
| CODE_39_MOD_43    | 'CODE_39_MOD_43'    | iOS only     |             |
| CODE_93           | 'CODE_93'           | iOS only     |             |
| CODE_128          | 'CODE_128'          | iOS only     |             |
| CODABAR           | 'CODABAR'           | Android only |             |
| ITF               | 'ITF'               | Android only |             |
| ITF_14            | 'ITF_14'            | iOS only     |             |
| AZTEC             | 'AZTEC'             | iOS only     |             |
| DATA_MATRIX       | 'DATA_MATRIX'       | iOS only     |             |
| MAXICODE          | 'MAXICODE'          | Android only |             |
| PDF_417           | 'PDF_417'           | Android only |             |
| QR_CODE           | 'QR_CODE'           | Android only |             |
| RSS_14            | 'RSS_14'            | Android only |             |
| RSS_EXPANDED      | 'RSS_EXPANDED'      | Android only |             |
