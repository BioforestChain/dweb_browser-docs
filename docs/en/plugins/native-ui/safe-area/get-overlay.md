---
title: SafeAreaPlugin.getOverlay()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - getOverlay
---

Query the overlay status of the safe area;

```js
SafeAreaPlugin.getOverlay()
```

## Parameters

  - None

## Return Value

  - A Promise object that resolves to a boolean; 
  If the resolved value is true, it indicates that the content in the safe area will be overlapped by system bars; 
  If the resolved value is false, it indicates that the content in the safe area will not be overlapped by system bars;

## Example
```js  
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.getOverlay()
```


## Platform Compatibility 

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop | 
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay     | ✅      | ✅  | ✅          | X       |

## Related Links

[SafeAreaPlugin](./index.md)