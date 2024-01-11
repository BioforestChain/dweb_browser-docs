---
title: HTMLDwebStatusBarElement
category:
  - WebComponent
tag:
  - HTMLDwebStatusBarElement
---

访问系统导航栏的 WebComponent;
继承与 [HTMLStateObserverElement](../state-observer/index.md)接口；

```html
<dweb-status-bar></dweb-status-bar>
```

## 属性

  - plugin

    属性值是 [StatusBarPlugin](../../plugin/status-bar/index.md)对象；

  - state

    属性值是 [StatusBarPlugin.state](../../plugin/status-bar/state.md)对象；

  - setColor

    属性值是 [StatusBarPlugin.setColor()](../../plugin/status-bar/set-color.md) 方法

  - getColor

    属性值是 [StatusBarPlugin.getColor()](../../plugin/status-bar/get-color.md) 方法

  - setStyle

    属性值是 [StatusBarPlugin.setStyle()](../../plugin/status-bar/set-style.md) 方法

  - getStyle

    属性值是 [StatusBarPlugin.getStyle()](../../plugin/status-bar/get-style.md) 方法

  - show

    属性值是 [StatusBarPlugin.show()](../../plugin/status-bar/show.md) 方法

  - hide

    属性值是 [StatusBarPlugin.hide()](../../plugin/status-bar/hide.md) 方法

  - setVisible

    属性值是 [StatusBarPlugin.setVisible()](../../plugin/status-bar/set-visible.md) 方法

  - getVisible

    属性值是 [StatusBarPlugin.getVisible()](../../plugin/status-bar/get-visible.md) 方法

  - getState

    属性值是 [StatusBarPlugin.getState()](../../plugin/status-bar/get-state.md) 方法

  - setOverlay

    属性值是 [StatusBarPlugin.setOverlay()](../../plugin/status-bar/set-overlay.md) 方法

  - getOverlay

    属性值是 [StatusBarPlugin.getOverlay()](../../plugin/status-bar/get-overlay.md) 方法

## 方法

  - 无

## 事件

  
  - "statechange"

    状态发生改变触发；
    会传递一个 [CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent) 对象给事件监听器；
    CustomEvent.detail 是一个 [StatusBarPlugin.state](../../plugin/status-bar/state.md) 对象；

## 示例
  ```html
  <body>
    <dweb-status-bar></dweb-status-bar>
    <script type="text/javascript">
      const dwebStatusBar = document.querySelector("dweb-status-bar");
      dwebStatusBar.getOverlay()
    </script>
  </body>
  ```

## 平台兼容性

  | 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
  |:------------:|:-------:|:---:|:-----------:|:-------:|
  | plugin       | ✅      | ✅  | ✅           | X       |
  | state        | ✅      | ✅  | ✅          | X       |
  | setColor     | ✅      | ✅  | ✅          | X       |
  | getColor     | ✅      | ✅  | ✅          | X       |
  | setStyle     | ✅      | ✅  | ✅          | X       |
  | getStyle     | ✅      | ✅  | ✅          | X       |
  | show         | ✅      | ✅  | ✅          | X       |
  | hide         | ✅      | ✅  | ✅          | X       |
  | setVisible   | ✅      | ✅  | ✅          | X       |
  | getVisible   | ✅      | ✅  | ✅          | X       |
  | getState     | ✅      | ✅  | ✅          | X       |
  | setOverlay   | ✅      | ✅  | ✅          | X       |
  | getOverlay   | ✅      | ✅  | ✅          | X       |

## 相关链接

  [Plaoc WebComponent](../index.md)

  [StatusBarPlugin](../../plugin/status-bar/index.md)