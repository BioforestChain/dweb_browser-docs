---
title: StatusBarPlugin.getStyle()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getStyle 
---

Query the style of the system status bar foreground color;

```js
StatusBarPlugin.getStyle()
```

## parameters

  - none

## return value

  A Promise object, resolve to fulfill the string;
  Possible values for string are:
  `"DARK"` `"LIGHT"` `"DEFAULT"`

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getStyle()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getStyle             | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


