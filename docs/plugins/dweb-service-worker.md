---
outline: deep
---

# dweb-service-worker

::: tip 介绍：
dweb 服务插件
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `close`
  
  **_关闭前端_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.close();
//                      ^?
```

- `restart`

  **_重启前后端_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.restart();
//                      ^?
```

- `canOpenUrl`

  **_查看应用是否安装_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.canOpenUrl("game.www.bfchain.org.dweb");
//                      ^?
```

- `externalFetch`

  **_跟外部app通信_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
// @noErrors
await dwebServiceWorker.externalFetch("game.www.bfchain.org.dweb", input: RequestInfo | URL, init?: RequestInit | undefined);
//                      ^?
```

- `addEventListener`

  **_事件监听_**

  - `pause`

    **_暂停前端_**

    ```ts twoslash
    import { dwebServiceWorker } from "@plaoc/plugins";
    dwebServiceWorker.addEventListener("pause", (event) => {
      console.log("app pause", event);
    });
    ```

  - `resume`

    **_恢复前端_**

    ```ts twoslash
    import { dwebServiceWorker } from "@plaoc/plugins";
    dwebServiceWorker.addEventListener("resume", (event) => {
      console.log("app resume", event);
    });
    ```

  - `fetch`

    **_接收外部消息_**

    ```ts twoslash
    import { dwebServiceWorker } from "@plaoc/plugins";
    dwebServiceWorker.addEventListener("fetch", (event) => {
      console.log("app fetch", event);
    });
    ```

## Usage

```vue {10,17}
<script setup lang="ts">
import { ref } from "vue";
import { dwebServiceWorker } from "@plaoc/plugins";

const message = ref("这里显示收到的消息");

const sayHi = async () => {
  const url = new URL("/say/hi", document.baseURI);
  url.searchParams.set("message", "今晚吃螃🦀️蟹吗？");
  const response = await dwebServiceWorker.externalFetch(`plaoc.html.demo.dweb`, url, {
    method: "POST",
    body: new Blob([`{"xxx":"哈哈哈"}`], { type: "application/json" }),
  });
  message.value = await response.text();
  console.log("sayHi return => ", message.value);
};
dwebServiceWorker.addEventListener("fetch", async (event) => {
  console.log(await event.getRemoteManifest());
  const url = new URL(event.request.url);
  if (url.pathname.endsWith("/say/hi")) {
    const hiMessage = url.searchParams.get("message");
    if (hiMessage) {
      message.value = hiMessage;
    }
    // 发送消息回去
    return event.respondWith(`吃，再来两斤二锅头。`);
  }

  return event.respondWith("Not match any routes");
});
</script>
<template>
  <button @click="sayHi">say hi</button>
</template>
```
