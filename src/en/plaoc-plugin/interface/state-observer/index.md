---
title: StateObserver
category:
  - Interface
tag:
  - StateObserver
---

The StateObserver interface is a basic listening interface that monitors the Plugin state;
This interface is an internal interface. To get a specific instance, please access it through the Plugin.state property

```javascript
import { statusBarPlugin } from "@plaoc/plugins";

statusBarPlugin.state.onChange((info) => {
  // 当 state 发生变化的时候调用
})

```


## Property

  - StateObserver.currentState

    the current state object;
    The value of the property is a [State](../state/index.md) object;
    The acquisition and setting of the state can be achieved through currentState; \[Generally speaking, do not manually set the attribute value of currentState, this value will be automatically updated\]
    The property value is undefined until the initial update is complete

## Method

  - [StateObserver.*jsonlines()](./jsonlines.md)

    is a Generator function;
    Realized the reading and monitoring of plug-in status;
    Once the state of the corresponding plug-in changes, it will trigger the listener set by the StateObserver.onChange() method;

  - [StateObserver.stopObserve()](./stopObserve.md)

    stop listening status

  - [StateObserver.onChange(listener)](./onChange.md)

    Add a listener; multiple listeners can be added through multiple calls;

  - [StateObserver.getState([force_update])](./getState.md)

    Get the value of the current state

## Event

  - none

## Platform Compatibility


| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| currentState           | ✅      | ✅  | ✅          | X       |
| jsonlines              | ✅      | ✅  | ✅          | X       |
| stopObserve            | ✅      | ✅  | ✅          | X       |
| onChange               | ✅      | ✅  | ✅          | X       |
| getState               | ✅      | ✅  | ✅          | X       |
 

## Related Links

[Plugin](../../plugin/)