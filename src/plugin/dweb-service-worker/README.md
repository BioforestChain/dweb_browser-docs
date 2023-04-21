---
title: DwebServiceWorker
category:
  - Plugin
tag:
  - Plugin
---

模拟 ServiceWorker 并且提供应用升级控制器和应用控制功能。

> 以 vue3 为例,完整代码查看:[DwebServiceWorker](https://github.com/BioforestChain/dweb_browser/blob/main/plugins/demo/src/pages/DwebServiceWorker.vue)

## dweb-service-worker

提供 app 的控制和 api 的拦截。

### 包含监听事件`updatefound`,`fetch`,`onFetch`。

#### `updatefound`（暂未开放）

- 作用：

  应用更新会触发的事件。

- 调用例子：

```ts
sw.addEventListener("updatefound", (event) => {
  console.log("Dweb Service Worker update found!", event);
});
```

#### `fetch` （暂未开放）

- 作用：

  跟 ServiceWorker 的 fetch 事件一致，提供网络拦截功能。

- 调用例子：

```ts
sw.addEventListener("fetch", async (event) => {
  console.log("Dweb Service Worker fetch!", event.clientId);
  const response = await fetch(event.request);
  console.log("Dweb Service Worker fetch response=>", response);
  return event.respondWith(response);
});
```

#### `onFetch` （暂未开放）

- 作用：

  别人发送给 app 的请求会触发这个事件。

- 调用例子：

```ts
sw.addEventListener("onFetch", (event: OnFetchEvent) => {
  console.log("Dweb Service Worker onFetch!", event);
});
```

### 包含的控制事件`close`,`restart`,`update`。

#### `update`

- 作用：

  拿到升级控制器。

- 调用签名：

```ts
update(): UpdateControllerPlugin
```

#### `close`

- 作用：

  控制 APP 的关闭，仅关闭前端。

- 调用签名：

```ts
  async close(): Promise<boolean>
```

#### `restart`

- 作用：

  控制 APP 的重启，这个操作会伴随着前后端的重启。

- 调用签名：

```ts
  async restart(): Promise<boolean>
```

## update-contoller

下载控制器，由`dweb-service-worker获取`。

### 包含监听事件`start`,`end`,`progress`,`cancel`。

#### `start`

- 作用：

下载开始时触发。

- 调用例子：

```ts
updateContoller.addEventListener("end", (event: Event) => {
  console.log("Dweb Service Worker updateContoller end =>", event);
});
```

#### `end`

- 作用：

  下载结束时触发。

- 调用例子：

```ts
updateContoller.addEventListener("end", (event: Event) => {
  console.log("Dweb Service Worker updateContoller end =>", event);
});
```

#### `progress`

- 作用：

  下载事件的进度条回调，返回值范围为 0 ~ 100。

- 调用例子：

```ts
const progress = ref(0);
updateContoller.addEventListener("progress", (progressRate: string) => {
  progress.value = parseFloat(progressRate);
  console.log(
    "Dweb Service Worker updateContoller progress =>",
    progressRate,
    parseFloat(progressRate)
  );
});
```

#### `cancel`

- 作用：

  取消下载时触发。

- 调用例子：

```ts
updateContoller.addEventListener("cancel", (event: Event) => {
  console.log("Dweb Service Worker updateContoller cancel =>", event);
});
```

### 包含的控制事件`pause`,`resume`,`cancel`,`download`。

#### `pause`

- 作用：

  暂停下载操作。

- 调用签名：

```ts
  async pause(): Promise<boolean>
```

#### `resume`

- 作用：

  恢复下载和重下的控制函数，

- 调用签名：

```ts
  async resume(): Promise<boolean>
```

#### `cancel`

- 作用：

  取消下载

- 调用签名：

```ts
  async cancel(): Promise<boolean>
```

#### `download`

- 作用：

  触发自更新功能。

- 调用签名：

```ts
  async download(metadataUrl: string): Promise<BFSMetaData>
```

- 参数说明：

  - metadataUrl

    - 数据类型

      `string`

    - 参数的作用：

      bfs-metadata.json 的 url 地址,类似[bfs-metadata](https://shop.plaoc.com/bfs-metadata.json)

    - 备注说明：

      - BFSMetaData 返回值也是 bfs-metadata.json 的内容。想改成 boolean 值。

      - 未来的方案可能是在 dns.sys.dweb 中提供一个 /membership-broadcast 服务，用来做 类似 UDP 的局域广播，目的是将各种模块之间的协作抽象成某种协议，再通过 membership 这层来广播这些协议数据
