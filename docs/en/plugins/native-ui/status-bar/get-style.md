---
title: StatusBarPlugin.getStyle()  
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getStyle
---

Get the style [foreground color] of the system status bar

```js
StatusBarPlugin.getStyle()
```

## Parameters

  - None

## Return Value

  - A Promise object that resolves to a string; 
  Possible string values:
  `"DARK"` `"LIGHT"` `"DEFAULT"`

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getStyle()
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getStyle     | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)