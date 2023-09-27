---
title: SafeAreaPlugin
category:
  - Plugin
tag: 
  - status-bar
---

The SafeAreaPlugin interface represents the safe area of the screen;
The safe area is strongly associated with system bars and hardware;

```javascript
import { safeAreaPlugin } from "@plaoc/plugins";
safeAreaPlugin.setOverlay(true)
```

## Properties

- [SafeAreaPlugin.state](./state.md)

  The state object of the safe area;
  The property value is an object implementing the [StateObserver](../../interface/state-observer/index.md) interface;
  

## Methods

  - [SafeAreaPlugin.getOverlay()](./get-overlay.md)  

    Query the overlay status;
    If the resolved Promise object is true;
    It indicates the content in the safe area will be overlapped by system bars;

  - [SafeAreaPlugin.getState([force_update])](./get-state.md)

    Get the state of the safe area;

  - [SafeAreaPlugin.setOverlay()](./set-overlay.md)

    Set the overlay status;
    If set to true;
    It indicates the content in the safe area will be overlapped by system bars;

  - [SafeAreaPlugin.setState()](./set-state.md)

    Set the state of the safe area;

  - [SafeAreaPlugin.setStateByKey()](./set-state-by-key.md)

    Set the value of a state in the safe area;


## Events

- None


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| state        | ✅      | ✅  | ✅          | X       |
| getOverlay   | ✅      | ✅  | ✅          | X       |  
| getState     | ✅      | ✅  | ✅          | X       |
| setOverlay   | ✅      | ✅  | ✅          | X       |
| setState     | ✅      | ✅  | ✅          | X       |
| setStateByKey| ✅      | ✅  | ✅          | X       |


## Related Links

[Plaoc](../../)