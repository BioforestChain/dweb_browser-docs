---
title: WindowListenerHandle
category:
  - interface
tag:
  - WindowListenerHandle
---



## 属性

  - registered

    是否已经注册；
    属性值是一个boolean;

  - windowEventName

    window事件的名称；
    属性值是一个string；

  - pluginEventName

    插件事件的名称；
    属性值是一个string;


## 方法

  - [WindowListenerHandle.handler()](./handler.md)

    事件监听器；

## 事件

  - 无

## 平台兼容性

| 属性/方法/事件    | Android | IOS | Desktop-Dev | Desktop |
|:---------------:|:-------:|:---:|:-----------:|:-------:|
| registered      | ✅      | ✅  | ✅          | X       |
| windowEventName | ✅      | ✅  | ✅          | X       |
| pluginEventName | ✅      | ✅  | ✅          | X       |
| handler         | ✅      | ✅  | ✅          | X       |

## 相关链接

[Tkit](../tkit/index.md)


