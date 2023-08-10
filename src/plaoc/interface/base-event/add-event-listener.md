---
title: BaseEvent.addEventListener()
category:
  - Interface
tag:
  - BaseEvent
  - addEventListener
---

添加事件监听器;

```js
BaseEvent.addEventListener(
  eventName,
  listener,
  options,
)
```

## 参数

  - eventName

    事件类型的名称；
    参数值是一个 string；

  - listener

    事件监听器；
    参数值的类型是一个 [ListenerCallback]() 函数；

  - options

    可选参数；
    选项参数；
    参数值的类型是一个 boolean 类型， 或者是一个 [AddEventListenerOptions]()对象；
    

## 返回值

  返回一个Promise,resolve兑现一个Object；
  Object的 remove 属性是一个移除当前添加的事件监听器的方法；
  直接调用这个 `Object.remove()` 就能够实现监听器的移除；

## 示例

  - 无
  

## 平台兼容性

| 属性/方法/事件         | Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| addEventListener     | ✅       | ✅  | ✅          | X       |

## 相关链接

[BaseEvent](./index.md)


