---
title: dwebServiceWorker.restart()
category:
  - Plugin
tag:
  - dwebServiceWorker
  - restart
---

重启应用的前后端；

```js
dwebServiceWorker.restart()
```

## 参数

  - 无

## 返回值

  返回一个Promise,resolve兑现一个boolean;

## 示例
```js
import  { dwebServiceWorker } from "@plaoc/plugins";
dwebServiceWorker.restart()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| restart      | ✅       | ✅  | ✅          | X       |

## 相关链接
[dwebServiceWorker](../index.md)


