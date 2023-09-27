---
title: NavigationBarPlugin.getColor()
category:
  - Plugin
tag:
  - NavigationBarPlugin 
  - getColor
---

Get the color [background color] of the system navigation bar  

```js
NavigationBarPlugin.getColor()
```

## Parameters

  - None

## Return

  - A Promise object that resolves to a string representing a hexadecimal color code, e.g. `#FFFFFFFF`

## Example
```js  
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getColor("#FFFFFFFF") 
```


## Platform Support

| API/Method/Event | Android | iOS | Desktop-Dev | Desktop | 
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getColor     | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)