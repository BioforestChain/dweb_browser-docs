---
title: UpdateControllerPlugin.cancel()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - cancel
---

Cancel App Download

```js
UpdateControllerPlugin.cancel()
```

## parameters

  - none

## return value

  Return a Promise, resolve to honor a boolean

## Example
```js
import { dwebServiceWorkerPlugin } from "@plaoc/plugin"
dwebServiceWorkerPlugin.updateController.cancel()
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| cancel               | ✅       | ✅  | ✅          | X       |

## Related Links

[UpdateControllerPlugin](./index.md)


