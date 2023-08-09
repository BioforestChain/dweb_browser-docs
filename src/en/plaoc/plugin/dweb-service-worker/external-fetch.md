---
title: DwebServiceWorkerPlugin.externalFetch()
category:
  - Plugin
tag:
  - DwebServiceWorkerPlugin
  - externalFetch
---

Method for communicating with other apps.

```js
DwebServiceWorkerPlugin.externalFetch(mmid, init)
```

## Parameters

- mmid

  Identifier of the other app. 
  Should be a [MMID](../../interface/mmid/index.md) object.

- init

  Initialization data.
  Should be a [ExterRequestWithBaseInit](../../interface/exter-request-with-base-init/index.md) object.

## Returns

A Promise that resolves to a Response.

## Example

```js
import { dwebServiceWorkerPlugin } from "@plaoc/plugin";

dwebServiceWorkerPlugin.externalFetch(
  `xxx.dweb`,
  {
    pathname: "xxxx",
  }  
);
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| externalFetch         | ✅      | ✅  | ✅          | X       |

## See Also
[DwebServiceWorkerPlugin](../index.md)