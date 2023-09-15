---
title: FetchEvent.respondWith()
category:
  - Interface
tag:
  - FetchEvent
  - respondWith 
---

返回数据给发送方的方法；

```js
FetchEvent.respondWith(response)
```

## 参数

  - response

    返回的数据体
    合法的数据类型如下

    `Blob`

    `ReadableStream<Uint8Array>`

    `string`

## 返回值

  返回一个Promise对象;

## 示例
```js
import { dwebServiceWorker } from "@plaoc/plugins";
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
| respondWith  | ✅       | ✅  | ✅          | X       |

## 相关链接
[FetchEvent](./index.md)


