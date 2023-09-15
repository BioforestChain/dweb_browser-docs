---
title: dwebServiceWorker.externalFetch()
category:
  - Plugin
tag:
  - dwebServiceWorker
  - externalFetch
---

Method for communicating with other apps.

```js
dwebServiceWorker.externalFetch(mmid, init)
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
import { dwebServiceWorker } from "@plaoc/plugins";

dwebServiceWorker.externalFetch(
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
[dwebServiceWorker](../index.md)