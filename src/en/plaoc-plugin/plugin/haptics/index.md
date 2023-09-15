---
title: HapticsPlugin
category:
  - Plugin
tag:
  - HapticsPlugin
---

HapticsPlugin provides physical feedback through vibrations to the user. 
On Desktop-dev it provides visual feedback through messages.

```js
import { hapticsPlugin } from "@plaoc/plugins";
```

## Properties

- isIOSDWebBrowser

  Static property. 
  Checks if environment is iOS browser.
  Boolean value.


## Methods

  - [HapticsPlugin.impactLight()](./impact-light.md)

    Simulates a light impact.
  
  - [HapticsPlugin.notification()](./notification.md)

    Notification vibration effect.
  
  - [HapticsPlugin.vibrateClick()](./vibrate-click.md)

    Click effect.
  
  - [HapticsPlugin.vibrateDisabled()](./vibrate-disabled.md)

    Disabled gesture feedback.
  
  - [HapticsPlugin.vibrateDoubleClick()](./vibrate-double-click.md)

    Double click effect.

  - [HapticsPlugin.vibrateHeavyClick()](./vibrate-heavy-click.md)

    Heavy click gesture effect.
  
  - [HapticsPlugin.vibrateTick()](./vibrate-tick.md)

    Tick effect.
  
  - [HapticsPlugin.vibrate()](./vibrate.md)

    Custom vibration effect.

## Events  

- None

## Platform Compatibility

| Property/Method/Event    | Android | iOS | Desktop-Dev | Desktop |
|:------------------------:|:-------:|:---:|:-----------:|:-------:|
| impactLight              | ✅      | ✅  | ✅          | X       |
| notification             | ✅      | ✅  | ✅          | X       |
| vibrateClick             | ✅      | ✅  | ✅          | X       |
| vibrateDisabled          | ✅      | ✅  | ✅          | X       |
| vibrateDoubleClick       | ✅      | ✅  | ✅          | X       |
| vibrateHeavyClick        | ✅      | ✅  | ✅          | X       |  
| vibrateTick              | ✅      | ✅  | ✅          | X       |
| vibrate                  | ✅      | ✅  | ✅          | X       |

## See Also

[Plaoc](../../)