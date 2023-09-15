---
title: HapticsPlugin.vibrateDisabled()
category:
  - Plugin
tag:
  - HapticsPlugin
  - vibrateDisabled  
---

Disabled gesture feedback vibration.

```js
HapticsPlugin.vibrateDisabled()
```

## Parameters

- None

## Returns  

A Promise.

## Example

```js
import { hapticsPlugin } from "@plaoc/plugins";

hapticsPlugin.vibrateDisabled();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| vibrateDisabled       | ✅      | ✅  | ✅          | X       |

## See Also

[HapticsPlugin](./index.md)