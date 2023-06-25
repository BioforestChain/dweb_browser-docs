---
title: Torch
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

手电筒控制插件。

> 具体查看示例代码： [Torch](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Torch.vue)

## Torch WebComponent API

先挂载 DOM 节点，然后就能调用相应 API。

```html
<body>
  <dweb-torch></dweb-torch>
  <script type="module">
    import "@dweb-browser/plaoc";
    const torch = document.querySelector("dweb-torch")!
    // 打开/关闭手电筒
    const toggleTorch = async () => {
      await toast.toggleTorch()
    }
    // 手电筒状态
    const getTorchState = async () => {
      await toast.getTorchState()
    }
  </script>
</body>
```

### toggleTorch

控制打开/关闭手电筒。

- 调用签名：

```ts
  async toggleTorch(): Promise<boolean>
```

### getTorchState

手电筒状态，返回`true`是开。

- 调用签名：

```ts
  async getTorchState(): Promise<boolean>
```

## Torch Plugin API

WebComponent 的功能本质上由 Plugin 提供，因此 Plugin 的 API 同 WebComponent。

```ts
import { torchPlugin } from "@dweb-browser/plaoc";

// 获取手电筒状态
torchPlugin.getTorchState();
```
