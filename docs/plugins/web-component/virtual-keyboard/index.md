---
title: HTMLDwebVirtualKeyboardElement
category:
  - WebComponent
tag:
  - HTMLDwebVirtualKeyboardElement
---

访问系统虚拟键盘的 WebComponent;
继承与 [HTMLStateObserverElement](../state-observer/index.md)接口；


```html
<dweb-virtual-keyboard></dweb-virtual-keyboard>
```

## 属性

  - plugin

    属性值是一个 [VirtualKeyboardPlugin](../../plugin/virtual-keyboard/index.md) 对象

  - state

    属性值是一个 [VirtualKeyboardPlugin.state](../../plugin//virtual-keyboard/state.md) 对象；

  - getState

    属性值是一个 [VirtualKeyboardPlugin.getState()](../../plugin/virtual-keyboard/get-state.md) 方法

  - setState

    属性值是一个 [VirtualKeyboardPlugin.setState()](../../plugin/virtual-keyboard/set-state.md) 方法

  - setOverlay

    属性值是一个 [VirtualKeyboardPlugin.setOverlay()](../../plugin/virtual-keyboard/set-overlay.md) 方法

  - getOverlay

    属性值是一个 [VirtualKeyboardPlugin.getOverlay()](../../plugin/virtual-keyboard/get-overlay.md) 方法

## 方法

  - 无

## 事件

  - "statechange"

  状态发生改变触发；
  会传递一个 [CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent) 对象给事件监听器；
  CustomEvent.detail 是一个 [VirtualKeyboardPlugin.state](../../plugin//virtual-keyboard/state.md) 对象；


## 示例
  ```html
  <body>
    <dweb-virtual-keyboard></dweb-virtual-keyboard>
    <script type="text/javascript">
      const dwebVirtualkeyboard = document.querySelector("dweb-virtual-keyboard");
      dwebVirtualkeyboard.addEventListener('statechange', (customEvent) => {

      })
    </script>
  </body>
  ```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅  | ✅           | X       |
| state        | ✅      | ✅  | ✅          | X       |
| getState     | ✅      | ✅  | ✅          | X       |
| setState     | ✅      | ✅  | ✅          | X       |
| setOverlay   | ✅      | ✅  | ✅          | X       |
| getOverlay   | ✅      | ✅  | ✅          | X       |

## 相关链接

  [Plaoc WebComponent](../index.md)

  [VirtualKeyboardPlugin](../../plugin/virtual-keyboard/index.md)


