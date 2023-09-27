---
title: HTMLStateObserverElement
category:
  - WebComponent
tag:
  - HTMLStateObserverElement   
---

A WebComponent for state observation;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);
HTMLStateObserverElement serves as a base class,
inherited by:
[HTMLDwebNavigationBarElement](../navigation-bar/index.md) 
[HTMLDwebSafeAreaElement](../safe-area/index.md)
[HTMLDwebStatusBarElement](../status-bar/index.md)
[HTMLDwebVirtualKeyboardElement](../virtual-keyboard/index.md)
Please do not use this class directly;


## Properties

  - state

    The [StateObserver](../../interface/state-observer/index.md) object passed in by inheriting classes

## Methods  

  - HTMLStateObserverElement.connectedCallback

    Internal predefined method, do not override;

  - HTMLStateObserverElementdisconnectedCallback

    Internal predefined method, do not override; 

## Events

  - "statechange" 

    Triggered when state changes;
    Passes a CustomEvent object to listener;


## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop | 
|:-----------------:|:-------:|:---:|:-----------:|:-------:|
| state             | ✅      | ✅   | ✅           | X       |
| event statechange | ✅      | ✅   | ✅           | X       |

## Related Links

  [WebComponent](../index.md)