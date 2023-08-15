---
title: event fetch
category:
  - Shim
tag:
  - event
  - fetch
---

[DwebServiceWorker](./index.md)的 `fetch` 事件；
用来处理其他app发送过来的消息； 
在添加的监听器中，通过 参数 FetchEvent.respondWith 返回数据给发送方； 

```js
DwebServiceWorker.addEventListener('fetch', fetchEvent => {
  fetchEvent.responseWith(``)
})
```

## 监听器参数

  - fetchEvent

    参数值是一个[FetchEvent](../../interface/fetch-event/index.md)对象；

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

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| event fetch  | ✅      | ✅  | ✅          | X       |

## 相关链接

[DwebServiceWorker](./index.md)


