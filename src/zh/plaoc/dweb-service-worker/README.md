---
title: DwebServiceWorker
category:
  - Plugin
tag:
  - Plugin
---

模拟 ServiceWorker 并且提供应用升级控制器和应用控制功能。

> 以 vue3 为例,完整代码查看:[DwebServiceWorker](https://github.com/BioforestChain/dweb_browser/blob/main/example/vue3/src/pages/DwebServiceWorker.vue)

## dweb-service-worker

提供 app 的控制和 api 的拦截。

### 应用间相互通信

这是一个纯粹的 Web 应用相互通讯的机制，可以实现本地不同 app 之间，消息的收发。

#### `externalFetch`

通过该方法发送消息。

- 调用例子：

```ts
const sayHi = async () => {
  const result = await sw.externalFetch(`desktop.dweb.waterbang.top.dweb`, {
    pathname: "/say/hi",
    search: {
      message: "今晚吃螃🦀️蟹吗？",
    },
  });
  console.log("sayHi return => ", await result.text());
};
```

- 调用签名：

```ts
async externalFetch(hostname: $MMID,init:$ExterRequestWithBaseInit):Promise<response>
```

| Param          | Type                                                                           | Description                                                                                                           |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **`hostname`** | <code><a href="#mmid">$MMID</a></code>                                         | app 的 id，又称为 MMID                                                                                                |
| **`init`**     | <code><a href="#exterrequestwithbaseinit">$ExterRequestWithBaseInit</a></code> | 继承于[RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request),并且添加了`pathname`,`search`等 |

#### `fetch`

该事件负责处理别人发送来的消息，然后通过 respondWith 返回数据回去。
在这里可以通过匹配路由，去提供不同的功能给别的 app，形成互联。

- 调用例子：

```ts
dwebServiceWorker.addEventListener("fetch", async (event: FetchEvent) => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith("/say/hi")) {
    const hiMessage = url.searchParams.get("message");
    console.log(`收到:${hiMessage}`);
    if (hiMessage) {
      message.value = hiMessage;
    }
    // 发送消息回去
    return event.respondWith(`吃，再来两斤二锅头。`);
  }
  return event.respondWith("Not match any routes");
});
```

- 调用签名：

```ts
async respondWith(response: Blob | ReadableStream<Uint8Array> | string):Promise<response>
```

---

### Event `pause`,`resume`

::: warning
这些事件如果要保证全局触发，需要在 app 的入口引入事件监听。
:::

#### `pause`

应用暂停会触发的事件。

- 调用例子：

```ts
dwebServiceWorker.addEventListener("pause", (event) => {
  console.log("app暂停🍋", event);
});
```

#### `resume`

应用恢复到前台会触发的事件。

- 调用例子：

```ts
dwebServiceWorker.addEventListener("resume", (event) => {
  console.log("app 恢复🍉", event);
});
```

<!-- #### `updatefound`（暂未开放）

应用更新会触发的事件。

- 调用例子：

```ts
dwebServiceWorker.addEventListener("updatefound", (event) => {
  console.log("Dweb Service Worker update found!", event);
});
``` -->

---

### API `close`,`restart`,`update`

#### `update`

开发者调用该函数，拿到升级控制器，进行下一步的升级控制等事件操作。

- 调用签名：

```ts
update(): UpdateControllerPlugin
```

**Returns:** <code><a href="#updatecontrollerplugin">UpdateControllerPlugin</a></code>

#### `close`

控制 APP 的关闭，仅关闭前端。

- 调用签名：

```ts
  async close(): Promise<boolean>
```

#### `restart`

控制 APP 的重启，这个操作会伴随着前后端的重启。

- 调用签名：

```ts
  async restart(): Promise<boolean>
```

## UpdateControllerPlugin

下载控制器，由`dweb-service-worker获取`。

### Event `start`,`end`,`progress`,`cancel`

#### `start`

下载开始时触发。

- 调用例子：

```ts
updateContoller.addEventListener("end", (event: Event) => {
  console.log("Dweb Service Worker updateContoller end =>", event);
});
```

#### `end`

下载结束时触发。

- 调用例子：

```ts
updateContoller.addEventListener("end", (event: Event) => {
  console.log("Dweb Service Worker updateContoller end =>", event);
});
```

#### `progress`

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

取消下载时触发。

- 调用例子：

```ts
updateContoller.addEventListener("cancel", (event: Event) => {
  console.log("Dweb Service Worker updateContoller cancel =>", event);
});
```

---

### API `pause`,`resume`,`cancel`,`download`

#### `pause`

暂停下载操作。

- 调用签名：

```ts
  async pause(): Promise<boolean>
```

#### `resume`

恢复下载和重下的控制函数，

- 调用签名：

```ts
  async resume(): Promise<boolean>
```

#### `cancel`

取消下载

- 调用签名：

```ts
  async cancel(): Promise<boolean>
```

#### `download`

触发自更新功能。

- 调用签名：

```ts
  async download(metadataUrl: string): Promise<BFSMetaData>
```

| Param             | Type                | Description                                                                        |
| ----------------- | ------------------- | ---------------------------------------------------------------------------------- |
| **`metadataUrl`** | <code>string</code> | metadata.json 的 url 地址,类似[bfs-metadata](https://shop.plaoc.com/metadata.json) |

**Returns:** <code>Promise&lt;<a href="#bfsmetadata">BFSMetaData</a>&gt;</code>

## Interfaces

### $MMID

| Prop        | Type                        | Description                                                         | Since |
| ----------- | --------------------------- | ------------------------------------------------------------------- | ----- |
| **`$MMID`** | <code>${string}.dweb</code> | 应用的 id,是以.dweb 结尾的字符串，类似<code>_${string}_.dweb</code> | 1.0.0 |

### $ExterRequestWithBaseInit

| Prop           | Type                | Description                                | Since |
| -------------- | ------------------- | ------------------------------------------ | ----- |
| **`pathname`** | <code>string</code> | 应用请求的路径                             | 1.0.0 |
| **`search`**   | <code>object</code> | 等同于 URL 对象的 search 用来传递 get 参数 | 1.0.0 |

### BFSMetaData

FBS APP 的数据格式，类似类似[bfs-metadata](https://shop.plaoc.com/metadata.json)。规定了一个 app 的所有配置信息。

> - BFSMetaData 返回值也是 metadata.json 的内容。想改成 boolean 值。
> - 未来的方案可能是在 dns.sys.dweb 中提供一个 /membership-broadcast 服务，用来做 类似 UDP 的局域广播，目的是将各种模块之间的协作抽象成某种协议，再通过 membership 这层来广播这些协议数据

| Prop               | Type                                              | Description                                                         | Since |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------------------- | ----- |
| **`id`**           | <code><a href="#mmid">$MMID</a></code>            | 应用的 id,是以.dweb 结尾的字符串，类似<code>_${string}_.dweb</code> | 1.0.0 |
| **`server`**       | <code><a href="#mainserver">MainServer</a></code> | 打开应用地址                                                        | 1.0.0 |
| **`name`**         | <code>string</code>                               | 应用名称                                                            | 1.0.0 |
| **`short_name`**   | <code>string</code>                               | 应用副标题                                                          | 1.0.0 |
| **`icon`**         | <code>string</code>                               | 应用图标                                                            | 1.0.0 |
| **`images`**       | <code>string</code>                               | 应用截图,会展示在下载界面。                                         | 1.0.0 |
| **`introduction`** | <code>string</code>                               | 应用描述，会出现在下载界面                                          | 1.0.0 |
| **`author`**       | <code>string[]</code>                             | 开发者，作者                                                        | 1.0.0 |
| **`version`**      | <code>string</code>                               | 应用版本                                                            | 1.0.0 |
| **`new_feature`**  | <code>string</code>                               | 新功能，新特性                                                      | 1.0.0 |
| **`keywords`**     | <code>string[]</code>                             | 关键词                                                              | 1.0.0 |
| **`home`**         | <code>string</code>                               | 首页地址                                                            | 1.0.0 |
| **`bundle_size`**  | <code>string</code>                               | 应用大小                                                            | 1.0.0 |
| **`bundle_url`**   | <code>string</code>                               | 下载应用地址                                                        | 1.0.0 |
| **`bundle_hash`**  | <code>string</code>                               | 应用文件 hash                                                       | 1.0.0 |
| **`permissions`**  | <code>string[]</code>                             | 权限列表                                                            | 1.0.0 |
| **`plugins`**      | <code>string[]</code>                             | 使用的插件                                                          | 1.0.0 |
| **`releaseDate`**  | <code>string</code>                               | 发布时间                                                            | 1.0.0 |

#### MainServer

app 主服务配置项，主要配置应用如果文件地址。

| Prop        | Type                | Description                         | Since |
| ----------- | ------------------- | ----------------------------------- | ----- |
| **`root`**  | <code>string</code> | 应用文件夹的目录，相对于 app 根目录 | 1.0.0 |
| **`entry`** | <code>string</code> | 应用入口文件地址，相对于 app 根目录 | 1.0.0 |
