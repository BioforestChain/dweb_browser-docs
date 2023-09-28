---
title: HTMLDwebTorchElement
category:
  - WebComponent
tag:
  - HTMLDwebTorchElement   
---

A WebComponent for accessing the torch device;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-torch></dweb-torch>
```

## Properties

  - plugin

    A [TorchPlugin](../../plugin/torch/index.md) object;

  - toggleTorch

    The [TorchPlugin.toggleTorch()](../../plugin/torch/toggle-torch.md) method;

  - getTorchState

    The [TorchPlugin.getTorchState()](../../plugin/torch/get-torch-state.md) method;


## Methods

  - None

## Events

  No predefined events

## Example

```html
<body>
  <dweb-torch></dweb-torch>

  <script type="text/javascript">
    const dwebTorch = document.querySelector("dweb-torch");
    dwebTorch.toggleTorch();
  </script>
</body>
```


## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅   | ✅           | X       |
| toggleTorch  | ✅      | ✅   | ✅           | X       |
| getTorchState| ✅      | ✅   | ✅           | X       |

## Related Links

[WebComponent](../index.md)

[TorchPlugin](../../plugin/torch/index.md)