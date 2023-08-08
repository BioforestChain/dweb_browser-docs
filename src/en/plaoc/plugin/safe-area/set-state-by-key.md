---
title: SafeAreaPlugin.setStateByKey()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - setStateByKey 
---

set the value of a property

```js
SafeAreaPlugin.setStateByKey(key, value)
```

## parameters

  - key

    String, the name of the state property to be set
    The list of valid attributes includes: `[overlay]`

  - value
    
    The value of the state property that needs to be set;
    The legal attribute value range refers to the value of [SafeAreaPlugin.state](./index.md) attribute;

## return value

  A Promise object that resolves to null;

## Example
```js
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.setStateByKey("overlay", true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setStateByKey        | ✅      | ✅  | ✅          | X       |

## Related Links

[SafeAreaPlugin](./index.md)


