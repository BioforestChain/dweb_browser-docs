---
title: DwebServiceWorkerPlugin
category:
  - Plugin
tag:
  - DwebServiceWorkerPlugin
---

Plugin that provides app-level services.

```js
import { dwebServiceWorkerPlugin } from "@plaoc/plugin";
```

## Properties

- updateController

  Accesses properties of the [UpdateControllerPlugin](../update-controller/index.md).
  Its value is an [UpdateControllerPlugin](../update-controller/index.md) object.

## Methods

  - [DwebServiceWorkerPlugin.update()](./update.md)

    Gets the app update controller.
  
  - [DwebServiceWorkerPlugin.close()](./close.md)
  
    Closes the frontend UI.

  - [DwebServiceWorkerPlugin.restart()](./restart.md)

    Restarts the frontend and backend services.
    
  - [DwebServiceWorkerPlugin.externalFetch()](./external-fetch.md)

    Method for communicating with other apps.

## Events  

- None

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| updateController      | ✅      | ✅  | ✅          | X       |
| update                | ✅      | ✅  | ✅          | X       |
| close                 | ✅      | ✅  | ✅          | X       |
| restart               | ✅      | ✅  | ✅          | X       |
| externalFetch         | ✅      | ✅  | ✅          | X       |

## See Also

[Plaoc](../index.md)