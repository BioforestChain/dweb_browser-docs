---
title: NavigationBarPlugin.setStyle()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setStyle 
---

Set the style of the system navigation bar \[foreground color\]

```js
NavigationBarPlugin.setStyle(style)
```

## parameters

  - style

    The parameter accepts a string; possible values for the string are:
    `"DARK"` `"LIGHT"` `"DEFAULT`
    See the properties of [State.style](../../interface/state/index.md) for details;

## return value

  A Promise object that resolves to null

## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setStyle("DEFAULT")
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setStyle             | ✅       | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


