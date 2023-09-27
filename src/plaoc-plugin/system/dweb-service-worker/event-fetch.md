---
title: event fetch
category:
  - Event
tag:
  - dwebServiceWorker
  - fetch event
---

`fetch` 事件用来接收其他 app 发送过来的消息。要保证 app 能接收到消息，请在 app 初始化的时候就注册这个事件。

在添加的监听器中，通过 `respondWith` 返回数据给发送方。

## 示例

```js
import { dwebServiceWorker } from "@plaoc/plugins";
dwebServiceWorker.addEventListener(
  "fetch",
  async (event: ServiceWorkerFetchEvent) => {
    const data = await event.getRemoteManifest();
    console.log("Dweb Service Worker fetch!", data);
    const url = new URL(event.request.url);
    if (url.pathname.endsWith("/say/hi")) {
      const hiMessage = url.searchParams.get("message");
      console.log(`收到:${hiMessage}`);
      // 发送消息回去
      return event.respondWith(`我是plaoc-html-demo 我接收到了消息`);
    }
    return event.respondWith("Not match any routes");
  }
);
```

## 事件参数 `ServiceWorkerFetchEvent`

接收事件的类型为`ServiceWorkerFetchEvent`,提供查询连接者信息和返回内容的功能。

### getRemoteManifest

获取连接者的信息。

#### 函数签名

```ts
getRemoteManifest(): Promise<$JmmAppInstallManifest>
```

#### 返回值

- [JmmAppInstallManifest](./interface/$JmmAppInstallManifest.md)

### respondWith

这个函数负责返回消息给发送者。

#### 函数签名

```ts
respondWith(body?: BodyInit | null, init?: ResponseInit): Promise<void>
```

#### 参数

- [BodyInit](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response) | null

一些基础的 response参数对象。

```ts
type BodyInit = ReadableStream | XMLHttpRequestBodyInit;
type XMLHttpRequestBodyInit =
  | Blob
  | BufferSource
  | FormData
  | URLSearchParams
  | string;
```

- [ResponseInit](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response)

fetch API 的 ResponseInit 对象，可以传递 `header`,`status`,`statusText`。

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|  event fetch   |   ✅    | ✅  |   ✅    |

## 相关链接

[DwebServiceWorker](./index.md)
