---
title: HTMLDwebStatusBarElement
category:
  - WebComponent
tag:
  - HTMLDwebStatusBarElement
---

A WebComponent for accessing the system status bar;
Inherits from [HTMLStateObserverElement](../state-observer/index.md);

```html
<dweb-status-bar></dweb-status-bar>
```

## Properties

  - plugin

    A [StatusBarPlugin](../../plugin/status-bar/index.md) object;

  - state

    The [StatusBarPlugin.state](../../plugin/status-bar/state.md) object;

  - setColor

    The [StatusBarPlugin.setColor()](../../plugin/status-bar/set-color.md) method

  - getColor

    The [StatusBarPlugin.getColor()](../../plugin/status-bar/get-color.md) method

  - setStyle

    The [StatusBarPlugin.setStyle()](../../plugin/status-bar/set-style.md) method

  - getStyle

    The [StatusBarPlugin.getStyle()](../../plugin/status-bar/get-style.md) method

  - show

    The [StatusBarPlugin.show()](../../plugin/status-bar/show.md) method

  - hide

    The [StatusBarPlugin.hide()](../../plugin/status-bar/hide.md) method

  - setVisible

    The [StatusBarPlugin.setVisible()](../../plugin/status-bar/set-visible.md) method

  - getVisible

    The [StatusBarPlugin.getVisible()](../../plugin/status-bar/get-visible.md) method

  - getState

    The [StatusBarPlugin.getState()](../../plugin/status-bar/get-state.md) method

  - setOverlay

    The [StatusBarPlugin.setOverlay()](../../plugin/status-bar/set-overlay.md) method

  - getOverlay

    The [StatusBarPlugin.getOverlay()](../../plugin/status-bar/get-overlay.md) method

## Methods

  - None

## Events
  
  - "statechange"

    Triggered when state changes;
    Passes a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) object to listener;
    CustomEvent.detail is a [StatusBarPlugin.state](../../plugin/status-bar/state.md) object;

## Example

```html
<body>
  <dweb-status-bar></dweb-status-bar>

  <script type="text/javascript">
    const dwebStatusBar = document.querySelector("dweb-status-bar");
    dwebStatusBar.getOverlay();
  </script>
</body>
```

## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅   | ✅           | X       |
| state        | ✅      | ✅   | ✅           | X       |
| setColor     | ✅      | ✅   | ✅           | X       |
| getColor     | ✅      | ✅   | ✅           | X       |
| setStyle     | ✅      | ✅   | ✅           | X       |
| getStyle     | ✅      | ✅   | ✅           | X       |
| show         | ✅      | ✅   | ✅           | X       |
| hide         | ✅      | ✅   | ✅           | X       |
| setVisible   | ✅      | ✅   | ✅           | X       |
| getVisible   | ✅      | ✅   | ✅           | X       |
| getState     | ✅      | ✅   | ✅           | X       |
| setOverlay   | ✅      | ✅   | ✅           | X       |
| getOverlay   | ✅      | ✅   | ✅           | X       |

## Related Links

[WebComponent](../index.md)

[StatusBarPlugin](../../plugin/status-bar/index.md)