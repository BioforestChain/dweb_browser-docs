---
title: device
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

This plugin is responsible for obtaining device-related information.

> For specific example code, please see: [Device](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Device.vue)

## Device WebComponent API

To use the WebComponent, you need to mount a DOM node and then you can call the corresponding APIs.

```html
<body>
  <dweb-device></dweb-device>
  <script type="module">
    import "@plaoc/plugins";
    const device = document.querySelector("dweb-device")!
    // Get the UUID of the device
    const getUUID = async () => {
      console.log(await device.getUUID())
    }
  </script>
</body>
```

### getUUID

Get the unique identifier of the device.

- Method Signature

```ts
getUUID(): Promise<$ResponseUUIDData>
```

**Returns:** <code>Promise&lt;<a href="#responseuuiddata">$ResponseUUIDData</a>&gt;</code>


## Device Plugin API

The functionality of the WebComponent is essentially provided by the Plugin, so the Plugin's API is the same as the WebComponent's.

```ts
import { devicePlugin } from "@plaoc/plugins";

devicePlugin.getUUID();
```

## Interfaces

### $ResponseUUIDData

| Property   | Type                | Description       | Since |
| ---------- | ------------------- | ----------------- | ----- |
| **`uuid`** | <code>string</code> | Unique identifier of the device | 1.0.0 |