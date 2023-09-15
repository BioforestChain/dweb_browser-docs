---
title: NetworkPlugin.onLine()
category: 
  - Plugin
tag:
  - NetworkPlugin
  - onLine
---

Check if the network is online;

```js
NetworkPlugin.onLine() 
```

## Parameters

  - None

## Return

Returns a boolean; true if the network is accessible, 
false if network connection is lost.

## Example
```js
import { networkPlugin } from "@plaoc/plugins";
const isOnline = networkPlugin.onLine();
```

## Platform Support

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| onLine       | ✅      | ✅  | ✅          | X       |

## Related Links

[NetworkPlugin](./index.md)