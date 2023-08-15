---
title: DwebServiceWorkerPlugin.restart()
category:
  - Plugin
tag:
  - DwebServiceWorkerPlugin
  - restart
---

重启应用的前后端；

```js
DwebServiceWorkerPlugin.restart()
```

## 参数

  - 无

## 返回值

  返回一个Promise,resolve兑现一个boolean;

## 示例
```js
import  { dwebServiceWorkerPlugin } from "@plaoc/plugin";
dwebServiceWorkerPlugin.restart()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| restart      | ✅       | ✅  | ✅          | X       |

## 相关链接
[DwebServiceWorkerPlugin](../index.md)


