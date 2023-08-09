---
title: SafeAreaPlugin.state
category:
  - Plugin
tag:
  - plugin
  - StateObserve
  - state  
---

The state object of the system safe area;
The property value is an object implementing the [StateObserver](../../interface/state-observer/index.md) interface;


## Properties

  - state.currentState

    The current state object; 
    The value is an object implementing partial [State](../../interface/state/index.md) interface;
    currentState can be used to get and set states; [Do not manually set the value of currentState, it will be automatically updated]
    The value is undefined before the initial update completes;
    Valid currentState properties include: 
    ["overlay", "insets", "cutoutInsets", "outerInsets"]
   
## Methods

  - [state.*jsonlines()](../../interface/state-observer/jsonlines.md)

    A Generator function;
    Implements reading and listening to plugin states;
    Listeners set via StateObserver.onChange() will be triggered when corresponding plugin state changes;

  - [state.stopObserve()](../../interface/state-observer/stopObserve.md)  

    Stop observing state

  - [state.onChange(listener)](../../interface/state-observer/onChange.md)

    Add listener; multiple listeners can be added via multiple calls;

  - [state.getState([force_update])](../../interface/state-observer/getState.md)

    Get current state value

## Events

  - None

## Platform Compatibility  

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| currentState | ✅      | ✅  | ✅          | X       |
| jsonlines    | ✅      | ✅  | ✅          | X       |
| stopObserve  | ✅      | ✅  | ✅          | X       |
| onChange     | ✅      | ✅  | ✅          | X       |
| getState     | ✅      | ✅  | ✅          | X       |

## Related Links
[StatusBarPlugin](./index.md)