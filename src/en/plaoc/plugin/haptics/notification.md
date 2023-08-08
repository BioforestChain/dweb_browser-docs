---
title: HapticsPlugin.notification()
category:
  - Plugin
tag:
  - HapticsPlugin
  - notification
---

vibration notification effect

```js
HapticsPlugin.notification(options)
```

## parameters

  The options parameter is a [NotificationOptions](../../interface/notification-options/index.md) object;

## return value

  returns a promise

## Example
```js
import { hapticsPlugin } from "@plaoc/plugin";
hapticsPlugin.notification({
  type: "SUCCESS"
})
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| notification         | ✅       | ✅  | ✅          | X       |

## Related Links
[HapticsPlugin](./index.md)


