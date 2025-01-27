# dweb-service-worker

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip Introduction:
App communication plugin, responsible for sending and receiving app messages. It can also control app restart and shutdown.
:::

- [dweb-service-worker](#dweb-service-worker)
  - [Method](#method)
    - [`close`](#close)
    - [`restart`](#restart)
    - [`has`](#has)
  - [`Inter-app Communication`](#inter-app-communication)
    - [Sending Messages](#sending-messages)
    - [`Receiving Messages`](#receiving-messages)
      - [`getRemoteManifest`](#getremotemanifest)
      - [respondWith](#respondwith)
  - [Usage](#usage)

## Method

### `close`

**_Close the app_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.close();
//                      ^?
```

### `restart`

**_Restart the app_**

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.restart();
//                      ^?
```

### `has`

**_Check if the app is installed_**

Here, you need to pass the app's ID.

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.has("game.www.bfchain.org.dweb");
//                      ^?
```

## `Inter-app Communication`

### Sending Messages

**_Send a request to communicate with other apps_**

The second parameter is similar to the `RequestInit` parameter of fetch, and can carry parameters to activate the other app's page.

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
await dwebServiceWorker.fetch(`file://my.test.dweb/say/hi?message="xxx"`, {
  activate: false, // Whether to activate the other app's interface
  search: {
    data: "mydata", // Carry message, can also be carried in the URL
  },
});
```

- `activate`

Whether to activate the other app's page.

- `search`

A packaged `searchParams` object for clearer parameter passing.

### `Receiving Messages`

The `fetch` event will receive all external messages sent to itself, with the event format being `ServiceWorkerFetchEvent`.

```ts twoslash
import { dwebServiceWorker } from "@plaoc/plugins";
dwebServiceWorker.addEventListener("fetch", async (event) => {
  console.log("app fetch", event);
  console.log("Who called me? =>", await event.getRemoteManifest());
  return event.respondWith(`12345678`); // Reply to the sender
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

const message = ref("Here displays the received message");
const send = ref("Write the message to send here");
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
// Receive messages
dwebServiceWorker.addEventListener("fetch", async (event) => {
  console.log("Dweb Service Worker fetch!", event);
  console.log("xxxx=>", await event.getRemoteManifest());
  const url = new URL(event.request.url);
  if (url.pathname.endsWith("/say/hi")) {
    const hiMessage = url.searchParams.get("message");
    console.log(`Received:${hiMessage}`);
    if (hiMessage) {
      message.value = hiMessage;
    }
    // Send a message back
    return event.respondWith(`Eat, bring two more pounds of Erguotou.`);
  }
  return event.respondWith(`Not match any routes:${url.pathname}`);
});
</script>
<template>
  <button @click="sayHi">say hi</button>
</template>
```
