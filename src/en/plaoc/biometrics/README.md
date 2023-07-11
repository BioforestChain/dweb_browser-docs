---
title: Biometrics
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

Biometrics, including fingerprint and face recognition authentication.

> For specific example code, see: [Biometrics](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Biometrics.vue)

## Biometrics WebComponent API

First, mount the DOM node, then you can call the corresponding API.

```html
<body>
  <dweb-biometrics></dweb-biometrics>
  <script type="module">
    import "@plaoc/plugins";
    const biometrics = document.querySelector("dweb-biometrics")!
    // Check if the device supports biometrics
    const check = async () => {
      await biometrics.check()
    }
    // Call biometrics
    const biometrics = async () => {
      await biometrics.biometrics()
    }
    Object.assign(globalThis,{check,biometrics})
  </script>
</body>
```

### check

Check if biometrics is supported.

- Method signature:

```ts
  async check():Promise<boolean>
```

### biometrics

Call biometrics.

- Method signature:

```ts
  async biometrics(): Promise<BioetricsResult>
```

**Returns:** <code>Promise&lt;<a href="#bioetricsresult">BioetricsResult</a>&gt;</code>

## Biometrics Plugin API

The functionality of the WebComponent is essentially provided by the Plugin. Therefore, the Plugin includes the same API as the WebComponent.

```ts
import { biometricsPlugin } from "@plaoc/plugins";

// Call biometrics
biometricsPlugin.biometrics();
// Check if biometrics is supported
biometricsPlugin.check();
```

## Interfaces

### BioetricsResult

| Prop          | Type                 | Description                                | Since |
| ------------- | -------------------- | ------------------------------------------ | ----- |
| **`success`** | <code>boolean</code> | Indicates if the device passed biometrics. | 1.0.0 |
| **`message`** | <code>string</code>  | Contains user authorization information and error return values. | 1.0.0 |