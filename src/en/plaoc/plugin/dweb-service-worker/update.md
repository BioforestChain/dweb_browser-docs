---
title: DwebServiceWorkerPlugin.update()
category:
  - Plugin
tag:
  - DwebServiceWorkerPlugin
  - update
---

Gets the app update controller.

```js
DwebServiceWorkerPlugin.update()
```

## Parameters

- None

## Returns

An [UpdateControllerPlugin](../update-controller/index.md) object.

## Example

```js
import { DwebServiceWorkerPlugin } from "@plaoc/plugin";

const updateControllerPlugin = DwebServiceWorkerPlugin.update();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| update                | ✅      | ✅  | ✅          | X       |  

## See Also

[DwebServiceWorkerPlugin](../dweb-service-worker/index.md)