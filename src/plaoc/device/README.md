---
title: device
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

这个插件负责获取一些设备相关的信息。

> 具体查看示例代码： [Device](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Device.vue)

## Device WebComponent API

使用 WebComponent 需要先挂载 DOM 节点，然后就能调用相应 API。

```html
<body>
  <dweb-device></dweb-device>
  <script type="module">
    import "@plaoc/plugins";
    const device = document.querySelector("dweb-device")!
    const getUUID = async () => {
      console.log(await device.getUUID())
    }
  </script>
</body>
```

### getUUID

获取设备的唯一标识。

- 调用签名

```ts
getUUID(): Promise<$ResponseUUIDData>
```

**Returns:** <code>Promise&lt;<a href="#responseuuiddata">$ResponseUUIDData</a>&gt;</code>


## Device Plugin API

WebComponent 的功能本质上由 Plugin 提供，因此 Plugin 的 API 同 WebComponent。

```ts
import { devicePlugin } from "@plaoc/plugins";

devicePlugin.getUUID();
```

## Interfaces

### $ResponseUUIDData

| Prop       | Type                | Description    | Since |
| ---------- | ------------------- | -------------- | ----- |
| **`uuid`** | <code>string</code> | 设备的唯一标识 | 1.0.0 |
