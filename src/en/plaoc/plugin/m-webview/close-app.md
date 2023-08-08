---
title: MWebviewPlugin.closeApp()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - closeApp
---

Close the entire application, command to close the front end, and the service will not be closed

```js
MWebviewPlugin.closeApp()
```

## parameters

  - none

## return value

  Return a Promise, and resolve fulfills a boolean;
  Activation successfully fulfilled true;
  Activation failed to honor false;

## Example
```js
import { mwebviewPlugin } from "@plaoc/plugin";
mwebviewPlugin.closeApp()
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| closeApp             | ✅       | ✅  | ✅         | X       |

## Related Links

[MWebviewPlugin](./index.md)


