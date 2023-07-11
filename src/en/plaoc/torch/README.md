---
title: Torch
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

Torch, a plugin for controlling the flashlight.

> For specific example code, see: [Torch](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Torch.vue)

## Torch WebComponent API

To use the Torch WebComponent, you need to mount the DOM node and then call the corresponding API.

```html
<body>
  <dweb-torch></dweb-torch>
  <script type="module">
    import "@plaoc/plugins";
    const torch = document.querySelector("dweb-torch")!
    // Toggle the torch on/off
    const toggleTorch = async () => {
      await torch.toggleTorch()
    }
    // Get the torch state
    const getTorchState = async () => {
      await torch.getTorchState()
    }
  </script>
</body>
```

### toggleTorch

Controls the flashlight by toggling it on/off.

- Method signature:

```ts
  async toggleTorch(): Promise<boolean>
```

### getTorchState

Gets the current state of the flashlight. Returns `true` if it is on.

- Method signature:

```ts
  async getTorchState(): Promise<boolean>
```

## Torch Plugin API

The functionality of the Torch WebComponent is essentially provided by the Plugin. Therefore, the Plugin includes the same API as the WebComponent.

```ts
import { torchPlugin } from "@plaoc/plugins";

// Get the torch state
torchPlugin.getTorchState();
```