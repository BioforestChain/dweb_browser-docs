---
title: DwebServiceWorkerPlugin.close()
category:
  - Plugin
tag:
  - DwebServiceWorkerPlugin
  - close
---

Closes the frontend of the app.

```js
DwebServiceWorkerPlugin.close()
```

## Parameters

- None

## Returns

A Promise that resolves to a boolean.

## Example

```js  
import { dwebServiceWorkerPlugin } from "@plaoc/plugin";

dwebServiceWorkerPlugin.close();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| close                 | ✅      | ✅  | ✅          | X       |  

## See Also
[DwebServiceWorkerPlugin](../index.md)