---
title: TorchPlugin.getTorchState()
category:
  - Plugin 
tag:
  - TorchPlugin
  - getTorchState
---

Get the status of the flashlight

```js
TorchPlugin.getTorchState()
```

## parameters

  - none

## return value

  Return a Promise, resolve to fulfill a boolean;
  A value describing whether the torch is off;

## Example
```js
import { torchPlugin } from "@plaoc/plugins";
;(async () => {
  const b = await torchPlugin.getTorchState()
  console.log(b ? "手电筒打开中" : "手电同关闭中")
})();
```

## Platform Compatibility

| Property/Method/Event     | Android | IOS | Desktop-Dev | Desktop |
|:-------------------------:|:-------:|:---:|:-----------:|:-------:|
| getTorchState             | ✅       | ✅  | ✅          | X       |

## Related Links

[TorchPlugin](./index.md)


