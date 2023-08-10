---
title: BaseEvent
category:
  - Interface
tag:
  - BaseEvent  
---

BaseEvent is a base class that inherits from [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), but it is used for other elements to inherit and cannot be instantiated directly.

## Properties
  
  - app_kit

    Used to store all event listeners; 
    The property value is a [Tkit](../tkit/index.md) object;

## Methods

  - [BaseEvent.addEventListener()](./add-event-listener.md)  

    Adds an event listener

  - [BaseEvent.removeEventListener()]()

    Removes an event listener
    
  - [BaseEvent.dispatchEvent()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)

    Dispatches an event

## Events  

  - No predefined events

## Platform Compatibility  

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:----------:|:-------:|  
| app_kit               | ✅      | ✅   | ✅          | X       |
| addEventListener      | ✅      | ✅   | ✅         | X       |
| removeEventListener   | ✅      | ✅   | ✅         | X       |
| dispatchEvent         | ✅      | ✅   | ✅         | X       |

## Related Links

[Interface](../index.md)