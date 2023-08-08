---
title: BiometricsPlugin.check()
category:
  - Plugin
tag:
  - BiometricsPlugin
  - check 
---

Query whether the current platform supports biometrics

```js
BiometricsPlugin.check()
```

## parameters

  - none

## return value

  A Promise object that resolves to a boolean

## Example
```js
import { biometricsPlugin } from "@plaoc/plugins";
const value = biometricsPlugin.check()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| check                | ✅      | ✅  | ✅          | X       |

## Related Links

[BiometricsPlugin](./index.md)


