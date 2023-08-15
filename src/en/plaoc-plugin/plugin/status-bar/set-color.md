---
title: StatusBarPlugin.setColor()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setColor
---

Set the color [background color] of the system status bar  

```js
StatusBarPlugin.setColor(color)
```

## Parameters

  - color

    Accepts a string representing a hexadecimal color; e.g. `#FFFFFFFF`


## Return Value

  - A Promise object that resolves to null  

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setColor("#FFFFFFFF")
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setColor     | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)