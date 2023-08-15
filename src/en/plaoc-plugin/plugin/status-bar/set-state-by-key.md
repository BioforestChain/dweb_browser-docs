---
title: StatusBarPlugin.setStateByKey()
category:
  - Plugin  
tag:
  - StatusBarPlugin
  - setStateByKey
---

Set the value of a state property in the system status bar

```js
StatusBarPlugin.setStateByKey(key, value)
```

## Parameters

  - key

    String, the name of the state property to set
    Valid properties include: `[overlay, visible, color, style]`

  - value

    The value to set for the state property; 
    Valid values range refer to [StatusBarPlugin.state](./index.md) property value;

## Return Value

  - A Promise object that resolves to null

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setStateByKey("color", "#FFFFFFFF")
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:| 
| setStateByKey | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)