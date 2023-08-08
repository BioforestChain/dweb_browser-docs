---
title: HapticsPlugin.impactLight()
category:
  - Plugin
tag:
  - HapticsPlugin
  - impactLight
---

Used to simulate the mass of objects in collision;


```js
HapticsPlugin.impactLight(options)
```

## parameters

  - options

    The parameter value is a [ImpactOptions](../../interface/impact-options/index.md) type;
    

## return value

  returns a Promise;

## Example
```js
import { hapticsPlugin } from "@plaoc/plugin";
hapticsPlugin.impactLight({
  style: "HEAVY"
})
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| options              | ✅       | ✅  | ✅         | X       |

## Related Links

[HapticsPlugin](../index.md)


