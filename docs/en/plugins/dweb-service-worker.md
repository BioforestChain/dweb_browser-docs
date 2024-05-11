---
outline: deep
---

# dweb-service-worker

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

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
await dwebServiceWorker.has("game.www.bfchain.org.dweb");
//                      ^?
```

- `externalFetch`

  **_Communicate with external apps_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.fetch(`file://xxxx/say/hi?message="xxx"`);
//                       ^?
```

- `addEventListener`

  **_event listening_**

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
const input = ref("Write here the message sent");

//send message to desktop.dweb.waterbang.top.dweb
const sayHi = async () => {
  const response = await dwebServiceWorker.fetch(
    `file://plaoc.html.demo.dweb/say/hi?message=${input.value}`,
    {
      search: {
        哈哈哈: "xx",
      },
      method: "POST",
      body: new Blob([`{"xxx":${input.value}}`], { type: "application/json" }),
    }
  );
  message.value = await response.text();
  console.log("sayHi return => ", message.value);
};
dwebServiceWorker.addEventListener("fetch", async (event) => {
  console.log("Dweb Service Worker fetch!", event);
  console.log("xxxx=>", await event.getRemoteManifest());
  const url = new URL(event.request.url);
  if (url.pathname.endsWith("/say/hi")) {
    const hiMessage = url.searchParams.get("message");
    console.log(`get:${hiMessage}`);
    if (hiMessage) {
      message.value = hiMessage;
    }
    // Send message back
    return event.respondWith(`Eat, and another two catties of Erguotou。`);
  }
  return event.respondWith(`Not match any routes:${url.pathname}`);
});
</script>
<template>
  <button @click="sayHi">say hi</button>
</template>
```
