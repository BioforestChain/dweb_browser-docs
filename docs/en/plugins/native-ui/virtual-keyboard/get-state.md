---
title: VirtualKeyboardPlugin.getState()
category:
  - Plugin
tag:
  - VirtualKeyboardPlugin
  - getState 
---

Get the state of the virtual keyboard;

```js
VirtualKeyboardPlugin.getState([force_update])
```

## parameters

  - force_update

    The parameter accepts a boolean type of data; whether it is necessary to force the status to be updated;
    force_update === true will re-read status updates from the system;
    force_update === false will return the last cached state data;


## return value

  Return A Promise object, resolve fulfills an object that implements part of the [State](../state/index.md) interface; for details, refer to the value of the [VirtualKeyboardPlugin.state](./index.md) property;


## Example
```js
import { virtualKeyboardPlugin } from "@plaoc/plugins";
const value = virtualKeyboardPlugin.getState(true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getState             | ✅      | ✅  | ✅          | X       |

## Related Links

[VirtualKeyboardPlugin](./index.md)


