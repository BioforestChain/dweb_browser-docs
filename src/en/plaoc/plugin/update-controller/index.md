---
title: UpdateControllerPlugin
category:
  - Plugin
tag:
  - UpdateControllerPlugin
---

Update the control plug-in of the App; but this plug-in cannot be accessed directly;
The UpdateControllerPlugin plugin will be accessed in the [DwebServiceWorkerPlugin](../dweb-service-worker/index.md) plugin;

```js
import { dwebServiceWorkerPlugin } from "@plaoc/plugin";
const updateControllerPlugin = dwebServiceWorkerPlugin.updateController
```

## Property

  - none

## Method

  - [UpdateControllerPlugin.download()]()

    download apps;

  - [UpdateControllerPlugin.pause()]()

    pause download;


  - [UpdateControllerPlugin.resume()]()

    restart download;

  - [UpdateControllerPlugin.cancel()]()

    cancel download;

## Event

  - none

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| download             | ✅      | ✅   | ✅           | X      |
| pause                | ✅      | ✅   | ✅           | X      |
| resume               | ✅      | ✅   | ✅           | X      |
| cancel               | ✅      | ✅   | ✅           | X      |

## Related Links

[Plaoc](../index.md)


