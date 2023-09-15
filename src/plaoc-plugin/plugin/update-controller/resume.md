---
title: UpdateControllerPlugin.resume()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - resume
---

继续下载App

```js
UpdateControllerPlugin.resume()
```

## 参数

  - 无

## 返回值

  返回一个Promise,resolve兑现一个boolean

## 示例
```js
import { dwebServiceWorker } from "@plaoc/plugins"
dwebServiceWorker.updateController.resume()
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| resume        | ✅       | ✅  | ✅          | X       |

## 相关链接

[UpdateControllerPlugin](./index.md)


