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

### Event `pause`,`resume`,`updatefound`,`fetch`,`onFetch`

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

#### `updatefound`（暂未开放）

应用更新会触发的事件。

- 调用例子：

```ts
dwebServiceWorker.addEventListener("updatefound", (event) => {
  console.log("Dweb Service Worker update found!", event);
});
```

#### `fetch`

跟 ServiceWorker 的 fetch 事件一致，提供网络拦截功能。

- 调用例子：

```ts
dwebServiceWorker.addEventListener("fetch", async (event) => {
  console.log("Dweb Service Worker fetch!", event.clientId);
  const response = await fetch(event.request);
  console.log("Dweb Service Worker fetch response=>", response);
  return event.respondWith(response);
});
```

#### `onFetch`

别人发送给 app 的请求会触发这个事件。

- 调用例子：

```ts
sw.addEventListener("onFetch", (event: OnFetchEvent) => {
  console.log("Dweb Service Worker onFetch!", event);
});
```

**Callback Parameter:** <code><a href="#onfetchevent">OnFetchEvent</a></code>

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

| Param             | Type                | Description                                                                                |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| **`metadataUrl`** | <code>string</code> | bfs-metadata.json 的 url 地址,类似[bfs-metadata](https://shop.plaoc.com/bfs-metadata.json) |

**Returns:** <code>Promise&lt;<a href="#bfsmetadata">BFSMetaData</a>&gt;</code>

## Interfaces

### BFSMetaData

FBS APP 的数据格式，类似类似[bfs-metadata](https://shop.plaoc.com/bfs-metadata.json)。规定了一个 app 的所有配置信息。

> - BFSMetaData 返回值也是 bfs-metadata.json 的内容。想改成 boolean 值。
> - 未来的方案可能是在 dns.sys.dweb 中提供一个 /membership-broadcast 服务，用来做 类似 UDP 的局域广播，目的是将各种模块之间的协作抽象成某种协议，再通过 membership 这层来广播这些协议数据

| Prop                   | Type                                                          | Description                                                         | Since |
| ---------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------- | ----- |
| **`id`**               | <code>string</code>                                           | 应用的 id,是以.dweb 结尾的字符串，类似<code>_${string}_.dweb</code> | 1.0.0 |
| **`server`**           | <code><a href="#mainserver">MainServer</a></code>             | 打开应用地址                                                        | 1.0.0 |
| **`title`**            | <code>string</code>                                           | 应用名称                                                            | 1.0.0 |
| **`subtitle`**         | <code>string</code>                                           | 应用副标题                                                          | 1.0.0 |
| **`icon`**             | <code>string</code>                                           | 应用图标                                                            | 1.0.0 |
| **`downloadUrl`**      | <code>string</code>                                           | 下载应用地址                                                        | 1.0.0 |
| **`images`**           | <code>string</code>                                           | 应用截图,会展示在下载界面。                                         | 1.0.0 |
| **`introduction`**     | <code>string</code>                                           | 应用描述，会出现在下载界面                                          | 1.0.0 |
| **`splashScreen`**     | <code><a href="#splashscreen">SplashScreen</a></code>         | 开屏动画配置                                                        | 1.0.0 |
| **`author`**           | <code>string[]</code>                                         | 开发者，作者                                                        | 1.0.0 |
| **`version`**          | <code>string</code>                                           | 应用版本                                                            | 1.0.0 |
| **`keywords`**         | <code>string[]</code>                                         | 关键词                                                              | 1.0.0 |
| **`home`**             | <code>string</code>                                           | 首页地址                                                            | 1.0.0 |
| **`size`**             | <code>string</code>                                           | 应用大小                                                            | 1.0.0 |
| **`fileHash`**         | <code>string</code>                                           | 应用文件 hash                                                       | 1.0.0 |
| **`permissions`**      | <code>string[]</code>                                         | 权限列表                                                            | 1.0.0 |
| **`plugins`**          | <code>string[]</code>                                         | 使用的插件                                                          | 1.0.0 |
| **`releaseDate`**      | <code>string</code>                                           | 发布时间                                                            | 1.0.0 |
| **`staticWebServers`** | <code><a href="#staticwebserver">StaticWebServer[]</a></code> | 静态网络服务                                                        | 1.0.0 |
| **`openWebViewList`**  | <code><a href="#openwebview">OpenWebView[]</a></code>         | 应用启动时会打开的网页                                              | 1.0.0 |

#### MainServer

app 主服务配置项，主要配置应用如果文件地址。

| Prop        | Type                | Description                         | Since |
| ----------- | ------------------- | ----------------------------------- | ----- |
| **`root`**  | <code>string</code> | 应用文件夹的目录，相对于 app 根目录 | 1.0.0 |
| **`entry`** | <code>string</code> | 应用入口文件地址，相对于 app 根目录 | 1.0.0 |

#### SplashScreen

启动屏配置项。

| Prop        | Type                | Description                                   | Since |
| ----------- | ------------------- | --------------------------------------------- | ----- |
| **`entry`** | <code>string</code> | 启动屏页面地址，相对于 app 根目录或者远程地址 | 1.0.0 |

#### StaticWebServer

| Prop            | Type                | Description                         | Since |
| --------------- | ------------------- | ----------------------------------- | ----- |
| **`root`**      | <code>string</code> | 应用文件夹的目录，相对于 app 根目录 | 1.0.0 |
| **`entry`**     | <code>string</code> | 静态入口文件地址，相对于 app 根目录 | 1.0.0 |
| **`subdomain`** | <code>string</code> | 静态服务子域                        | 1.0.0 |
| **`port`**      | <code>number</code> | 静态服务端口                        | 1.0.0 |

#### OpenWebView

应用启动时会打开的网页要求 http/https 协议。它们会依此打开，越往后的层级越高

> TODO httpNMM 网关那边，遇到未知的请求，会等待一段时间，如果这段时间内这个域名被监听了，那么会将请求分发过去,
> 所以如果是 staticWebServers 定义的链接，那么自然而然地，页面会等到 staticWebServer 启动后得到响应，不会错过请求。

| Prop      | Type                | Description        | Since |
| --------- | ------------------- | ------------------ | ----- |
| **`url`** | <code>string</code> | 需要打开的网页地址 | 1.0.0 |

### OnFetchEvent

施工中 🚧

[OnFetchEvent](https://github.com/BioforestChain/dweb_browser/blob/main/plugins/src/components/dweb-service-worker/FetchEvent.ts)
