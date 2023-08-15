---
title: StatusBarPlugin.getColor()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getColor
---

Get the color [background color] of the system status bar  

```js
StatusBarPlugin.getColor()
```

## Parameters

  - None

## Return Value

  - A Promise object that resolves to a string representing a hexadecimal color; e.g. `#FFFFFFFF`

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getColor("#FFFFFFFF")
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getColor     | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)