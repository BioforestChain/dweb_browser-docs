---
title: StateObserver
category:
  - Plugin
tag:
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

  属性的值是一个 [State](../state/index.md) 对象

## 方法

## 事件

## 平台兼容性


| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
<!-- | state        | ✅      | ✅  | ✅          | X      | -->
 

## 相关链接
[StateObserver](../state-observer/index.md)