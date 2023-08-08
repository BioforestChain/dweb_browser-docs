---
title: StatusBarPlugin.getOverlay()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getOverlay 
---

Query whether the system status bar convers the APP content;

```js
StatusBarPlugin.getOverlay()
```

## parameters

  - none

## return value

  Return a promise, resolve to fulfill a boolean;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getOverlay()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay           | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


