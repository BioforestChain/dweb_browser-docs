---
title: HTMLStateObserverElement
category:
  - WebComponent
tag:
  - HTMLStateObserverElement
---

实现状态监听的 WebComponent;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);
HTMLStateObserverElement会作为一个基类，
会被： 
[HTMLDwebNavigationBarElement](../navigation-bar/index.md)
[HTMLDwebSafeAreaElement](../safe-area/index.md)
[HTMLDwebStatusBarElement](../status-bar/index.md)
[HTMLDwebVirtualKeyboardElement](../virtual-keyboard/index.md)
请不要轻易使用这个类；


## 属性

  - state

    继承类传递进来的 [StateObserver](../../interface/state-observer/index.md)对象

## 方法

  - HTMLStateObserverElement.connectedCallback

    内部预定的方法，请不要覆写这个方法；

  - HTMLStateObserverElementdisconnectedCallback

    内部预定的方法，请不要覆写这个方法；

## 事件

  - "statechange"

    当state发生改变的时候触发；
    会把一个 CustomEvent 对象传递给事件监听器；


## 平台兼容性

| 属性/方法/事件      | Android | IOS | Desktop-Dev | Desktop |
|:-----------------:|:-------:|:---:|:-----------:|:-------:|
| state             | ✅      | ✅  | ✅          | X       |
| event statechange | ✅      | ✅  | ✅          | X       |

## 相关链接

  [Plaoc WebComponent](../index.md)


