---
title: BaseEvent.removeEventListener()
category:
  - Interface
tag:
  - BaseEvent
  - removeEventListener
---

删除通过 [BaseEvent.addEventListener()](./add-event-listener.md) 添加的事件监听器；

```js
BaseEvent.removeEventListener(
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

  void;


## 示例

  无

## 平台兼容性

| 属性/方法/事件            | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:-----------:|:-------:|
| removeEventListener     | ✅       | ✅  | ✅          | X       |

## 相关链接

[BaseEvent](./index.md)


