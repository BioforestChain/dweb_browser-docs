---
title: NavigationBarPlugin.setOverlay()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setOverlay
---

Set whether the system navigation bar overlays the app content

```js
NavigationBarPlugin.setOverlay(b) 
```

## Parameters

  - b

    Accepts a boolean

## Return

  - A Promise object that resolves to null

## Example

```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setOverlay(true)
```

## Platform Support

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |  
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setOverlay   | ✅      | ✅  | ✅          | X       |

## Related Links  

[NavigationBarPlugin](./index.md)