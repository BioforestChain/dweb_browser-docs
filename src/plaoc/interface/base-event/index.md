---
title: BaseEvent
category:
  - Interface
tag:
  - BaseEvent
---

BaseEvent 是一个继承与 [EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget) 的基础类，但是这个用来给其他元素继承使用的，无法直接实例化；

 

## 属性

  - app_kit

    用来保存全部的事件监听器；
    属性值是[Tkit](../tkit/index.md)对象；

## 方法

  - [BaseEvent.addEventListener()](./add-event-listener.md)

    添加事件监听器

  - [BaseEvent.removeEventListener()]()

    删除事件监听器

  - [BaseEvent.dispatchEvent()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/dispatchEvent)

    触发事件

## 事件

  - 无预定义事件； 

## 平台兼容性

| 属性/方法/事件        | Android | IOS | Desktop-Dev | Desktop |
|:-------------------:|:-------:|:---:|:-----------:|:-------:|
| app_kit             | ✅      | ✅  | ✅           | X       |
| addEventListener    | ✅      | ✅  | ✅          | X       |
| removeEventListener | ✅      | ✅  | ✅          | X       |
| dispatchEvent       | ✅      | ✅  | ✅          | X       |

## 相关链接

[Interface](../index.md)


