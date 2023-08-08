---
title: NavigationBarPlugin.setColor()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setColor 
---

Set the color of the system navigation bar \[background color\]

```js
NavigationBarPlugin.setColor(color)
```

## parameters

  - color

    The parameter accepts a string representing the hexadecimal color; for example: `#FFFFFFFF`


## return value

  A Promise object that resolves to null;

## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setColor("#FFFFFFFF")
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setColor             | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


