---
title: VirtualKeyboardPlugin
category:
  - Plugin
tag:
  - status-bar
---

The VirtualKeyboardPlugin interface is used to represent the system virtual keyboard element and provide properties and methods for accessing the system virtual keyboard


```javascript
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.setOverlay(true)
```

## Property

- [VirtualKeyboardPlugin.state](./state.md)

  The state object of the virtual keyboard;
  The attribute value is an object that implements the [StateObserver](../../interface/state-observer/index.md) interface;
   

## Method

  - [VirtualKeyboardPlugin.getOverlay()](./get-overlay.md)

    Query the masking status;
    If the returned Promise object, resolve is true;
    Indicates that when the virtual keyboard is expanded, it will cover part of the content of the App;

  - [VirtualKeyboardPlugin.getState([force_update])](./get-state.md)

    Query the state of the virtual keyboard

  - [VirtualKeyboardPlugin.setOverlay()](./set-overlay.md)

    Set the cover state;
    if set to true;
    Indicates that when the virtual keyboard is expanded, it will cover part of the content of the App;

  - [VirtualKeyboardPlugin.setState()](./set-state.md)

    Set the state of the virtual keyboard

  - [VirtualKeyboardPlugin.setStateByKey()](./set-state-by-key.md)

    Set a state value of the virtual keyboard


## Event

  - none


## Platform Compatibility


| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| state                | ✅      | ✅  | ✅          | X       |
| getOverlay           | ✅      | ✅  | ✅          | X       |
| getState             | ✅      | ✅  | ✅          | X       |
| setOverlay           | ✅      | ✅  | ✅          | X       |
| setState             | ✅      | ✅  | ✅          | X       |
| setStateByKey        | ✅      | ✅  | ✅          | X       |


## Related Links

[Plaoc](../../)


