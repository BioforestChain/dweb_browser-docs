---
title: HTMLDwebSafeAreaElement
category:
  - WebComponent
tag:
  - HTMLDwebSafeAreaElement
---

访问系统安全区域的 WebComponent;
继承与 [HTMLStateObserverElement](../state-observer/index.md)接口；

```html
<dweb-safe-area></dweb-safe-area>
```

## 属性

  - plugin

    属性值是一个 [SafeAreaPlugin](../../plugin/safe-area/index.md) 对象；
    
  - state

    属性值是一个 [SafeAreaPlugin.state](../../plugin/safe-area/state.md) 对象；

  - getState

    属性值是一个 [SafeAreaPlugin.getState()](../../plugin/safe-area/get-state.md) 方法；

  - setState

    属性值是一个 [SafeAreaPlugin.setState()](../../plugin/safe-area/set-state.md) 方法；

  - setOverlay

    属性值是一个 [SafeAreaPlugin.setOverlay()](../../plugin/safe-area/set-overlay.md) 方法；

  - getOverlay

    属性值是一个 [SafeAreaPlugin.getOverlay()](../../plugin/safe-area/get-overlay.md) 方法；

## 方法

  - 无

## 事件

  - "statechange"

    状态发生改变触发；
    会传递一个 [CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent) 对象给事件监听器；
    CustomEvent.detail 是一个 [SafeAreaPlugin.state](../../plugin/safe-area/state.md) 对象；


## 示例
  ```html
  <body>
    <dweb-safe-area></dweb-safe-area>
    <script type="text/javascript">
      const dwebSafeArea = document.querySelector("dweb-safe-area");
      dwebSafeArea.addEventListener('statechange', (customEvent) => {

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

[SafeAreaPlugin](../../plugin/safe-area/index.md)


