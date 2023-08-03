---
title: UpdateControllerPlugin
category:
  - Plugin
tag:
  - UpdateControllerPlugin
---

更新App的控制插件;但是这个插件不能直接访问；
在[DwebServiceWorkerPlugin]()插件中会访问UpdateControllerPlugin插件；

```js
import { dwebServiceWorkerPlugin } from "@plaoc/plugin";
const updateControllerPlugin = dwebServiceWorkerPlugin.updateController
```

## 属性

  - 无

## 方法

  - [UpdateControllerPlugin.download()]()

    下载App

  - [UpdateControllerPlugin.pause()]()

    暂停下载


  - [UpdateControllerPlugin.resume()]()

    重起下载

  - [UpdateControllerPlugin.cancel()]()

    取消下载

## 事件

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| download     | ✅      | ✅   | ✅           | X      |
| pause        | ✅      | ✅   | ✅           | X      |
| resume       | ✅      | ✅   | ✅           | X      |
| cancel       | ✅      | ✅   | ✅           | X      |

## 相关链接

[Plaoc](../index.md)


