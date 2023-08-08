---
title: NavigationBarPlugin
category:
  - Plugin
tag:
  - NavigationBarPlugin
---

The NavigationBarPlugin interface is used to represent the elements of the system navigation bar, and provides properties and methods for accessing the system navigation bar

```javascript
import { navigationBarPlugin } from "@plaoc/plugins";

// 设置导航栏的颜色
navigationBarPlugin.setColor("#FF0000FF")
 
```

## Property

  - [NavigationBarPlugin.state](./state.md)

    The status object of the system navigation bar;
    The attribute value is an object that implements the [StateObserver](../../interface/state-observer/index.md) interface;

## Method

  - [NavigationBarPlugin.getColor()](./get-color.md)

    Query the color of the system navigation bar \[background color\];

  - [NavigationBarPlugin.getOverlay()](./get-overlay.md)

    Query whether the system navigation bar covers the content of the App;

  - [NavigationBarPlugin.getState([force_update])](./get-state.md)

    Query the status of the system navigation bar;

  - [NavigationBarPlugin.getStyle()](./get-style.md)

    Query the style of the system navigation bar;

  - [NavigationBarPlugin.getVisible()](./get-visible.md)

    Query whether the system navigation bar is displayed;
    Returns a Promise object; resolve fulfills a boolean

  - [NavigationBarPlugin.hide()](./hide.md)

    Hide the system navigation bar;

  - [NavigationBarPlugin.setColor()](./set-color.md)

    Set the color of the system navigation bar;

  - [NavigationBarPlugin.setOverlay()](./set-overlay.md)

    Set whether the system navigation bar covers the App;

  - [NavigationBarPlugin.setState()](./set-state.md)

    Set the state of the system navigation bar;

  - [NavigationBarPlugin.setStateByKey()](./set-state-by-key.md)

    Set the value of a certain state of the system navigation bar;

  - [NavigationBarPlugin.setStyle()](./set-style.md)

    Set the style of the system navigation bar;

  - [NavigationBarPlugin.setVisible()](./set-visible.md)
    
    Set whether the system navigation bar is visible;

  - [NavigationBarPlugin.show()](./show.md)

    Show system navigation bar;



## Event

  - none


## Platform Compatibility


| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| state                | ✅      | ✅  | ✅          | X       |
| getColor             | ✅      | ✅  | ✅          | X       |
| getOverlay           | ✅      | ✅  | ✅          | X       |
| getState             | ✅      | ✅  | ✅          | X       |
| getStyle             | ✅      | ✅  | ✅          | X       |
| getVisible           | ✅      | ✅  | ✅          | X       |
| hide                 | ✅      | ✅  | ✅          | X       |
| setColor             | ✅      | ✅  | ✅          | X       |
| setOverlay           | ✅      | ✅  | ✅          | X       |
| setState             | ✅      | ✅  | ✅          | X       |
| setStateByKey        | ✅      | ✅  | ✅          | X       |
| setStyle             | ✅      | ✅  | ✅          | X       |
| setVisible           | ✅      | ✅  | ✅          | X       |
| show                 | ✅      | ✅  | ✅          | X       |


## Related Links

[Plaoc](../)


