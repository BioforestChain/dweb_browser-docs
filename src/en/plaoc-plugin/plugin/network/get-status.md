---
title: NetworkPlugin.getStatus()
category:
  - Plugin
tag:
  - NetworkPlugin
  - getStatus  
---

Get the network status;

```js
NetworkPlugin.getStatus()
```

## Parameters

  - None

## Return

Returns a Promise that resolves with a [ConnectionStatus](../../interface/connection-status/index.md) object.

## Example
```js  
import { networkPlugin } from "@plaoc/plugin";
const status = networkPlugin.getStatus();
```


## Platform Support

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|   
| getStatus    | ✅      | ✅  | ✅          | X       |

## Related Links

[NetworkPlugin](./index.md)