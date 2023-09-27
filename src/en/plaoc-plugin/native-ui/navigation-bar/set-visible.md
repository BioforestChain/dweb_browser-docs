---
title: NavigationBarPlugin.setVisible()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setVisible
---

Set whether the system navigation bar is visible  

```js
NavigationBarPlugin.setVisible(b)
```

## Parameters

  - b

    Accepts a boolean

## Return

  - A Promise object that resolves to null

## Example

```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setVisible(true) 
```


## Platform Support

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setVisible   | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)