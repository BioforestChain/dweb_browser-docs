---
title: NavigationBarPlugin.setStateByKey()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setStateByKey 
---

Set the value of a property of the system navigation bar state

```js
NavigationBarPlugin.setStateByKey(key, value)
```

## parameters

  - key

    String, the name of the state property to be set
    The list of valid attributes includes: `[overlay, visible, color, style]`

  - value
    
    The value of the state property that needs to be set;
    The legal attribute name range refers to the value of [NavigationBarPlugin.state](./index.md) attribute;

## return value

  - A Promise object that resolves to null


## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setStateByKey("color", "#FFFFFFFF")
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setStateByKey        | ✅       | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


