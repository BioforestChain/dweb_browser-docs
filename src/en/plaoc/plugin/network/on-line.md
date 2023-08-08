---
title: NetworkPlugin.onLine()
category:
  - Plugin
tag:
  - NetworkPlugin
  - onLine
---

Query whether the network is online;

```js
 NetworkPlugin.onLine()
```

## parameters

  - none

## return value

  Returns a boolean; returns true if access to the network is possible;
  false if network connection lost;

## Example
```js
import { networkPlugin } from "@plaoc/plugin";
const isOnline = networkPlugin.onLine();
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| onLine               | ✅      | ✅  | ✅          | X       |

## Related Links

[NetworkPlugin](./index.md)


