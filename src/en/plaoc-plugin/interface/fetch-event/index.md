---
title: FetchEvent
category:
  - Interface
tag:
  - FetchEvent  
---

Inherits from [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event);

```js
import { FetchEvent } from "@plaoc/plugin";
```

## Properties

  - plugin

    The property value is the [DwebServiceWorkerPlugin](../../plugin/dweb-service-worker/index.md) object;

  - request

    The property value is the [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object;

  - clientId

    The property value is a string or null;

  - public_url

    The property value is a string, or a Promise that resolves to a string;

## Methods

  - [FetchEvent.respondWith()](./respond-with.md)

    Method to return data to the sender;

## Events

  - None

## Example
```js
import { FetchEvent } from "@plaoc/plugin";

const event = new FetchEvent("fetch", {
  request: toRequest(ipcRequest),
  clientId: ipcRequest.req_id.toString(), 
});
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop | 
|:-----------------------:|:-------:|:---:|:----------:|:-------:|
| plugin                  | ✅       | ✅   | ✅          | X       |
| request                 | ✅       | ✅   | ✅          | X       |
| clientId                | ✅       | ✅   | ✅          | X       |
| public_url              | ✅       | ✅   | ✅          | X       |
| respondWith             | ✅       | ✅   | ✅          | X       |
 

## Related Links
[Interface](../index.md)