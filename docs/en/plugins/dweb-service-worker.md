---
outline: deep
---

# dweb-service-worker

<Badges name="@plaoc/plugins" />

::: tip intro:
dweb service worker plugin
:::

- [Reference](#reference)
  - [Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `close`
  
  **_close plaoc app frontend_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.close();
//                      ^?
```

- `restart`

  **_restart plaoc app frontend and backend_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.restart();
//                      ^?
```

- `canOpenUrl`

  **_Check if the app is installed_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.canOpenUrl("game.www.bfchain.org.dweb");
//                      ^?
```

- `externalFetch`

  **_Communicate with external apps_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
// @noErrors
await dwebServiceWorker.externalFetch("game.www.bfchain.org.dweb", input: RequestInfo | URL, init?: RequestInit | undefined);
//                      ^?
```

- `addEventListener`

  **_event listening_**

  - `pause`

    **_pause plaoc app frontend_**

    ```ts twoslash
    import { dwebServiceWorker } from "@plaoc/plugins";
    dwebServiceWorker.addEventListener("pause", (event) => {
      console.log("app pause", event);
    });
    ```

  - `resume`

    **_resume plaoc app frontend_**

    ```ts twoslash
    import { dwebServiceWorker } from "@plaoc/plugins";
    dwebServiceWorker.addEventListener("resume", (event) => {
      console.log("app resume", event);
    });
    ```

  - `fetch`

    **_receive external messages_**

    ```ts twoslash
    import { dwebServiceWorker } from "@plaoc/plugins";
    dwebServiceWorker.addEventListener("fetch", (event) => {
      console.log("app fetch", event);
    });
    ```

## Usage

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
import { dwebServiceWorker } from "@plaoc/plugins";

const message = ref("Received messages are displayed here");

const sayHi = async () => {
  const url = new URL("/say/hi", document.baseURI);
  url.searchParams.set("message", "Want to eat crab 🦀️crab tonight?");
  const response = await dwebServiceWorker.externalFetch(`plaoc.html.demo.dweb`, url, {
    method: "POST",
    body: new Blob([`{"xxx":"Hahaha"}`], { type: "application/json" }),
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
    return event.respondWith(`Eat, two more pounds of Erguotou.`);
  }

  return event.respondWith("Not match any routes");
});
</script>
<template>
  <button @click="sayHi">say hi</button>
</template>
```
