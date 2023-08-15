---
title: BaseEvent.addEventListener()
category:
  - Interface
tag:
  - BaseEvent 
  - addEventListener
---

Adds an event listener;

```js
BaseEvent.addEventListener(
  eventName,
  listener,  
  options,
)
```

## Parameters

  - eventName

    The name of the event type;
    The parameter value is a string;

  - listener

    The event listener;
    The parameter value is a [ListenerCallback]() function;   

  - options

    Optional parameter;
    Option parameters;
    The parameter value is a boolean type, or an [AddEventListenerOptions]() object;
    

## Return Value

  Returns a Promise that resolves to an Object;
  The Object's remove property is a method to remove the currently added event listener;
  Calling `Object.remove()` directly can remove the listener;

## Example

  - None
  

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:----------:|:-------:|
| addEventListener      | ✅       | ✅   | ✅         | X       |

## Related Links

[BaseEvent](./index.md)