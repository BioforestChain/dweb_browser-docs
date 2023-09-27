---
title: NetworkPlugin.onLine()
category:
  - Plugin
tag:
  - NetworkPlugin
  - onLine
---

查询网路是否在线；

```js
 NetworkPlugin.onLine()
```

## 参数

  - 无

## 返回值

  返回一个boolean; 如果能够访问网络的时候返回的是true;
  如果失去网络连接返回的false;

## 示例
```js
import { networkPlugin } from "@plaoc/plugins";
const isOnline = networkPlugin.onLine();
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| onLine     | ✅       | ✅  | ✅          | X       |

## 相关链接

[NetworkPlugin](./index.md)


