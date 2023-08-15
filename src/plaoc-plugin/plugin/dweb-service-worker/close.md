---
title: DwebServiceWorkerPlugin.close()
category:
  - Plugin
tag:
  - DwebServiceWorkerPlugin
  - close
---

关闭应用的前端

```js
DwebServiceWorkerPlugin.close()
```

## 参数

  - 无

## 返回值

  返回一个Promise,resolve兑现一个boolean;

## 示例
```js
import  { dwebServiceWorkerPlugin } from "@plaoc/plugin";
dwebServiceWorkerPlugin.close()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| close        | ✅       | ✅  | ✅          | X       |

## 相关链接
[DwebServiceWorkerPlugin](../index.md)


