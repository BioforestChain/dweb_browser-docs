---
title: HapticsPlugin.impactLight()
category:
  - Plugin
tag:
  - HapticsPlugin
  - impactLight
---

Simulates a light impact between virtual objects.

```js
HapticsPlugin.impactLight(options)
```

## Parameters

- options: Options of type [ImpactOptions](../../interface/impact-options/index.md).

## Returns

A Promise.

## Example

```js
import { hapticsPlugin } from "@plaoc/plugins";

hapticsPlugin.impactLight({
  style: "HEAVY"
});
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| impactLight           | ✅      | ✅  | ✅          | X       |

## See Also

[HapticsPlugin](../index.md)