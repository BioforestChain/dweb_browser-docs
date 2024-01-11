Here is the English translation:

---
title: NavigationBarPlugin.setColor()
category:
  - Plugin  
tag:
  - NavigationBarPlugin
  - setColor
---

Set the color [background color] of the system navigation bar

```js 
NavigationBarPlugin.setColor(color)
```

## Parameters

  - color

    Accepts a string representing a hexadecimal color code, e.g. `#FFFFFFFF`


## Return

  - A Promise object that resolves to null  

## Example

```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setColor("#FFFFFFFF") 
```


## Platform Support

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setColor     | ✅      | ✅  | ✅          | X       |  

## Related Links

[NavigationBarPlugin](./index.md)