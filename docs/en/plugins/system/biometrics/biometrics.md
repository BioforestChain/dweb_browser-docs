---
title: BiometricsPlugin.biometrics()
category:
  - Plugin
tag:
  - BiometricsPlugin
  - biometrics
---

Initiate biometrics authentication.

```js
BiometricsPlugin.biometrics()
```

## Parameters

- None

## Returns

- A Promise that resolves to a [BiometricsResult](../../interface/biometrics-result/index.md) object.

## Example

```js
import { biometricsPlugin } from "@plaoc/plugins";
const value = biometricsPlugin.biometrics();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop | 
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| biometrics            | ✅      | ✅  | ✅          | X       |

## See Also

[BiometricsPlugin](./index.md)