---
title: Tkit
category:
  - Interface
tag:
  - Tkit
---

 

## 属性

  - _listeners

    用来保存全部的监听器；
    属性值的类型是一个Object;
    key 是事件名称
    value 是一个Array,索引项是一个接受任何参数的函数;

  - _windowListeners

    用来保存事件监听；
    属性值是一个 Object
    key 是事件的名称
    value 是[WindowListenerHandle](../window-listener-handle/index.md)对象；

## 方法

  - 无

## 事件

  - 无

## 平台兼容性

| 属性/方法/事件         | Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| _listeners           | ✅      | ✅  | ✅           | X       |
| _windowListeners     | ✅      | ✅  | ✅           | X       |

## 相关链接

[NetWorkPlugin](../../plugin/network/index.md)


