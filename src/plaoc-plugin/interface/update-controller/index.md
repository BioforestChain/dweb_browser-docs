---
title: UpdateController
category:
  - Interface
tag:
  - UpdateController
---

更新App的控制插件;继承与[BaseEvent](../../interface/base-event/index.md)接口；但是这个插件不能直接访问；
通过[DwebServiceWorker.updateContoller](../../shim/dweb-service-worker/index.md)属性值访问实例；


```js
import { dwebServiceWorker } from "@plaoc/plugin"
const updateController = dwebServiceWorker.updateContoller
```

## 属性

  - download

    下载App
    属性值是一个 [UpdateControllerPlugin.download()](../../plugin/update-controller/download.md) 方法

  - pause

    暂停下载
    属性值是一个 [UpdateControllerPlugin.pause()](../../plugin/update-controller/pause.md) 方法

  - resume

    重起下载
    属性值是一个 [UpdateControllerPlugin.resume()](../../plugin/update-controller/resume.md) 方法；

  - cancel

    取消下载
    属性值是一个 [UpdateControllerPlugin.cancel()](../../plugin/update-controller/cancel.md) 方法；

## 方法

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

## 示例
```js
import { dwebServiceWorker as sw } from "../plugin";
dwebServiceWorker.updateContoller.addEventListener("progress", progress => {
  console.log(parseFloat(progressRate))
})
```


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

[Interface](../index.md)


