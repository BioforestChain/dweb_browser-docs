---
title: BiometricsPlugin.biometrics()
category:
  - Plugin
tag:
  - BiometricsPlugin
  - biometrics 
---

Turn on biometrics

```js
BiometricsPlugin.biometrics()
```

## parameters

  - none

## return value

  A Promise object, resolve fulfills a [BiometricsResult](../../interface/biometrics-result/index.md) object;

## Example
```js
import { biometricsPlugin } from "@plaoc/plugins";
const value = biometricsPlugin.biometrics()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| biometrics           | ✅      | ✅  | ✅          | X       |

## Related Links

[BiometricsPlugin](./index.md)


