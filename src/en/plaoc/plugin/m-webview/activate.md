---
title: MWebviewPlugin.activate()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - activate
---

Activate mwebview

```js
MWebviewPlugin.activate()
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
mwebviewPlugin.activate()
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| activate             | ✅       | ✅  | ✅         | X       |

## Related Links

[MWebviewPlugin](./index.md)


