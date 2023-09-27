---
title: VirtualKeyboardPlugin.setStateByKey()
category:
  - Plugin
tag:
  - VirtualKeyboardPlugin
  - setStateByKey 
---

set the value of a property

```js
VirtualKeyboardPlugin.setStateByKey(key, value)
```

## parameters

  - key

    String, the name of the state property to be set
    The list of valid attributes includes: `[overlay]`

  - value

    The value of the state property that needs to be set;
    The legal attribute value range refers to the value of [VirtualKeyboardPlugin.state](./index.md) attribute;

## return value

  Return a Promise object that resolves to null;

## Example
```js
import { virtualKeyboardPlugin } from "@plaoc/plugins";
const value = virtualKeyboardPlugin.setStateByKey("overlay", true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setStateByKey        | ✅      | ✅  | ✅          | X       |

## Related Links

[VirtualKeyboardPlugin](./index.md)


