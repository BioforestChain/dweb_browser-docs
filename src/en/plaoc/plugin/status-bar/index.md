Here is the English translation:

---
title: StatusBarPlugin
category:
  - Plugin
tag:
  - status-bar
---

The StatusBarPlugin interface represents the system status bar element and provides access to the properties and methods of the system status bar

```javascript
import { statusBarPlugin } from "@plaoc/plugins";

// Set status bar color
statusBarPlugin.setColor("#FF0000FF")
```

## Properties

- [StatusBarPlugin.state](./state.md)

  The state object of the system status bar;
  The property value is an object implementing the [StateObserver](../../interface/state-observer/index.md) interface;

## Methods

- [StatusBarPlugin.getColor()](./get-color.md)

  Get the color [background color] of the system status bar;

- [StatusBarPlugin.getOverlay()](./get-overlay.md)

  Check if the system status bar overlaps the APP content;

- [StatusBarPlugin.getState([force_update])](./get-state.md)

  Get the state of the system status bar;  

- [StatusBarPlugin.getStyle()](./get-style.md)

  Get the style [foreground color] of the system status bar;

- [StatusBarPlugin.getVisible()](./get-visible.md)

  Check if the system status bar is visible;
  Returns a Promise object that resolves to a boolean;

- [StatusBarPlugin.hide()](./hide.md)

  Hide the system status bar;

- [StatusBarPlugin.setColor()](./set-color.md)

  Set the color of the system status bar;

- [StatusBarPlugin.setOverlay()](./set-overlay.md)

  Set whether the system status bar overlaps the APP;  

- [StatusBarPlugin.setState()](./set-state.md)

  Set the state of the system status bar;

- [StatusBarPlugin.setStateByKey()](./set-state-by-key.md)

  Set the value of a state in the system status bar;

- [StatusBarPlugin.setStyle()](./set-style.md)

  Set the style of the system status bar;

- [StatusBarPlugin.setVisible()](./set-visible.md)
  
  Set whether the system status bar is visible;

- [StatusBarPlugin.show()](./show.md)

  Show the system status bar;



## Events

- None


## Platform Compatibility


| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| state        | ✅      | ✅  | ✅          | X       |
| getColor     | ✅      | ✅  | ✅          | X       |
| getOverlay   | ✅      | ✅  | ✅          | X       |
| getState     | ✅      | ✅  | ✅          | X       |
| getStyle     | ✅      | ✅  | ✅          | X       |
| getVisible   | ✅      | ✅  | ✅          | X       |
| hide         | ✅      | ✅  | ✅          | X       |  
| setColor     | ✅      | ✅  | ✅          | X       |
| setOverlay   | ✅      | ✅  | ✅          | X       |
| setState     | ✅      | ✅  | ✅          | X       |
| setStateByKey| ✅      | ✅  | ✅          | X       |
| setStyle     | ✅      | ✅  | ✅          | X       |
| setVisible   | ✅      | ✅  | ✅          | X       |
| show         | ✅      | ✅  | ✅          | X       |


## Related Links  

[Plaoc](../)