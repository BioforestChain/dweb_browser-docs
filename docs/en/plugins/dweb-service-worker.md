---
outline: deep
---

# dweb-service-worker

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip introduction:
dweb service plug-in
:::

- [Reference](#reference) -[Method](#method)
- [Usage](#usage)

## Reference

#### Method

- `close`

  **_Close the front end, which can be understood as closing the app_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.close();
//                      ^?
```

- `restart`

  **_Restart front-end and back-end_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.restart();
//                       ^?
```

- `has`

  **_Check whether the application is installed_**

What needs to be passed here is the ID of the app.

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.has("game.www.bfchain.org.dweb");
//                       ^?
```

- `fetch`

  **_Communicate with external apps_**

The second parameter is similar to the `ReuqestInit` parameter of fetch, and can carry the parameter of whether to activate the other page.

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.fetch(`file://my.test.dweb/say/hi?message="xxx"`, {
  activate: false, // Whether to activate the other party's application interface
  search: {
    data: "mydata", // Carrying messages can also be carried in the URL
  },
});
```

- `addEventListener`

  **_Event Monitoring_**

  - `fetch`

    **_Receive external messages_**

    ```ts twoslash
    import { dwebServiceWorker } from "@plaoc/plugins";
    dwebServiceWorker.addEventListener("fetch", (event) => {
      console.log("app fetch", event);
    });
    ```

  - `ServiceWorkerFetchEvent`

    **_Event object that receives the message_**

    - `async getRemoteManifest(): Promise<$MicroModuleManifest>`

      **_Get the sender’s configuration information_**

    - `async respondWith(body?: BodyInit | null, init?: ResponseInit)`

      **_Reply message to sender_**

## Usage

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
import { dwebServiceWorker } from "@plaoc/plugins";

const message = ref("The received message is displayed here");
const send = ref("Write the message to be sent here");
//Send message to desktop.dweb.waterbang.top.dweb
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
//Receive message
dwebServiceWorker.addEventListener("fetch", async (event) => {
  console.log("Dweb Service Worker fetch!", event);
  console.log("xxxx=>", await event.getRemoteManifest());
  const url = new URL(event.request.url);
  if (url.pathname.endsWith("/say/hi")) {
    const hiMessage = url.searchParams.get("message");
    console.log(`received:${hiMessage}`);
    if (hiMessage) {
      message.value = hiMessage;
    }
    //Send message back
    return event.respondWith(`Eat, two more pounds of Erguotou.`);
  }
  return event.respondWith(`Not match any routes:${url.pathname}`);
});
</script>
<template>
  <button @click="sayHi">say hi</button>
</template>
```
