---
title: NavigationBarPlugin.setOverlay()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setOverlay 
---

Set whether to cover the content of the App in the system navigation bar;

```js
NavigationBarPlugin.setOverlay(b)
```

## parameters

  - b

    The parameter accepts a boolean;


## return value

  A Promise object that resolves to null

## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setOverlay(true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setOverlay           | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


