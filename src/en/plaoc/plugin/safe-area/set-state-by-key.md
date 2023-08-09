---
title: SafeAreaPlugin.setStateByKey()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - setStateByKey
---

Set the value of a state property

```js
SafeAreaPlugin.setStateByKey(key, value)
```

## Parameters

  - key

    String, the name of the state property to set  
    Valid properties include: `[overlay]`

  - value

    The value to set for the state property;
    Valid values range refer to [SafeAreaPlugin.state](./index.md) property value;

## Return Value

  - A Promise object that resolves to null

## Example
```js
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.setStateByKey("overlay", true)
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setStateByKey | ✅      | ✅  | ✅          | X       |

## Related Links

[SafeAreaPlugin](./index.md)