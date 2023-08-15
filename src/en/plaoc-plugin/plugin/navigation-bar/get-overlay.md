---
title: NavigationBarPlugin.getOverlay()
category:
  - Plugin
tag: 
  - NavigationBarPlugin
  - getOverlay
---

Check if the system navigation bar overlays the app content

```js
NavigationBarPlugin.getOverlay() 
```

## Parameters

  - None

## Return

  - A Promise object that resolves to a boolean

## Example

```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getOverlay()
```

## Platform Support 

| API/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay     | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)