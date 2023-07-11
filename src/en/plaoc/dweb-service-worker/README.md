---
title: DwebServiceWorker
category:
  - Plugin
tag:
  - Plugin
---

Simulate ServiceWorker and provide application upgrade controller and application control functionalities.

> Taking vue3 as an example, you can view the complete code here: [DwebServiceWorker](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/DwebServiceWorker.vue)

## dweb-service-worker

Provides control over the app and interception of API requests.

### Inter-Application Communication

This is a mechanism for pure web application communication, allowing the exchange of messages between different apps on the local machine.

#### `externalFetch`

Sends a message using this method.

- Example usage:

```ts
const sayHi = async () => {
  const result = await sw.externalFetch(`desktop.dweb.waterbang.top.dweb`, {
    pathname: "/say/hi",
    search: {
      message: "Are we having crabs for dinner tonight?",
    },
  });
  console.log("sayHi return => ", await result.text());
};
```

- Method signature:

```ts
async externalFetch(hostname: $MMID, init: $ExterRequestWithBaseInit): Promise<response>
```

| Param          | Type                                                                           | Description                                              |
| -------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------- |
| **`hostname`** | <code><a href="#mmid">$MMID</a></code>                                         | The ID of the app, also known as MMID                     |
| **`init`**     | <code><a href="#exterrequestwithbaseinit">$ExterRequestWithBaseInit</a></code> | Inherits from [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request) and adds `pathname`, `search`, etc. |

#### `fetch`

This event is responsible for handling messages sent by others and responding with data using `respondWith`. Here, different functionalities can be provided to other apps by matching routes, enabling interconnectivity.

- Example usage:

```ts
dwebServiceWorker.addEventListener("fetch", async (event: FetchEvent) => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith("/say/hi")) {
    const hiMessage = url.searchParams.get("message");
    console.log(`Received: ${hiMessage}`);
    if (hiMessage) {
      message.value = hiMessage;
    }
    // Send a message back
    return event.respondWith(`Sure, bring two bottles of liquor.`);
  }
  return event.respondWith("Not match any routes");
});
```

- Method signature:

```ts
async respondWith(response: Blob | ReadableStream<Uint8Array> | string): Promise<response>
```

---

### Events `pause`, `resume`

::: warning
To ensure global triggering of these events, event listeners need to be imported at the entry point of the app.
:::

#### `pause`

Event triggered when the app is paused.

- Example usage:

```ts
dwebServiceWorker.addEventListener("pause", (event) => {
  console.log("App paused 🍋", event);
});
```

#### `resume`

Event triggered when the app is resumed and brought to the foreground.

- Example usage:

```ts
dwebServiceWorker.addEventListener("resume", (event) => {
  console.log("App resumed 🍉", event);
});
```

<!-- #### `updatefound` (Not yet available)

Event triggered when an app update is found.

- Example usage:

```ts
dwebServiceWorker.addEventListener("updatefound", (event) => {
  console.log("Dweb Service Worker update found!", event);
});
``` -->

---

### API `close`, `restart`, `update`

#### `update`

Developers call this function to obtain the upgrade controller for performing further upgrade control and other event operations.

- Method signature:

```ts
update(): UpdateControllerPlugin
```

**Returns:** <code><a href="#updatecontrollerplugin">UpdateControllerPlugin</a></code>

#### `close`

Controls the closure of the app, only closing the frontend.

- Method signature:

```ts
async close(): Promise<boolean>
```

#### `restart`

Controls the restart of the app, which involves restarting both the frontend and backend.

- Method signature:

```ts
async restart(): Promise<boolean>
```

## UpdateControllerPlugin

Download controller obtained by `dweb-service-worker`.

### Event `start`, `end`, `progress`, `cancel`

#### `start`

Triggered when the download starts.

- Example usage:

```ts
updateContoller.addEventListener("start", (event: Event) => {
  console.log("Dweb Service Worker updateContoller start =>", event);
});
```

#### `end`

Triggered when the download is completed.

- Example usage:

```ts
updateContoller.addEventListener("end", (event: Event) => {
  console.log("Dweb Service Worker updateContoller end =>", event);
});
```

#### `progress`

Callback for the progress of the download event, with a return value ranging from 0 to 100.

- Example usage:

```ts
updateContoller.addEventListener("progress", (progressRate: string) => {
  const progress = parseFloat(progressRate);
  console.log("Dweb Service Worker updateContoller progress =>", progress);
});
```

#### `cancel`

Triggered when the download is canceled.

- Example usage:

```ts
updateContoller.addEventListener("cancel", (event: Event) => {
  console.log("Dweb Service Worker updateContoller cancel =>", event);
});
```

---

### API `pause`, `resume`, `cancel`, `download`

#### `pause`

Pauses the download operation.

- Method signature:

```ts
async pause(): Promise<boolean>
```

#### `resume`

Resumes the download and re-download control function.

- Method signature:

```ts
async resume(): Promise<boolean>
```

#### `cancel`

Cancels the download.

- Method signature:

```ts
async cancel(): Promise<boolean>
```

#### `download`

Triggers the self-update function.

- Method signature:

```ts
async download(metadataUrl: string): Promise<BFSMetaData>
```

| Param             | Type                | Description                                                                        |
| ----------------- | ------------------- | ---------------------------------------------------------------------------------- |
| **`metadataUrl`** | <code>string</code> | The URL of the `metadata.json` file, similar to [metadata](https://shop.plaoc.com/metadata.json) |

**Returns:** <code>Promise&lt;<a href="#bfsmetadata">BFSMetaData</a>&gt;</code>

## Interfaces

### $MMID

| Prop        | Type                        | Description                                             | Since |
| ----------- | --------------------------- | ------------------------------------------------------- | ----- |
| **`$MMID`** | <code>${string}.dweb</code> | The ID of the application, a string ending with `.dweb`, similar to <code>_${string}_.dweb</code> | 1.0.0 |

### $ExterRequestWithBaseInit

| Prop           | Type                | Description                        | Since |
| -------------- | ------------------- | ---------------------------------- | ----- |
| **`pathname`** | <code>string</code> | The path requested by the app      | 1.0.0 |
| **`search`**   | <code>object</code> | Equivalent to the search part of the URL object, used to pass GET parameters | 1.0.0 |

### BFSMetaData

Data format of the Plaoc app, similar to [bfs-metadata](https://shop.plaoc.com/metadata.json). Specifies all the configuration information of an app.

> - The return value of BFSMetaData is also the content of metadata.json. Consider changing it to a boolean value.
> - A future solution might be to provide a `/membership-broadcast` service in `dns.sys.dweb` to implement a protocol similar to UDP local broadcasting. The purpose is to abstract the collaboration between various modules into a protocol and then broadcast this protocol data through the membership layer.

| Prop               | Type                                              | Description                                              | Since |
| ------------------ | ------------------------------------------------- | -------------------------------------------------------- | ----- |
| **`id`**           | <code><a href="#mmid">$MMID</a></code>            | The ID of the application, a string ending with `.dweb`, similar to <code>_${string}_.dweb</code> | 1.0.0 |
| **`server`**       | <code><a href="#mainserver">MainServer</a></code> | The address to open the app                              | 1.0.0 |
| **`name`**         | <code>string</code>                               | The name of the app                                      | 1.0.0 |
| **`short_name`**   | <code>string</code>                               | The subtitle of the app                                  | 1.0.0 |
| **`icon`**         | <code>string</code>                               | The icon of the app                                      | 1.0.0 |
| **`images`**       | <code>string</code>                               | Screenshots of the app, displayed in the download interface | 1.0.0 |
| **`introduction`** | <code>string</code>                               | The description of the app, displayed in the download interface | 1.0.0 |
| **`author`**       | <code>string[]</code>                             | Developers or authors of the app                          | 1.0.0 |
| **`version`**      | <code>string</code>                               | The version of the app                                   | 1.0.0 |
| **`new_feature`**  | <code>string</code>                               | New features of the app                                  | 1.0.0 |
| **`keywords`**     | <code>string[]</code>                             | Keywords related to the app                              | 1.0.0 |
| **`home`**         | <code>string</code>                               | The homepage address of the app                           | 1.0.0 |
| **`bundle_size`

**  | <code>string</code>                               | The size of the app                                      | 1.0.0 |
| **`bundle_url`**   | <code>string</code>                               | The download address of the app                           | 1.0.0 |
| **`bundle_hash`**  | <code>string</code>                               | The hash of the app file                                 | 1.0.0 |
| **`permissions`**  | <code>string[]</code>                             | List of permissions required by the app                   | 1.0.0 |
| **`plugins`**      | <code>string[]</code>                             | Plugins used by the app                                  | 1.0.0 |
| **`releaseDate`**  | <code>string</code>                               | The release date of the app                              | 1.0.0 |

#### MainServer

Configuration options for the app's main server, mainly used to configure the file addresses of the app.

| Prop        | Type                | Description                             | Since |
| ----------- | ------------------- | --------------------------------------- | ----- |
| **`root`**  | <code>string</code> | The directory of the app's files, relative to the app root directory | 1.0.0 |
| **`entry`** | <code>string</code> | The entry file address of the app, relative to the app root directory | 1.0.0 |