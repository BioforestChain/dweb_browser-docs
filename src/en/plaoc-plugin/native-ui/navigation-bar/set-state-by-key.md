---
title: NavigationBarPlugin.setStateByKey()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setStateByKey
---

Set the value of a specific state property of the system navigation bar

```js
NavigationBarPlugin.setStateByKey(key, value) 
```

## Parameters

  - key

    String, name of the state property to set 
    Valid properties include: `[overlay, visible, color, style]`

  - value  
    The value to set for the state property;
    Valid values range see [NavigationBarPlugin.state](./index.md)

## Return

  - A Promise object that resolves to null
  
## Example

```js  
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setStateByKey("color", "#FFFFFFFF")
```


## Platform Support 

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|  
| setStateByKey| ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)