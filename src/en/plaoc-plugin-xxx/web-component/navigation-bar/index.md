---
title: HTMLDwebNavigationBarElement
category:
  - WebComponent
tag:
  - HTMLDwebNavigationBarElement   
---

A WebComponent for accessing the system navigation bar;
Inherits from [HTMLStateObserverElement](../state-observer/index.md);

```html
<dweb-navigation-bar></dweb-navigation-bar>
```

## Properties

  - plugin

    A [NavigationBarPlugin](../../plugin/navigation-bar/index.md) object;

  - state

    The [NavigationBarPlugin.state](../../plugin/navigation-bar/state.md) object;

  - setColor

    The [NavigationBarPlugin.setColor()](../../plugin/navigation-bar/set-color.md) method

  - getColor

    The [NavigationBarPlugin.getColor()](../../plugin/navigation-bar/get-color.md) method

  - setStyle

    The [NavigationBarPlugin.setStyle()](../../plugin/navigation-bar/set-style.md) method

  - getStyle

    The [NavigationBarPlugin.getStyle()](../../plugin/navigation-bar/get-style.md) method

  - show

    The [NavigationBarPlugin.show()](../../plugin/navigation-bar/show.md) method

  - hide

    The [NavigationBarPlugin.hide()](../../plugin/navigation-bar/hide.md) method

  - setVisible

    The [NavigationBarPlugin.setVisible()](../../plugin/navigation-bar/set-visible.md) method

  - getVisible

    The [NavigationBarPlugin.getVisible()](../../plugin/navigation-bar/get-visible.md) method

  - getState

    The [NavigationBarPlugin.getState()](../../plugin/navigation-bar/get-state.md) method

  - setOverlay

    The [NavigationBarPlugin.setOverlay()](../../plugin/navigation-bar/set-overlay.md) method

  - getOverlay

    The [NavigationBarPlugin.getOverlay()](../../plugin/navigation-bar/get-overlay.md) method

## Methods

  - None

## Events 

  - "statechange"

    Triggered when state changes;
    Passes a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) object to listener;
    CustomEvent.detail is a [NavigationBarPlugin.state](../../plugin/navigation-bar/state.md) object;

## Example

```html
<body>
  <dweb-navigation-bar></dweb-navigation-bar>

  <script type="text/javascript">
    const dwebNavigationBar = document.querySelector("dweb-navigation-bar");
    dwebNavigationBar.getOverlay(); 
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

 [Plaoc WebComponent](../index.md)

[NavigationBarPlugin](../../plugin/navigation-bar/index.md)