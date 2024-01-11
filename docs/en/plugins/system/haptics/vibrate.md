---
title: HapticsPlugin.vibrate()
category:
  - Plugin
tag:
  - HapticsPlugin
  - vibrate
---

Custom vibration feedback effect.

```js 
HapticsPlugin.vibrate(options)
```

## Parameters  

- options: Options parameter with value [VibrateOptions](../../interface/vibrate-options/index.md) object.

## Returns

A Promise.

## Example

```js
import { hapticsPlugin } from "@plaoc/plugins";

hapticsPlugin.vibrate({duration: [1000, 100]});
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|  
| vibrate               | ✅      | ✅  | ✅          | X       |

## See Also

[HapticsPlugin](./index.md)