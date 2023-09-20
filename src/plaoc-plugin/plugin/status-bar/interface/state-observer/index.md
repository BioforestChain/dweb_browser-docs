---
title: StateObserver
category:
  - Interface
tag:
  - StateObserver
---

StateObserver 接口是一个基础的监听接口，实现对 Plugin 状态的监听；
这个接口是一个内部接口，要获取具体的实例，请通过 Plugin.state 属性访问

```javascript
import { statusBarPlugin } from "@plaoc/plugins";

statusBarPlugin.state.onChange((info) => {
  // 当 state 发生变化的时候调用
})

```


## 属性

  - StateObserver.currentState

    当前的状态对象；
    属性的值是一个 [State](../state/index.md) 对象；
    通过currentState能够实现状态的获取和设置；\[一般而言不要手动的设置currentState的属性值，这个值会自动更新\]
    在初次更新完成之前属性值是 undefined

  ## 方法
  - [StateObserver.*jsonlines()](./jsonlines.md)

    是一个 Generator函数；
    实现了对，插件状态的读入和监听；
    一但对应的插件状态发生了改变就会触发通过 StateObserver.onChange()方法设置的监听器；

  - [StateObserver.stopObserve()](./stopObserve.md)

    停止监听状态

  - [StateObserver.onChange(listener)](./onChange.md)

    添加监听器；可以通过多次调用添加多个监听器；

  - [StateObserver.getState([force_update])](./getState.md)

    获取当前状态的值

## 事件

  - none

## 平台兼容性


| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| currentState | ✅      | ✅  | ✅          | X       |
| jsonlines    | ✅      | ✅  | ✅          | X       |
| stopObserve  | ✅      | ✅  | ✅          | X       |
| onChange     | ✅      | ✅  | ✅          | X       |
| getState     | ✅      | ✅  | ✅          | X       |
 

## 相关链接

[Plugin](../../plugin/)