---
title: Biometrics
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

生物识别，包含指纹和人脸识别认证。

> 具体查看示例代码： [Biometrics](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Biometrics.vue)

## Biometrics WebComponent API

先挂载 DOM 节点，然后就能调用相应 API。

```html
<body>
  <dweb-biometrics></dweb-biometrics>
  <script type="module">
    import "@dweb-browser/plaoc";
    const biometrics = document.querySelector("dweb-biometrics")!
    // 检查设备是否可以生物识别
    const check = async () => {
      await biometrics.check()
    }
    // 调用生物识别
    const biometrics = async () => {
      await biometrics.biometrics()
    }
    Object.assign(globalThis,{check,biometrics})
  </script>
</body>
```

### check

检查是否支持生物识别。

- 调用签名：

```ts
  async check():Promise<boolean>
```

### biometrics

调用生物识别。

- 调用签名：

```ts
  async biometrics(): Promise<BioetricsResult>
```

**Returns:** <code>Promise&lt;<a href="#bioetricsresult">BioetricsResult</a>&gt;</code>

## Biometrics Plugin API

WebComponent 的功能本质上由 Plugin 提供，因此 Plugin 的 API 同 WebComponent。

```ts
import { biometricsPlugin } from "@dweb-browser/plaoc";

// 调用生物识别
biometricsPlugin.biometrics();
// 检查是否支持生物识别
biometricsPlugin.check();
```

## Interfaces

### BioetricsResult

| Prop          | Type                 | Description                      | Since |
| ------------- | -------------------- | -------------------------------- | ----- |
| **`success`** | <code>boolean</code> | 返回设备是否通过生物识别         | 1.0.0 |
| **`message`** | <code>string</code>  | 体现有关用户授权信息和报错返回值 | 1.0.0 |
