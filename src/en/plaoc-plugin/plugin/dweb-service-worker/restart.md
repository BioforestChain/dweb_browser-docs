---
title: dwebServiceWorker.restart()
category:
  - Plugin
tag:
  - dwebServiceWorker
  - restart  
---

Restarts the frontend and backend of the app.

```js
dwebServiceWorker.restart()
```

## Parameters

- None

## Returns

A Promise that resolves to a boolean.

## Example

```js
import { dwebServiceWorker } from "@plaoc/plugins";

dwebServiceWorker.restart();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| restart               | ✅      | ✅  | ✅          | X       |

## See Also
[dwebServiceWorker](../index.md)