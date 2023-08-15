---
title: BiometricsPlugin.check()
category:
  - Plugin
tag: 
  - BiometricsPlugin
  - check
---

Checks if biometrics authentication is supported on the current platform.

```js
BiometricsPlugin.check()
```

## Parameters

- None

## Returns

- A Promise that resolves to a boolean.

## Example

```js
import { biometricsPlugin } from "@plaoc/plugins";
const value = biometricsPlugin.check();
```

## Platform Compatibility 

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|  
| check                | ✅      | ✅  | ✅          | X       |

## See Also

[BiometricsPlugin](./index.md)