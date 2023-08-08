---
title: SafeAreaPlugin.getOverlay()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - getOverlay 
---

Query the coverage status of the safe area;

```js
SafeAreaPlugin.getOverlay()
```

## parameters

  - none

## return value

  A Promise object, resolve fulfills boolean;
  If the cashed value is true, it means that the content of the app in the safe area will be partially covered by the system bar;
  If the honored value is false, it means that the content of the app in the safe area will not be partially covered by the system bar;

## Example
```js
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.getOverlay()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay           | ✅      | ✅  | ✅          | X       |

## Related Links

[SafeAreaPlugin](./index.md)


