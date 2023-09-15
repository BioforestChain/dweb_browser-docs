---
title: UpdateControllerPlugin
category:
  - Plugin
tag:
  - UpdateControllerPlugin
---

更新App的控制插件;但是这个插件不能直接访问；
在[dwebServiceWorker](../dweb-service-worker/index.md)插件中会访问UpdateControllerPlugin插件；

```js
import { updateControllerPlugin } from "@plaoc/plugins";

```

## 属性

  - 无

## 方法

  - [UpdateControllerPlugin.download()](./download.md)

    下载App

  - [UpdateControllerPlugin.pause()](./pause.md)

    暂停下载


  - [UpdateControllerPlugin.resume()](./resume.md)

    重起下载

  - [UpdateControllerPlugin.cancel()](./cancel.md)

    取消下载

  - [UpdateControllerPlugin.addEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

    添加事件监听器

  - [UpdateControllerPlugin.removeEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener)

    移除事件监听器；

## 事件

  任意事件；

  预定义事件包括：

  - `start`

    开始下载
    传递一个 Event 对象给事件监听器；

  - `end`

    下载结束
    传递一个 Event 对象给事件监听器；

  - `progress`

    下载的进度有更新了；
    传递一个进度比例的字符串给事件监听器

  - `cancel`

    取消下载
    传递一个 Event 对象给事件监听器；

## 平台兼容性

| 属性/方法/事件          | Android | IOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| download              | ✅      | ✅   | ✅           | X      |
| pause                 | ✅      | ✅   | ✅           | X      |
| resume                | ✅      | ✅   | ✅           | X      |
| cancel                | ✅      | ✅   | ✅           | X      |
| addEventListener      | ✅      | ✅   | ✅           | X      |
| removeEventListener   | ✅      | ✅   | ✅           | X      |
| event start           | ✅      | ✅   | ✅           | X      |
| event end             | ✅      | ✅   | ✅           | X      |
| event progress        | ✅      | ✅   | ✅           | X      |
| event cancel          | ✅      | ✅   | ✅           | X      |

## 相关链接

[Plaoc](../../)


