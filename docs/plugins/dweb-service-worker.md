# dweb-service-worker

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip 介绍：
app 通信插件，复制 app 消息的发送和接收。并且可以控制应用重启和关闭。
:::

- [dweb-service-worker](#dweb-service-worker)
  - [Method](#method)
    - [`close`](#close)
    - [`restart`](#restart)
    - [`has`](#has)
  - [`应用间通信`](#应用间通信)
    - [发送消息](#发送消息)
    - [`接收消息`](#接收消息)
      - [`getRemoteManifest`](#getremotemanifest)
      - [respondWith](#respondwith)
  - [Usage](#usage)

## Method

### `close`

**_关闭 app_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.close();
//                      ^?
```

### `restart`

**_重启 app_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.restart();
//                      ^?
```

### `has`

**_查看应用是否安装_**

这里需要传递的是 app 的 ID。

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.has("game.www.bfchain.org.dweb");
//                      ^?
```

## `应用间通信`

### 发送消息

**_发送 request 请求跟其他 app 进行互相通信_**

第二个参数跟 fetch 的`ReuqestInit` 参数类似，并且可以携带是否激活对方页面的参数。

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.fetch(`file://my.test.dweb/say/hi?message="xxx"`, {
  activate: false, // 是否激活对方应用界面
  search: {
    data: "mydata", // 携带消息，也可以在url中携带
  },
});
```

- `activate`

是否激活对方 app 页面页面。

- `search`

封装的一个`searchParams` 包装对象，可以更清楚的传递参数。

### `接收消息`

`fetch`事件将接收所有发向自己的外部消息，事件的格式为`ServiceWorkerFetchEvent`。

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
dwebServiceWorker.addEventListener("fetch", async (event) => {
  console.log("app fetch", event);
  console.log("谁叫我？=>", await event.getRemoteManifest());
  return event.respondWith(`12345678`); // 回复给对方消息
});
```

#### `getRemoteManifest`

**_获取发送者的配置信息_**

```ts
async getRemoteManifest(): Promise<$MicroModuleManifest>
```

#### respondWith

**_回复消息给发送者_**

```ts
async respondWith(body?: BodyInit | null, init?: ResponseInit)
```

## Usage

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
import { dwebServiceWorker } from "@plaoc/plugins";

const message = ref("这里显示收到的消息");
const send = ref("这里写发送的消息");
// 向desktop.dweb.waterbang.top.dweb 发送消息
const sayHi = async () => {
  const response = await dwebServiceWorker.fetch(
    `file://plaoc.html.demo.dweb/say/hi?message=${send.value}`,
    {
      search: {
        data: "xx",
      },
      method: "POST",
      body: new Blob([`{"xxx":${send.value}}`], { type: "application/json" }),
    }
  );
  message.value = await response.text();
  console.log("sayHi return => ", message.value);
};
// 接收消息
dwebServiceWorker.addEventListener("fetch", async (event) => {
  console.log("Dweb Service Worker fetch!", event);
  console.log("xxxx=>", await event.getRemoteManifest());
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
  return event.respondWith(`Not match any routes:${url.pathname}`);
});
</script>
<template>
  <button @click="sayHi">say hi</button>
</template>
```
