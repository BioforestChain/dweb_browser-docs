---
title: UpdateControllerPlugin.download()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - download
---

download apps

```js
UpdateControllerPlugin.download(metadataUrl)
```

## parameters

  - metadataUrl

    The parameter is the address to access app metadata;
    The type of the parameter is string;

## return value

  Return a Promise, resolve to fulfill the [BFSMetaData](../../interface/bfs-meta-data/index.md) object

## Example
```js
import { dwebServiceWorkerPlugin } from "@plaoc/plugin"
dwebServiceWorkerPlugin.updateController.download("http://xxx")
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| download             | ✅       | ✅  | ✅          | X       |

## Related Links

[UpdateControllerPlugin](./index.md)


