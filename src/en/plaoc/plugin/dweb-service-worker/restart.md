---
title: DwebServiceWorkerPlugin.restart()
category:
  - Plugin
tag:
  - DwebServiceWorkerPlugin
  - restart  
---

Restarts the frontend and backend of the app.

```js
DwebServiceWorkerPlugin.restart()
```

## Parameters

- None

## Returns

A Promise that resolves to a boolean.

## Example

```js
import { dwebServiceWorkerPlugin } from "@plaoc/plugin";

dwebServiceWorkerPlugin.restart();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| restart               | ✅      | ✅  | ✅          | X       |

## See Also
[DwebServiceWorkerPlugin](../index.md)