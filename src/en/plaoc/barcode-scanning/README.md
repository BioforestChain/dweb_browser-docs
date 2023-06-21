---
title: BarcodeScanning
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

Provide barcode scanning functionality.

> See example code: [BarcodeScanning](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/BarcodeScanning.vue)

## BarcodeScanning WebComponent API

The required HTML tag style needs to be declared. When using it, it needs to be mounted to the DOM first, and then the API can be called.

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

Start scanning with the camera and close it after successful parsing.

- Method signature:

```ts
  async startScanning(): Promise<ScanResult>
```

**Returns:** <code>Promise&lt;<a href="#scanresult">ScanResult</a>&gt;</code>

### stopScanning

Stop scanning and close the camera.

- Method signature:

```ts
  stopScanning(): void;
```

### getView

Get the container element of the video. Developers can customize the style based on this DOM.

- Method signature:

```ts
getView: HTMLElement | null;
```

### hasMedia

Check if scanning functionality is supported.

- Method signature:

```ts
  hasMedia(): boolean;
```

## BarcodeScanner Plugin API

The plugin API provided by barcode scanning can be used separately without declaring the component.

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

Parse the QR code image. When no QR code is recognized, an empty array is returned.

- Method signature:

```ts
  async process(blob: Blob, rotation = 0, formats = SupportedFormat.QR_CODE): Promise<string[]>
```

| Param          | Type                                                        | Description                  |
| -------------- | ----------------------------------------------------------- | ---------------------------- |
| **`blob`**     | <code>Blob</code>                                           | The image data to be parsed  |
| **`rotation`** | <code>number</code>                                         | Image rotation angle         |
| **`formats`**  | <code><a href="#supportedformat">SupportedFormat</a></code> | The data type to be parsed, such as QR code, barcode |

### stop

Stop parsing the QR code image.

- Method signature:

```ts
  async stop(): Promise<boolean>
```

## Interfaces

### ScanResult

The result returned by the barcode scanning.

| Prop             | Type                                                                          | Description                          | Since |
| ---------------- | ----------------------------------------------------------------------------- | ------------------------------------ | ----- |
| **`hasContent`** | <code>boolean</code>                                                          | Whether content is recognized        | 1.0.0 |
| **`content`**    | <code>string[]</code>                                                         |

 The specific content of the barcode  | 1.0.0 |
| **`permission`** | <code><a href="#barcodescannerpermission">BarcodeScannerPermission</a></code> | Permission result for user's decision| 1.0.0 |

#### BarcodeScannerPermission

Identification of the user's permission result.

| Prop             | Type                    | Description                          | Since |
| ---------------- | ----------------------- | ------------------------------------ | ----- |
| **`UserReject`** | <code>UserReject</code> | User rejected permission             | 1.0.0 |
| **`UserAgree`**  | <code>UserAgree</code>  | User agreed permission               | 1.0.0 |
| **`UserError`**  | <code>UserError</code>  | User's phone version is too low      | 1.0.0 |

### SupportedFormat

Supported formats for barcode recognition.

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
