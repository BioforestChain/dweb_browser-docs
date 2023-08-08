---
title: NavigationBarPlugin.getOverlay()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getOverlay 
---

query whether the system navigation bar covers the content of the APP

```js
NavigationBarPlugin.getOverlay()
```

## parameters

  - none

## return value

  a Promise object, resolve fulfills boolean;

## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getOverlay()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay           | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


