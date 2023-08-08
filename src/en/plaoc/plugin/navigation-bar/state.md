---
title: NavigationBarPlugin.state
category:
  - Plugin 
tag:
  - plugin
  - StateObserve
  - state
---

  The status object of the system navigation bar;
  The attribute value is an object that implements the [StateObserver](../../interface/state-observer/index.md) interface;

## Property 

  - state.currentState

    the current state object;
    The value of the attribute is an object that implements part of the [State](../../interface/state/index.md) interface;
    The acquisition and setting of the state can be achieved through currentState; \[Generally speaking, do not manually set the attribute value of currentState, this value will be automatically updated\]
    The attribute value is undefined until the initial update is complete;
    The list of legal properties for currentStat includes:
    \["overlay","visible","style","color","insets"\]

## Method

  - [state.*jsonlines()](../../interface/state-observer/jsonlines.md)

    is a Generator function;
    Realized the reading and monitoring of plug-in status;
    Once the state of the corresponding plug-in changes, it will trigger the listener set by the StateObserver.onChange() method;

  - [state.stopObserve()](../../interface/state-observer/stopObserve.md)

    stop listening status

  - [state.onChange(listener)](../../interface/state-observer/onChange.md)

    Add a listener; multiple listeners can be added through multiple calls;


  - [state.getState([force_update])](../../interface/state-observer/getState.md)

    Get the value of the current state

## Event

  - none

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| currentState         | ✅      | ✅  | ✅          | X       |
| jsonlines            | ✅      | ✅  | ✅          | X       |
| stopObserve          | ✅      | ✅  | ✅          | X       |
| onChange             | ✅      | ✅  | ✅          | X       |
| getState             | ✅      | ✅  | ✅          | X       |


## Related Links
[NavigationBarPlugin](./index.md)


