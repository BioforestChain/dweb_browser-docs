---
title: Tkit
category:
  - Interface
tag:
  - Tkit
---

 

## Property

  - _listeners

    Used to save all listeners;
    The type of the attribute value is an Object;
    key is the event name
    value is an Array, and the index item is a function that accepts any argument;

  - _windowListeners

    Used to save event monitoring;
    The property value is an Object
    key is the name of the event
    value is a [WindowListenerHandle](../window-listener-handle/index.md) object;

## Method

  - none

## Event

  - none

## Platform Compatibility

| Property/Method/Event          | Android | IOS | Desktop-Dev | Desktop |
|:------------------------------:|:-------:|:---:|:-----------:|:-------:|
| _listeners                     | ✅      | ✅  | ✅           | X       |
| _windowListeners               | ✅      | ✅  | ✅           | X       |

## Related Links

[NetWorkPlugin](../../plugin/network/index.md)


