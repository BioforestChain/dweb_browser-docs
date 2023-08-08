---
title: SafeAreaPlugin.setOverlay()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - setOverlay 
---

Set the cover state;
if set to true;
Indicates that the content of the app in the safe area will be partially covered by the system bar;
This setting will also modify the state of the system bar;

```js
SafeAreaPlugin.setOverlay(b)
```

## parameters

  - b

    The parameter accepts a boolean;


## return value

  A Promise object that resolves to null

## Example
```js
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.setOverlay(true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setOverlay           | ✅      | ✅  | ✅          | X       |

## Related Links

[SafeAreaPlugin](./index.md)


