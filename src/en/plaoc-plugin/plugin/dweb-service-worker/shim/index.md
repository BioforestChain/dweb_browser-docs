---
title: DwebServiceWorker  
category:
  - Shim
tag:
  - DwebServiceWorker
---

Simulates a ServiceWorker and provides application upgrade controllers and application control functionality.
Provides control of apps and interception of APIs.
This is a purely web-based mechanism for communication between local apps that can send and receive messages.
Inherits from [BaseEvent](../../interface/base-event/index.md);

```js
import { dwebServiceWorker } from "@plaoc/plugins";
```

## Properties

  - plugin

    The property value is the [dwebServiceWorker](../../plugin/dweb-service-worker/index.md) object

  - updateContoller

    The property value is the [UpdateController](../../interface/update-controller/index.md) object;

  - externalFetch

    The property value is the [dwebServiceWorker.externalFetch()](../../plugin/dweb-service-worker/external-fetch.md) method

  - update

    The property value is the [UpdateController](../../interface/update-controller/index.md) object;

  - close

    The property value is the [dwebServiceWorker.close()](../../plugin/dweb-service-worker/close.md) method

  - restart

    The property value is the [dwebServiceWorker.restart()](../../plugin/dweb-service-worker/restart.md) method;  

## Methods  

  - [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

    Adds an event listener

  - [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

    Removes an event listener

## Events

  Supports any events, the following are predefined events:

  - ["fetch"](./event-fetch.md)

    This event handles messages sent from others and responds with data via respondWith.
    Here you can provide different functionality to other apps by matching routes to interconnect them.

  
  - "pause"

    Triggered when the app is paused; passes an Event to the handler;

  - "resume" 

    Triggered when the app resumes foreground; passes an Event to the handler;

  - "updatefound"

    Triggered during updates or restarts; passes an Event to the handler;  

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
| plugin                   | ✅       | ✅   | ✅          | X       |
| updateContoller          | ✅       | ✅   | ✅          | X       |
| externalFetch            | ✅       | ✅   | ✅          | X       |
| update                   | ✅       | ✅   | ✅          | X       |
| close                    | ✅       | ✅   | ✅          | X       |
| restart                  | ✅       | ✅   | ✅          | X       |   
| addEventListener         | ✅       | ✅   | ✅          | X       |
| removeEventListener      | ✅       | ✅   | ✅          | X       |
| event fetch              | ✅       | ✅   | ✅          | X       |
| event pause              | ✅       | ✅   | ✅          | X       |  
| event resume             | ✅       | ✅   | ✅          | X       |
| event updatefound        | ✅       | ✅   | ✅          | X       |

## Related Links  

[Shim](../index.md)