---
title: SharePlugin.canShare()
category:
  - Plugin
tag:
  - SahrePlugin
  - canShare
---

can share;

```js
SharePlugin.canShare()
```

## parameters

  - none

## return value

  Return a Promise,resolve to fulfill a boolean;

## Example
```js
import { sharePlugin } from "@plaoc/plugin";
;(async() => {
  const b = await sharePlugin.canShare()
})();

```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| canShare             | ✅       | ✅  | ✅          | X       |

## Related Links

[SharePlugin](./index.md)


