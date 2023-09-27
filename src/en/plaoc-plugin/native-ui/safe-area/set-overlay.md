---
title: SafeAreaPlugin.setOverlay()
category: 
  - Plugin
tag:
  - SafeAreaPlugin
  - setOverlay
---

Set the overlay status;
If set to true;  
It indicates the content in the safe area will be overlapped by system bars;
This setting will also modify the state of system bars;

```js
SafeAreaPlugin.setOverlay(b) 
```

## Parameters

  - b

    Accepts a boolean;


## Return Value

  - A Promise object that resolves to null

## Example
```js
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.setOverlay(true)
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:| 
| setOverlay   | ✅      | ✅  | ✅          | X       |

## Related Links

[SafeAreaPlugin](./index.md)