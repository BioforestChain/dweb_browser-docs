---
title: event fetch
category:
  - Shim
tag:
  - event
  - fetch
---

The `fetch` event of [DwebServiceWorker](./index.md);
Used to handle messages sent from other apps;
In the added listener, return data to the sender via the FetchEvent.respondWith parameter;

```js
DwebServiceWorker.addEventListener('fetch', fetchEvent => {
  fetchEvent.responseWith(``) 
})
```

## Listener Parameters

  - fetchEvent

    The parameter value is a [FetchEvent](../../interface/fetch-event/index.md) object;

## Example
```js
import { dwebServiceWorker } from "@plaoc/plugins";

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
| event fetch             | ✅       | ✅   | ✅          | X       |

## Related Links

[DwebServiceWorker](./index.md)