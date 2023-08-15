---
title: HTMLDwebTorchElement
category:
  - WebComponent
tag:
  - HTMLDwebTorchElement
---

访问手电筒设备的 WebComponent;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);


```html
<dweb-torch></dweb-torch>
```

## 属性

  - plugin

    属性值是一个 [TorchPlugin](../../plugin/torch/index.md) 对象；

  - toggleTorch

    属性值是一个 [TorchPlugin.toggleTorch()](../../plugin/torch/toggle-torch.md) 方法；

  - getTorchState

    属性值是一个 [TorchPlugin.getTorchState()](../../plugin/torch/get-torch-state.md) 方法；


## 方法

  - 无

## 事件

  无预定义事件

## 示例
  ```html
  <body>
    <dweb-torch></dweb-torch>
    <script type="text/javascript">
      const dwebTorch = document.querySelector("dweb-torch");
      dwebTorch.toggleTorch()
    </script>
  </body>
  ```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅  | ✅           | X       |
| toggleTorch  | ✅      | ✅  | ✅          | X       |
| getTorchState| ✅      | ✅  | ✅          | X       |

## 相关链接

  [Plaoc WebComponent](../index.md)

  [TorchPlugin](../../plugin/torch/index.md)



