---
title: StatusBarPlugin.state
category:
  - Plugin 
tag:
  - plugin
  - StateObserve
  - state
---

  系统状态栏的状态对象；
  属性值是一个实现了[StateObserver](../../interface/state-observer/index.md) 接口的对象;


## 属性

  - state.currentState

    当前的状态对象；
    属性的值是一个实现了部分[State](../../interface/state/index.md)接口对象；
    通过currentState能够实现状态的获取和设置；\[一般而言不要手动的设置currentState的属性值，这个值会自动更新\]
    在初次更新完成之前属性值是 undefined;
    currentStat合法的属性列表包括：
    \["overlay","visible","style","color", "insets"\]
   

## 方法

  - [state.*jsonlines()](../../interface/state-observer/jsonlines.md)

    是一个 Generator函数；
    实现了对，插件状态的读入和监听；
    一但对应的插件状态发生了改变就会触发通过 StateObserver.onChange()方法设置的监听器；

  - [state.stopObserve()](../../interface/state-observer/stopObserve.md)

    停止监听状态

  - [state.onChange(listener)](../../interface/state-observer/onChange.md)

    添加监听器；可以通过多次调用添加多个监听器；

  - [state.getState([force_update])](../../interface/state-observer/getState.md)

    获取当前状态的值

## 事件

  - 无

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| currentState | ✅      | ✅  | ✅          | X       |
| jsonlines    | ✅      | ✅  | ✅          | X       |
| stopObserve  | ✅      | ✅  | ✅          | X       |
| onChange     | ✅      | ✅  | ✅          | X       |
| getState     | ✅      | ✅  | ✅          | X       |

## 相关链接
[StatusBarPlugin](./index.md)


