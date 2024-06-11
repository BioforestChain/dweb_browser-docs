# dweb-service-worker

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip Introduction:
App communication plug-in, replicates the sending and receiving of app messages. And can control the restart and shutdown of the application.
:::

- [dweb-service-worker](#dweb-service-worker)
  - [Method](#method)
    - [`close`](#close)
    - [`restart`](#restart)
    - [`has`](#has)
  - [`Inter-application communication`](#inter-application-communication)
    - [Send a message](#send-a-message)
    - [`Receive messages`](#receive-messages)
      - [`getRemoteManifest`](#getremotemanifest)
      - [respondWith](#respondwith)
  - [Usage](#usage)

## Method

### `close`

**_Close app_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.close();
//                      ^?
```

### `restart`

**_Restart app_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.restart();
//                       ^?
```

### `has`

**_Check if the app is installed_**

What needs to be passed here is the app ID.

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.has("game.www.bfchain.org.dweb");
//                       ^?
```

## `Inter-application communication`

### Send a message

**_Send a request to communicate with other apps_**

The second parameter is similar to the `RequestInit` parameter of fetch, and can carry parameters for whether to activate the other party's page.

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.fetch(`file://my.test.dweb/say/hi?message="xxx"`, {
  activate: false, // Whether to activate the other party's application interface
  search: {
    data: "mydata", // Carry messages, can also be carried in the url
  },
});
```

- `activate`

Whether to activate the other party's app page.

- `search`

A packaged `searchParams` object can be encapsulated to pass parameters more clearly.

### `Receive messages`

The `fetch` event will receive all external messages sent to itself, and the event format is `ServiceWorkerFetchEvent`.

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
dwebServiceWorker.addEventListener("fetch", async (event) => {
  console.log("app fetch", event);
  console.log("Who called me? =>", await event.getRemoteManifest());
  return event.respondWith(`12345678`); // Reply to the other party's message
});
```

#### `getRemoteManifest`

**_Get the sender's configuration information_**

```ts
async getRemoteManifest(): Promise<$MicroModuleManifest>
```

#### respondWith

**_Reply to the sender_**

```ts
async respondWith(body?: BodyInit | null, init?: ResponseInit)
```

## Usage

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";
import { dwebServiceWorker } from "@plaoc/plugins";

const message = ref("The received message is displayed here");
const send = ref("Write the sent message here");
// Send a message to desktop.dweb.waterbang.top.dweb
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
// Receive message
dwebServiceWorker.addEventListener("fetch", async (event) => {
  console.log("Dweb Service Worker fetch!", event);
  console.log("xxxx=>", await event.getRemoteManifest());
  const url = new URL(event.request.url);
  if (url.pathname.endsWith("/say/hi")) {
    const hiMessage = url.searchParams.get("message");
    console.log(`Received: ${hiMessage}`);
    if (hiMessage) {
      message.value = hiMessage;
    }
    // Send message back
    return event.respondWith(`Eat, another two pounds of Erguotou. `);
  }
  return event.respondWith(`Not match any routes:${url.pathname}`);
});
</script>
<template>
  <button @click="sayHi">say hi</button>
</template>
```
