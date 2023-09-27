---
title: HTMLDwebSafeAreaElement
category:
  - WebComponent
tag:
  - HTMLDwebSafeAreaElement  
---

A WebComponent for accessing the system safe area;
Inherits from [HTMLStateObserverElement](../state-observer/index.md);

```html
<dweb-safe-area></dweb-safe-area>
```

## Properties

  - plugin

    A [SafeAreaPlugin](../../plugin/safe-area/index.md) object;
  
  - state

    A [SafeAreaPlugin.state](../../plugin/safe-area/state.md) object;

  - getState

    The [SafeAreaPlugin.getState()](../../plugin/safe-area/get-state.md) method;

  - setState

    The [SafeAreaPlugin.setState()](../../plugin/safe-area/set-state.md) method;

  - setOverlay

    The [SafeAreaPlugin.setOverlay()](../../plugin/safe-area/set-overlay.md) method;

  - getOverlay

    The [SafeAreaPlugin.getOverlay()](../../plugin/safe-area/get-overlay.md) method;

## Methods

  - None  

## Events

  - "statechange"

    Triggered when state changes;
    Passes a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) object to listener;
    CustomEvent.detail is a [SafeAreaPlugin.state](../../plugin/safe-area/state.md) object;

## Example
  ```html
  <body>
    <dweb-safe-area></dweb-safe-area>
    <script type="text/javascript">
      const dwebSafeArea = document.querySelector("dweb-safe-area");
      dwebSafeArea.addEventListener('statechange', (customEvent) => {

      })
    </script>
  </body>
  ```


## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅   | ✅           | X       | 
| state        | ✅      | ✅   | ✅           | X       |
| getState     | ✅      | ✅   | ✅           | X       |
| setState     | ✅      | ✅   | ✅           | X       |
| setOverlay   | ✅      | ✅   | ✅           | X       |
| getOverlay   | ✅      | ✅   | ✅           | X       |

## Related Links  

 [Plaoc WebComponent](../index.md)

[SafeAreaPlugin](../../plugin/safe-area/index.md)