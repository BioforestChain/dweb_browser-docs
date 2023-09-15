---
title: dwebServiceWorker
category:
  - Plugin
tag:
  - dwebServiceWorker
---

Plugin that provides app-level services.

```js
import { dwebServiceWorker } from "@plaoc/plugins";
```

## Methods

  - [dwebServiceWorker.close()](./close.md)
  
    Closes the frontend UI.

  - [dwebServiceWorker.restart()](./restart.md)

    Restarts the frontend and backend services.
    
  - [dwebServiceWorker.externalFetch()](./external-fetch.md)

    Method for communicating with other apps.

## Events  

- None

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| close                 | ✅      | ✅  | ✅          | X       |
| restart               | ✅      | ✅  | ✅          | X       |
| externalFetch         | ✅      | ✅  | ✅          | X       |

## See Also

[Plaoc](../../)