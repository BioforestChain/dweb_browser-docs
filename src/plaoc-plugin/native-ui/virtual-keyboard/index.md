---
title: VirtualKeyboardPlugin
category:
  - Plugin
tag:
  - status-bar
---

VirtualKeyboardPlugin 接口用来表示系统虚拟键盘元素，并提供访问系统虚拟键盘的属性和方法

```javascript
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.setOverlay(true)
```

## 属性

- [VirtualKeyboardPlugin.state](./state.md)

  虚拟键盘的状态对象；
  属性值是一个实现了[StateObserver](../../interface/state-observer/index.md) 接口的对象;
   

## 方法 Method

  - [VirtualKeyboardPlugin.getOverlay()](./get-overlay.md)

    查询遮盖状态；
    如果返回的Promise对象，resolve兑现的是true;
    表示虚拟键盘展开后会遮盖App的部分内容；

  - [VirtualKeyboardPlugin.getState([force_update])](./get-state.md)

    查询虚拟键盘的状态

  - [VirtualKeyboardPlugin.setOverlay()](./set-overlay.md)

    设置遮盖状态；
    如果设置为true;
    表示虚拟键盘展开后会遮盖App的部分内容；

  - [VirtualKeyboardPlugin.setState()](./set-state.md)

    设置虚拟键盘的状态

  - [VirtualKeyboardPlugin.setStateByKey()](./set-state-by-key.md)

    设置虚拟键盘的某一状态值


## 事件 Event

  - 无


## 平台兼容性


| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| state        | ✅      | ✅  | ✅          | X       |
| getOverlay   | ✅      | ✅  | ✅          | X       |
| getState     | ✅      | ✅  | ✅          | X       |
| setOverlay   | ✅      | ✅  | ✅          | X       |
| setState     | ✅      | ✅  | ✅          | X       |
| setStateByKey| ✅      | ✅  | ✅          | X       |


## 相关链接

[Plaoc](../../)


