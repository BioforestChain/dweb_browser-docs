---
title: DwebServiceWorkerPlugin.externalFetch()
category:
  - Plugins
tag:
  - DwebServiceWorkerPlugin
  - externalFetch
---

A way to communicate with other apps;

```js
DwebServiceWorkerPlugin. externalFetch(mmid, init)
```

## parameters

   - mmid

    Identifiers of other apps;
    The parameter value is an object of type [$MMID](../../interface/mmid/index.md);

   - init

    is the initialization data;
    The parameter value is a [$ExterRequestWithBaseInit](../../interface/exter-request-with-base-init/index.md) object;
    

## return value

  Return a Promise, and resolve fulfills a Response;

## Example
```js
import { dwebServiceWorkerPlugin } from "@plaoc/plugin";
dwebServiceWorkerPlugin
.externalFetch(
   `xxx.dweb`,
   {
     pathname: "xxxx",
   }
)
```


## Platform Compatibility

| Property/Method/Event | Android | IOS | Desktop-Dev| Desktop |
|:---------------------:|:-------:|:---:|:--------- :|:-------:|
| externalFetch         | ✅       | ✅  | ✅         | X       |

## Related Links
[DwebServiceWorkerPlugin](../index.md)