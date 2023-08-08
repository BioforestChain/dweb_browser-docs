---
title: HapticsPlugin
category:
  - Plugin
tag:
  - HapticsPlugin
---

HapticsPlugin gives users physical feedback of vibration through touch;
Visually implement feedback through messages in the Desktop-dev environment;

```js
import { hapticsPlugin } from "@plaoc/plugin";
```

## Property

  - isIOSDWebBrowser

    static property;
    Determine whether it is an IOS browser environment;
    The attribute value is a boolean;


## Method

  - [HapticsPlugin.impactLight()](./impact-light.md)

    touch light objects
  
  - [HapticsPlugin.notification()](./notification.md)

    vibration notification effect
  
  - [HapticsPlugin.vibrateClick()](./vibrate-click.md)

    click effect
  
  - [HapticsPlugin.vibrateDisabled()](./vibrate-disbled.md)

    Disable feedback vibration for gestures
  
  - [HapticsPlugin.vibrateDoubleClick()](./vibrate-double-click.md)

    double click effect

  - [HapticsPlugin.vibrateHeavyClick](./vibrate-heavy-click.md)

    The effect of the swipe gesture
  
  - [HapticsPlugin.vibrateTick()](./vibrate-tick.md)

    tick effect
  
  - [HapticsPlugin.vibrate()](./vibrate.md)

    Set custom effects

## Event

  - 无

## Platform Compatibility

| Property/Method/Event      | Android | IOS | Desktop-Dev | Desktop |
|:--------------------------:|:-------:|:---:|:-----------:|:-------:|
| impactLight                | ✅      | ✅  | ✅          | X       |
| notification               | ✅      | ✅  | ✅          | X       |
| vibrateClick               | ✅      | ✅  | ✅          | X       |
| vibrateDisabled            | ✅      | ✅  | ✅          | X       |
| vibrateDoubleClick         | ✅      | ✅  | ✅          | X       |
| vibrateHeavyClick          | ✅      | ✅  | ✅          | X       |
| vibrateTick                | ✅      | ✅  | ✅          | X       |
| vibrate                    | ✅      | ✅  | ✅          | X       |

## Related Links

[Plaoc](../index.md)


