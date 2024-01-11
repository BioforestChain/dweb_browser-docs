---
title: dwebServiceWorker.externalFetch()
category:
  - Plugin
tag:
  - dwebServiceWorker
  - externalFetch
---

同其他 app 通信的方法,通过第一个参数传递 MMID,即声明想跟谁通信。

第二个和第三个参数，都是构造请求使用。

`externalFetch` 一般和 `fetch` 事件协同工作，前者发送消息，后者接收消息。具体查看 [fetchEvent](./event-fetch.md)

## 示例

```js
import { dwebServiceWorker } from "@plaoc/plugins";
const base = new URL(document.baseURI);
const url = new URL("/say/hi", base.origin);
url.searchParams.set("message", "hi");

const res = await dwebServiceWorker.externalFetch(
  `game.dweb.waterbang.top.dweb`, // 跟谁通信
  url
);
console.log("收到回应消息 => ", await res.text());
```

## 函数签名

```js
externalFetch(mmid: $MMID, input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>
```

### 参数

- mmid

  其他 app 的标识符；
  参数值是一个[$MMID](../../interface/mmid/index.md)类型的对象；

- [RequestInfo](https://developer.mozilla.org/en-US/docs/Web/API/Request) | [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)

Web API 的 Request 对象。

```ts
type RequestInfo = Request | string;
```

- [RequestInit](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch) | undefined

`fetch` API 里的 init 对象。

### 返回值

- [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
| externalFetch  |   ✅    | ✅  |   ✅    |

## 相关链接

[dwebServiceWorker](../index.md)
