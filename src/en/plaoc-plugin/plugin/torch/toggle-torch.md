---
title:  TorchPlugin.toggleTorch()
category:
  - Plugin
tag:
  - TorchPlugin
  - toggleTorch
---

Turn the flashlight on or off;

```js
 TorchPlugin.toggleTorch()
```

## parameters

  - none

## return value

  Return a Promise, resolve to fulfill a boolean;

## Example
```js
import { torchPlugin } from "@plaoc/plugin";
;(async () => {
  const b = torchPlugin.toggleTorch();
  cosole.log(b ? "打开了手电筒": "关闭了手电筒");
})();
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| toggleTorch          | ✅       | ✅  | ✅          | X       |

## Related Links

[TorchPlugin](./index.md)


