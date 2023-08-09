---
title: NavigationBarPlugin.setState()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setState
---

Set the state of the system navigation bar

```js
NavigationBarPlugin.setState(state) 
```

## Parameters

  - state

    An object implementing part of the [State](../../interface/state/index.md) interface; 
    Valid properties include: `[overlay, visible, color, style]`

## Return

  - A Promise object that resolves to null
  
## Example  

```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setState({color:"#FFFFFFFF"})
```


## Platform Support

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop | 
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setState     | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)