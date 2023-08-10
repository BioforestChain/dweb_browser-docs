---
title: BaseEvent.removeEventListener()
category:  
  - Interface
tag:
  - BaseEvent
  - removeEventListener
---

Removes an event listener added by [BaseEvent.addEventListener()](./add-event-listener.md);

```js
BaseEvent.removeEventListener(
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

  void

## Example

  - None  

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:----------:|:-------:|
| removeEventListener     | ✅       | ✅   | ✅         | X       |

## Related Links

[BaseEvent](./index.md)