---
title: StatusBarPlugin.setStyle()
category:
  - Plugin 
tag:
  - StatusBarPlugin
  - setStyle
---

Set the style [foreground color] of the system status bar

```js
StatusBarPlugin.setStyle(style)
```

## Parameters

  - style

    Accepts a string; Possible string values: 
    `"DARK"` `"LIGHT"` `"DEFAULT"`
    See [State.style](../../interface/state/index.md) property for details;


## Return Value

  - A Promise object that resolves to null

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setStyle("DEFAULT")
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setStyle     | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)