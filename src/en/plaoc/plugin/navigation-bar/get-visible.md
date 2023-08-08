---
title: NavigationBarPlugin.getVisible()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getVisible 
---

Query whether the system navigation bar is visible

```js
NavigationBarPlugin.getVisible()
```

## parameters

  - none

## return value

  a Promise object, resolve fulfills boolean;

## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getVisible()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getVisible           | ✅       | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


