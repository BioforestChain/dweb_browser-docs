---
title: DwebServiceWorker
category:
  - Shim
tag:
  - DwebServiceWorker
---

模拟 ServiceWorker 并且提供应用升级控制器和应用控制功能。
提供 app 的控制和 api 的拦截。
这是一个纯粹的 Web 应用相互通讯的机制，可以实现本地不同 app 之间，消息的收发。
继承与 [BaseEvent](../../interface/base-event/index.md);

```js
import { dwebServiceWorker } from "@plaoc/plugin";
```

## 属性

  - plugin

    属性值是 [DwebServiceWorkerPlugin](../../plugin/dweb-service-worker/index.md)对象

  - updateContoller

    属性值是 [UpdateController](../../interface/update-controller/index.md)对象；

  - externalFetch

    属性值是 [DwebServiceWorkerPlugin.externalFetch()](../../plugin/dweb-service-worker/external-fetch.md)方法


  - update

    属性值是 [UpdateController](../../interface/update-controller/index.md)对象；

  - close

    属性值是 [DwebServiceWorkerPlugin.close()](../../plugin/dweb-service-worker/close.md) 方法

  - restart

    属性值是 [DwebServiceWorkerPlugin.restart()](../../plugin/dweb-service-worker/restart.md) 方法；

## 方法

  - [addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

    添加事件监听器

  - [removeEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener)

    移除事件监听器

## 事件

  支持任意时间，以下是预定义事件；

  - ["fetch"](./event-fetch.md)

    该事件负责处理别人发送来的消息，然后通过 respondWith 返回数据回去。
    在这里可以通过匹配路由，去提供不同的功能给别的 app，形成互联。

  
  - "pause"

    应用暂停会触发被触发；传递一个 Event 给处理器；

  - "resume"

    应用恢复到前台会被触发；传递一个 Event 给处理器；

  - "updatefound"

    更新或重启的时候触发；传递一个 Event 给处理器；

## 示例
```js
import { dwebServiceWorker } from "@plaoc/plugin";
dwebServiceWorker.addEventListener('fetch', async (fetchEvent) => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith("/say/hi")) {
    // message 是消息内容
    const message = url.searchParams.get("message");
    // 发送消息回去
    return event.respondWith(`match`);
  }
  return event.respondWith("Not match any routes");
}) 
```

## 平台兼容性

| 属性/方法/事件        | Android | IOS | Desktop-Dev | Desktop |
|:-------------------:|:-------:|:---:|:-----------:|:-------:|
| plugin              | ✅      | ✅  | ✅          | X       |
| updateContoller     | ✅      | ✅  | ✅          | X       |
| externalFetch       | ✅      | ✅  | ✅          | X       |
| update              | ✅      | ✅  | ✅          | X       |
| close               | ✅      | ✅  | ✅          | X       |
| restart             | ✅      | ✅  | ✅          | X       |
| addEventListener    | ✅      | ✅  | ✅          | X       |
| removeEventListener | ✅      | ✅  | ✅          | X       |
| event fetch         | ✅      | ✅  | ✅          | X       |
| event pause         | ✅      | ✅  | ✅          | X       |
| event resume        | ✅      | ✅  | ✅          | X       |
| event updatefound   | ✅      | ✅  | ✅          | X       |

## 相关链接

[Shim](../index.md)


