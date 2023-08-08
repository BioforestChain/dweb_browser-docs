---
title: StatusBarPlugin.setColor()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setColor 
---

Set the color of the system status bar background color

```js
StatusBarPlugin.setColor(color)
```

## parameters

  - color

    The parameter accepts a string representing the hexadecimal color; for example: `#FFFFFFFF`


## return value

  Return a Promise object, resolve fulfill null;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setColor("#FFFFFFFF")
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setColor             | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


