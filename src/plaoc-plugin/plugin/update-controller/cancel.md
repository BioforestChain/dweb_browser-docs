---
title: UpdateControllerPlugin.cancel()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - cancel
---

取消下载App

```js
UpdateControllerPlugin.cancel()
```

## 参数

  - 无

## 返回值

  返回一个Promise,resolve兑现一个boolean

## 示例
```js
import { dwebServiceWorker } from "@plaoc/plugins"
dwebServiceWorker.updateController.cancel()
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| cancel        | ✅       | ✅  | ✅          | X       |

## 相关链接

[UpdateControllerPlugin](./index.md)


