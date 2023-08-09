---
title: NavigationBarPlugin
category:
  - Plugin
tag:
  - NavigationBarPlugin
---

The NavigationBarPlugin interface represents the system navigation bar and provides access to its properties and methods.

```javascript
import { navigationBarPlugin } from "@plaoc/plugins";

// Set navigation bar color  
navigationBarPlugin.setColor("#FF0000FF")
 
```

## Properties

- [NavigationBarPlugin.state](./state.md)

  The state object of the system navigation bar; 
  
  The value is an object implementing the [StateObserver](../../interface/state-observer/index.md) interface;
  

## Methods

- [NavigationBarPlugin.getColor()](./get-color.md)

  Get the background color of the system navigation bar;

- [NavigationBarPlugin.getOverlay()](./get-overlay.md)

  Check if the system navigation bar overlays app content; 

- [NavigationBarPlugin.getState([force_update])](./get-state.md)

  Get the state of the system navigation bar;

- [NavigationBarPlugin.getStyle()](./get-style.md)

  Get the style of the system navigation bar;
  
- [NavigationBarPlugin.getVisible()](./get-visible.md)

  Check if the system navigation bar is visible;
  Returns a Promise resolving to a boolean;

- [NavigationBarPlugin.hide()](./hide.md)

  Hide the system navigation bar;
  
- [NavigationBarPlugin.setColor()](./set-color.md)

  Set the color of the system navigation bar;

- [NavigationBarPlugin.setOverlay()](./set-overlay.md)

  Set whether the system navigation bar overlays app content;

- [NavigationBarPlugin.setState()](./set-state.md)

  Set the state of the system navigation bar;  

- [NavigationBarPlugin.setStateByKey()](./set-state-by-key.md)

  Set a specific state value of the system navigation bar;

- [NavigationBarPlugin.setStyle()](./set-style.md)

  Set the style of the system navigation bar;

- [NavigationBarPlugin.setVisible()](./set-visible.md)
  
  Set whether the system navigation bar is visible;

- [NavigationBarPlugin.show()](./show.md)

  Show the system navigation bar;




## Events

- None


## Platform Support


| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
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