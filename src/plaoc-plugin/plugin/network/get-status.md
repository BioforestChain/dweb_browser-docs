---
title: NetworkPlugin.getStatus()
category:
  - Plugin
tag:
  - NetworkPlugin
  - getStatus
---

获取网络的状态；

```js
NetworkPlugin.getStatus()
```

## 参数

  - 无

## 返回值

  返回一个Promise，resolve兑现[ConnectionStatus](../../interface/connection-status/index.md)对象；

## 示例
```js
import { networkPlugin } from "@plaoc/plugin";
const status = networkPlugin.getStatus();
```



## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getStatus    | ✅       | ✅  | ✅          | X       |

## 相关链接


[NetworkPlugin](./index.md)


