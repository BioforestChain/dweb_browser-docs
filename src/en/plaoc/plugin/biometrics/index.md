---
title: BiometricsPlugin
category:
  - Plugin
tag:
  - BiometricsPlugin
---

BiometricsPlugin is an interface for implementing biometrics;

```javascript
import { biometricsPlugin } from "@plaoc/plugins";
biometricsPlugin.check()
```

## Property

- none
   

## Method

  - [BiometricsPlugin.check()](./check.md)
    
    Check if the current platform supports biometrics

  - [BiometricsPlugin.biometrics()](./biometrics.md)

    Turn on biometrics;


## Event

  - none


## Platform Compatibility


| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| check                | ✅      | ✅  | ✅          | X       |
| biometrics           | ✅      | ✅  | ✅          | X       |


## Related Links

[Plaoc](../)


