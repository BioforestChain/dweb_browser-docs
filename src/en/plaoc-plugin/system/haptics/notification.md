---
title: HapticsPlugin.notification()
category:
  - Plugin
tag:
  - HapticsPlugin
  - notification
---

Notification vibration effect.

```js
HapticsPlugin.notification(options)
```

## Parameters

Options parameter is a [NotificationOptions](../../interface/notification-options/index.md) object.

## Returns

A promise.

## Example

```js
import { hapticsPlugin } from "@plaoc/plugins";

hapticsPlugin.notification({
  type: "SUCCESS" 
});
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| notification          | ✅      | ✅  | ✅          | X       |

## See Also
[HapticsPlugin](./index.md)