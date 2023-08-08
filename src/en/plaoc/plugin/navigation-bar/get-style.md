---
title: NavigationBarPlugin.getStyle()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getStyle 
---

Query the style of the system navigation bar \[foreground color\]

```js
NavigationBarPlugin.getStyle()
```

## parameters

  - none

## return value

  A Promise object, resolve to fulfill the string;
  Possible values for string are:
  `"DARK"` `"LIGHT"` `"DEFAULT"`

## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getStyle()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getStyle             | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


