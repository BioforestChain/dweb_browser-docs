---
title: NavigationBarPlugin.getColor()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getColor 
---

Query the color of the system navigation bar \[background color\]

```js
NavigationBarPlugin.getColor()
```

## parameters

  - none

## return value

  A Promise that resolves to a string representing the hexadecimal color; eg: `#FFFFFFFF`

## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getColor("#FFFFFFFF")
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getColor             | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


