---
title: NetworkPlugin.getStatus()
category:
  - Plugin
tag:
  - NetworkPlugin
  - getStatus
---

Get the status of the network;

```js
NetworkPlugin.getStatus()
```

## parameters

  - none

## return value

  Return a Promise, and resolve fulfills the [ConnectionStatus](../../interface/connection-status/index.md) object;

## Example
```js
import { networkPlugin } from "@plaoc/plugin";
const status = networkPlugin.getStatus();
```



## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getStatus            | ✅      | ✅  | ✅          | X       |


## Related Links

[NetworkPlugin](./index.md)


