---
title: HTMLDwebHapticsElement
category:
  - WebComponent
tag:
  - HTMLDwebHapticsElement
---

An HTMLElement for haptic vibration feedback;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);


```html
<dweb-haptics></dweb-haptics>
```

## Properties

  - plugin

    A [HapticsPlugin](../../plugin/haptics/index.md) object;

  - vibrate

    The [HapticsPlugin.vibrate()](../../plugin/haptics/vibrate.md) method

  - impactLight

    The [HapticsPlugin.impactLight()](../../plugin/haptics/impact-light.md) method

  - notification

    The [HapticsPlugin.notification()](../../plugin/haptics/notification.md) method

  - vibrateClick

    The [HapticsPlugin.vibrateTick()](../../plugin/haptics/vibrate-click.md) method

  - vibrateDisabled

    The [HapticsPlugin.vibrateDisabled()](../../plugin/haptics/vibrate-disabled.md) method

  - vibrateDoubleClick

    The [HapticsPlugin.vibrateDoubleClick()](../../plugin/haptics/vibrate-double-click.md) method

  - vibrateHeavyClick

    The [HapticsPlugin.vibrateHeavyClick](../../plugin/haptics/vibrate-heavy-click.md) method

  - vibrateTick

    The [HapticsPlugin.vibrateTick()](../../plugin/haptics/vibrate-tick.md) method


## Methods

  - None

## Events

  - No predefined events

## Example

```html
<body>
  <dweb-haptics></dweb-haptics>
  
  <script type="text/javascript">
    const dwebHaptics = document.querySelector("dweb-haptics");
    dwebHaptics.vibrateDisabled();
  </script>
</body>
```


## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------------:|:-------:|:---:|:-----------:|:-------:|  
| plugin             | ✅      | ✅   | ✅           | X       |
| vibrate            | ✅      | ✅   | ✅           | X       |
| impactLight        | ✅      | ✅   | ✅           | X       |
| notification       | ✅      | ✅   | ✅           | X       |
| vibrateClick       | ✅      | ✅   | ✅           | X       |
| vibrateDisabled    | ✅      | ✅   | ✅           | X       |
| vibrateDoubleClick | ✅      | ✅   | ✅           | X       |  
| vibrateHeavyClick  | ✅      | ✅   | ✅           | X       |
| vibrateTick        | ✅      | ✅   | ✅           | X       |

## Related Links

 [Plaoc WebComponent](../index.md)

[HapticsPlugin](../../plugin/haptics/index.md)