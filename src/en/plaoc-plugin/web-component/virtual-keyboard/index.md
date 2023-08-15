---
title: HTMLDwebVirtualKeyboardElement
category:
  - WebComponent
tag:
  - HTMLDwebVirtualKeyboardElement  
---

A WebComponent for accessing the system virtual keyboard;
Inherits from [HTMLStateObserverElement](../state-observer/index.md);

```html
<dweb-virtual-keyboard></dweb-virtual-keyboard>
```

## Properties

  - plugin

    A [VirtualKeyboardPlugin](../../plugin/virtual-keyboard/index.md) object

  - state

    A [VirtualKeyboardPlugin.state](../../plugin//virtual-keyboard/state.md) object;

  - getState

    The [VirtualKeyboardPlugin.getState()](../../plugin/virtual-keyboard/get-state.md) method

  - setState

    The [VirtualKeyboardPlugin.setState()](../../plugin/virtual-keyboard/set-state.md) method

  - setOverlay

    The [VirtualKeyboardPlugin.setOverlay()](../../plugin/virtual-keyboard/set-overlay.md) method

  - getOverlay

    The [VirtualKeyboardPlugin.getOverlay()](../../plugin/virtual-keyboard/get-overlay.md) method

## Methods

  - None

## Events

  - "statechange"

    Triggered when state changes;
    Passes a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) object to listener;
    CustomEvent.detail is a [VirtualKeyboardPlugin.state](../../plugin//virtual-keyboard/state.md) object;


## Example

```html
<body>
  <dweb-virtual-keyboard></dweb-virtual-keyboard>

  <script type="text/javascript">
    const dwebVirtualKeyboard = document.querySelector("dweb-virtual-keyboard");
    dwebVirtualKeyboard.addEventListener('statechange', (customEvent) => {

    });
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

[WebComponent](../index.md)

[VirtualKeyboardPlugin](../../plugin/virtual-keyboard/index.md)