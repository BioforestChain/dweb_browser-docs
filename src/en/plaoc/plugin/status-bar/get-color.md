---
title: StatusBarPlugin.getColor()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getColor 
---

Query the color of the system status bar background color;

```js
StatusBarPlugin.getColor()
```

## parameters

  - none

## return value

  Return a promise, resolve to a string representing the hexadecimal color; 
  eg： `#FFFFFFFF`

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getColor("#FFFFFFFF")
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getColor             | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


