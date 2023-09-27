---
title: DevicePlugin.getUUID()
category:
  - Plugin
tag:
  - DevicePlugin
  - getUUID
---

Gets the device identifier.

```js
import { devicePlugin } from "@plaoc/plugins";
devicePlugin.getUUID() 
```

## Parameters

- None

## Returns

A Promise that resolves to a [ResponseUUIDData](../../interface/response-uuid-data/index.md) object.

## Example

```js
import { devicePlugin } from "@plaoc/plugins";
devicePlugin.getUUID();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| getUUID               | ✅      | ✅  | ✅          | X       |

## See Also

[DevicePlugin](./index.md)