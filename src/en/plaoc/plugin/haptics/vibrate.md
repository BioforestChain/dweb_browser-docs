---
title: HapticsPlugin.vibrate()
category:
  - Plugin
tag:
  - HapticsPlugin
  - vibrate
---

The effect of customizing feedback;

```js
HapticsPlugin.vibrate(options)
```

## parameters

  - options

    The value of the option parameter is a [VibrateOptions](../../interface/vibrate-options/index.md) object;

    
## return value

  returns a Promise;;
  

## Example
```js
import { hapticsPlugin } from "@plaoc/plugin";
hapticsPlugin.vibrate({duration: [1000, 100]})
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| vibrate              | ✅       | ✅  | ✅         | X       |

## Related Links

[HapticsPlugin](./index.md)


