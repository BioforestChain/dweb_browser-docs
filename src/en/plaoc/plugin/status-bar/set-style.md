---
title: StatusBarPlugin.setStyle()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setStyle 
---

Set the style of the system status bar foreground color

```js
StatusBarPlugin.setStyle(style)
```

## parameters

  - style

    The parameter accepts a string; possible values for the string are:
    `"DARK"` `"LIGHT"` `"DEFAULT`
    See the properties of [State.style](../../interface/state/index.md) for details;


## return value
  
  Return a Promise object, resolve fulfill null;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setStyle("DEFAULT")
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setStyle             | ✅      | ✅   | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


