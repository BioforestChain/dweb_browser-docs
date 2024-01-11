---
title: HTMLDwebNavigationBarElement
category:
  - WebComponent
tag:
  - HTMLDwebNavigationBarElement
---

访问系统导航栏的 WebComponent;
继承与 [HTMLStateObserverElement](../state-observer/index.md)接口；

```html
<dweb-navigation-bar></dweb-navigation-bar>
```

## 属性

  - plugin

    属性值是 [NavigationBarPlugin](../../plugin/navigation-bar/index.md)对象；

  - state

    属性值是 [NavigationBarPlugin.state](../../plugin/navigation-bar/state.md)对象；

  - setColor

    属性值是 [NavigationBarPlugin.setColor()](../../plugin/navigation-bar/set-color.md) 方法

  - getColor

    属性值是 [NavigationBarPlugin.getColor()](../../plugin/navigation-bar/get-color.md) 方法

  - setStyle

    属性值是 [NavigationBarPlugin.setStyle()](../../plugin/navigation-bar/set-style.md) 方法

  - getStyle

    属性值是 [NavigationBarPlugin.getStyle()](../../plugin/navigation-bar/get-style.md) 方法

  - show

    属性值是 [NavigationBarPlugin.show()](../../plugin/navigation-bar/show.md) 方法

  - hide

    属性值是 [NavigationBarPlugin.hide()](../../plugin/navigation-bar/hide.md) 方法

  - setVisible

    属性值是 [NavigationBarPlugin.setVisible()](../../plugin/navigation-bar/set-visible.md) 方法

  - getVisible

    属性值是 [NavigationBarPlugin.getVisible()](../../plugin/navigation-bar/get-visible.md) 方法

  - getState

    属性值是 [NavigationBarPlugin.getState()](../../plugin/navigation-bar/get-state.md) 方法

  - setOverlay

    属性值是 [NavigationBarPlugin.setOverlay()](../../plugin/navigation-bar/set-overlay.md) 方法

  - getOverlay

    属性值是 [NavigationBarPlugin.getOverlay()](../../plugin/navigation-bar/get-overlay.md) 方法

## 方法

  - 无

## 事件

  
  - "statechange"

    状态发生改变触发；
    会传递一个 [CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent) 对象给事件监听器；
    CustomEvent.detail 是一个 [NavigationBarPlugin.state](../../plugin/navigation-bar/state.md) 对象；

## 示例
  ```html
  <body>
    <dweb-navigation-bar></dweb-navigation-bar>
    <script type="text/javascript">
      const dwebNavigationBar = document.querySelector("dweb-navigation-bar");
      dwebNavigationBar.getOverlay()
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

  [NavigationBarPlugin](../../plugin/navigation-bar/index.md)