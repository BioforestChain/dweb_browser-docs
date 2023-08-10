---
title: FetchEvent.respondWith()
category:
  - Interface  
tag:
  - FetchEvent
  - respondWith
---

Method to return data to the sender;

```js
FetchEvent.respondWith(response)  
```

## Parameters

  - response

    The response data
    Valid data types are:

    `Blob` 

    `ReadableStream<Uint8Array>`

    `string`

## Return Value

  Returns a Promise object;

## Example

```js
import { dwebServiceWorker } from "@plaoc/plugin";

dwebServiceWorker.addEventListener('fetch', async (fetchEvent) => {

  const url = new URL(event.request.url);
  
  if (url.pathname.endsWith("/say/hi")) {
  
    // message is the message content
    const message = url.searchParams.get("message");
    
    // Send the message back  
    return event.respondWith(`match`);
  }
  
  return event.respondWith("Not match any routes");
})
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:----------:|:-------:|
| respondWith             | ✅       | ✅   | ✅          | X       |

## Related Links
[FetchEvent](./index.md)