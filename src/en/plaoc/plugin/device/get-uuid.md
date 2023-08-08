---
title: DevicePlugin. getUUID()
category:
   - Plugins
tag:
   - DevicePlugin
   - getUUID
---

Get the identifier of the device

```js
import { devicePlugin } from "@plaoc/plugin";
devicePlugin. getUUID()
```

## parameters

   - none

## return value

  Return a Promise, resolve to fulfill a [$ResponseUUIDData](../../interface/response-uuid-data/index.md) object

## Example

```js
import { devicePlugin } from "@plaoc/plugin";
devicePlugin. getUUID()
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:--- ----:|
| getUUID              | ✅ | ✅ | ✅ | X |

## Related Links

[DevicePlugin](./index.md)