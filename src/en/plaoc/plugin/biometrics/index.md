---
title: BiometricsPlugin
category:
  - Plugin
tag:
  - BiometricsPlugin  
---

BiometricsPlugin is a plugin that implements biometrics authentication interfaces.

```javascript
import { biometricsPlugin } from "@plaoc/plugins";
biometricsPlugin.check();
```

## Properties

- None

## Methods  

- [BiometricsPlugin.check()](./check.md)

  Checks if biometrics authentication is supported.

- [BiometricsPlugin.biometrics()](./biometrics.md)

  Initiates biometrics authentication.

## Events

- None

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| check                | ✅      | ✅  | ✅          | X       |
| biometrics           | ✅      | ✅  | ✅          | X       |


## See Also

[Plaoc](../)