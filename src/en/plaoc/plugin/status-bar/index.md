---
title: StatusBarPlugin
category:
  - Plugin
tag:
  - status-bar
---

The StatusBarPlugin interface is used to represent the system status bar element, and provides properties and methods for accessing the system status bar

```javascript
import { statusBarPlugin } from "@plaoc/plugins";

// 设置状态栏的颜色
statusBarPlugin.setColor("#FF0000FF")
 
```

## Property

- [StatusBarPlugin.state](./state.md)

  The status object of the system status bar;
  The attribute value is an object that implements the [StateObserver](../../interface/state-observer/index.md) interface;

## Method

- [StatusBarPlugin.getColor()](./get-color.md)

  Query the color of the system status bar \[background color\];

- [StatusBarPlugin.getOverlay()](./get-overlay.md)

  Query whether the system status bar covers the content of the App;

- [StatusBarPlugin.getState([force_update])](./get-state.md)

  Query the status of the system status bar;

- [StatusBarPlugin.getStyle()](./get-style.md)

  Query the style of the system status bar;

- [StatusBarPlugin.getVisible()](./get-visible.md)

  Query whether the system status bar is displayed;
  Returns a Promise object; resolve fulfills a boolean

- [StatusBarPlugin.hide()](./hide.md)

  Hide the system status bar;

- [StatusBarPlugin.setColor()](./set-color.md)

  Set the color of the system status bar;;

- [StatusBarPlugin.setOverlay()](./set-overlay.md)

  Set whether the system status bar covers the App;

- [StatusBarPlugin.setState()](./set-state.md)

  Set the state of the system status bar;

- [StatusBarPlugin.setStateByKey()](./set-state-by-key.md)

  Set the value of a state in the system status bar;

- [StatusBarPlugin.setStyle()](./set-style.md)

  Set the style of the system status bar;;

- [StatusBarPlugin.setVisible()](./set-visible.md)
  
  Set whether the system status bar is visible;

- [StatusBarPlugin.show()](./show.md)

  Display the system status bar;



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


