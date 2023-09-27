---
title: fetch event
category:
  - Plugin
tag:
  - dwebServiceWorker
  - fetch event
---

The `fetch` event is used to receive messages sent from other apps. To ensure the app can receive messages, register this event when the app is initialized.

In the added listener, return data to the sender via `respondWith`.

## Example

```js
import { dwebServiceWorker } from "@plaoc/plugins";

dwebServiceWorker.addEventListener(
  "fetch",
  async (event: ServiceWorkerFetchEvent) => {
    const data = await event.getRemoteManifest();
    console.log("Dweb Service Worker fetch!", data);

    const url = new URL(event.request.url);
    if (url.pathname.endsWith("/say/hi")) {
      const hiMessage = url.searchParams.get("message");
      console.log(`Received: ${hiMessage}`);

      // Send message back
      return event.respondWith(`I am plaoc-html-demo I received the message`);
    }

    return event.respondWith("Not match any routes");
  }
);
```

## Event arguments

The type of event received by `ServiceWorkerFetchEvent` provides the functionality to query the connector's information and return content.

### getRemoteManifest

Get connector information.

#### Function signature

```ts
getRemoteManifest(): Promise<$JmmAppInstallManifest>
```

#### Return value

- [JmmAppInstallManifest](../../interface/$JmmAppInstallManifest.md)

### respondWith

This function is responsible for returning messages to the sender.

#### Function signature

```ts
respondWith(body?: BodyInit | null, init?: ResponseInit): Promise<void>
```

#### Parameters

- [BodyInit](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response) | null: Some basic response parameter objects.

```ts
type BodyInit = ReadableStream | XMLHttpRequestBodyInit;

type XMLHttpRequestBodyInit =
  | Blob
  | BufferSource
  | FormData
  | URLSearchParams
  | string;
```

- [ResponseInit](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response): ResponseInit object of fetch API, can pass `header`, `status`, `statusText`.

## Platform compatibility

| Attribute/Method/Event | Android | IOS | Desktop |
| :--------------------: | :-----: | :-: | :-----: |
|      event fetch       |   ✅    | ✅  |   ✅    |

## Related links

[DwebServiceWorker](./index.md)
