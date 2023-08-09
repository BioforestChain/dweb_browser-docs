---
title: NavigationBarPlugin.getStyle()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getStyle
---

Get the style [foreground color] of the system navigation bar  

```js
NavigationBarPlugin.getStyle()
```

## Parameters

  - None

## Return

  - A Promise object that resolves to a string
  - Possible values:
    `"DARK"` `"LIGHT"` `"DEFAULT"`  

## Example

```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getStyle()
```

## Platform Support  

| API/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getStyle     | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)