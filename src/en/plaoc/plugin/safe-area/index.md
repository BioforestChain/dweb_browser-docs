---
title: SafeAreaPlugin
category:
  - Plugin
tag:
  - status-bar
---

The SafeAreaPlugin interface is used to represent the safe area of the screen;
The security area is strongly associated with the system bar and hardware;

```javascript
import { safeAreaPlugin } from "@plaoc/plugins";
safeAreaPlugin.setOverlay(true)
```

## Property

- [SafeAreaPlugin.state](./state.md)

  the state object of the security area;
  The attribute value is an object that implements the [StateObserver](../../interface/state-observer/index.md) interface;

## Method

  - [SafeAreaPlugin.getOverlay()](./get-overlay.md)

    Query the masking status;
    If the returned Promise object, resolve is true;
    Indicates that the content of the app in the safe area will be partially covered by the system bar;

  - [SafeAreaPlugin.getState([force_update])](./get-state.md)

    Query the status of the security zone;;

  - [SafeAreaPlugin.setOverlay()](./set-overlay.md)

    Set the cover state;
    if set to true;
    Indicates that the content of the app in the safe area will be partially covered by the system bar;

  - [SafeAreaPlugin.setState()](./set-state.md)

    Set the state of the safe zone;

  - [SafeAreaPlugin.setStateByKey()](./set-state-by-key.md)

    Set the value of a certain state in the security area;


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

[Plaoc](../)


