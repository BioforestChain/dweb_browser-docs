---
title: NavigationBarPlugin.setStyle()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setStyle
---

Set the style [foreground color] of the system navigation bar

```js
NavigationBarPlugin.setStyle(style)
``` 

## Parameters

  - style

    Accepts a string; Possible values:
    `"DARK"` `"LIGHT"` `"DEFAULT"`
    See [State.style](../../interface/state/index.md) for details.


## Return

  - A Promise object that resolves to null

## Example

```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setStyle("DEFAULT")
```


## Platform Support

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setStyle     | ✅      | ✅  | ✅          | X       |

## Related Links  

[NavigationBarPlugin](./index.md)