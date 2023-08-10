---
title: FetchEvent
category:
  - Interface
tag:
  - FetchEvent
---

继承与[Event](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)的对象；

```js
import { FetchEvent } from "@plaoc/plugin";
```

## 属性

  - plugin

    属性值是 [DwebServiceWorkerPlugin](../../plugin/dweb-service-worker/index.md)对象；

  - request

    属性值是 [Request](../../interface/request/index.md)对象；

  - clientId

    属性值是一个 string 或 null;


  - public_url

    属性值是 string, 或者是一个 resolve 兑现一个 string 的Promise对象；

## 方法

  - [FetchEvent.respondWith()](./respond-with.md)

    返回数据给发送方的方法；

## 事件

  - 无

## 示例
```js
import { FetchEvent } from "@plaoc/plugin";
const event = new FetchEvent("fetch", {
  request: toRequest(ipcRequest),
  clientId: ipcRequest.req_id.toString(),
});
```


## 平台兼容性

| 属性/方法/事件   | Android | IOS | Desktop-Dev | Desktop |
|:--------------:|:-------:|:---:|:-----------:|:-------:|
| plugin         | ✅      | ✅  | ✅           | X       |
| request        | ✅      | ✅  | ✅           | X       |
| clientId       | ✅      | ✅  | ✅           | X       |
| public_url     | ✅      | ✅  | ✅           | X       |
| respondWith    | ✅      | ✅  | ✅           | X       |
 

## 相关链接
[Interface](../index.md)


