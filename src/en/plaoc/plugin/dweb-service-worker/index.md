---
title: DwebServiceWorkerPlugin
category:
  - Plugins
tag:
  - DwebServiceWorkerPlugin
---

Plugins that provide application-level services

```js
import { dwebServiceWorkerPlugin } from "@plaoc/plugin";
```

## Property

  - updateController

    Access the properties of [UpdateControllerPlugin](../update-controller/index.md);
    The property value is an [UpdateControllerPlugin](../update-controller/index.md) object;

## Method

  - [DwebServiceWorkerPlugin.update()](./update.md)

    Get app update controller

  - [DwebServiceWorkerPlugin.close()](./close.md)

    Close the front-end UI

  - [DwebServiceWorkerPlugin.restart()](./restart.md)

    Restart the front-end and back-end services;

  - [DwebServiceWorkerPlugin.externalFetch()](./external-fetch.md)

    A way to communicate with other apps;


## Event

   - none

## Platform Compatibility

| Property/Method/Event | Android | IOS | Desktop-Dev | Desktop  |
|:---------------------:|:-------:|:---:|:-----------: |:-------:|
| updateController      | ✅      | ✅   | ✅           | X       |
| update                | ✅      | ✅   | ✅           | X       |
| close                 | ✅      | ✅   | ✅           | X       |
| restart               | ✅      | ✅   | ✅           | X       |
| externalFetch         | ✅      | ✅   | ✅           | X       |

## Related Links

[Plaoc](../index.md)