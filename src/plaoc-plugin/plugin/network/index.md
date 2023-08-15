---
title: NetworkPlugin
category:
  - Plugin
tag:
  - NetworkPlugin
---

网络相关的插件；
接口继承与[BaseEvent](../../interface/base-event/index.md)

```js
import { networkPlugin } from "@plaoc/plugin";
```

## 属性

  - app_kit

    属性是用来保存监听器相关的对象；
    属性值的类型是[Tkit](../../interface/tkit/index.md)对象；

## 方法

  - [NetworkPlugin.onLine()](./on-line.md)

    查询网路是否在线；


  - [NetworkPlugin.getStatus()](./get-status.md)

    
    获取网络的状态；

    

## 事件

  - onLine

    当浏览器能够访问网络的时候触发；

  - offLine

    当浏览器失去网络的时候触发

  - change

    当前浏览器能够访问网络和失去网络的时候触发；

## 平台兼容性

| 属性/方法/事件         | Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| onLine               | ✅      | ✅  | ✅          | X       |
| getStatus            | ✅      | ✅  | ✅          | X       |
| event onLine         | ✅      | ✅  | ✅          | X       |
| event offLine        | ✅      | ✅  | ✅          | X       |
| event change         | ✅      | ✅  | ✅          | X       |

## 相关链接

[Plaoc](../../)


