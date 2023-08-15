---
title: SharePlugin.canShare()
category:
  - Plugin
tag:
  - SharePlugin  
  - canShare
---

Check if sharing is available

```js
SharePlugin.canShare()
```

## Parameters

  - None

## Return Value

  Returns a Promise that resolves to a boolean;

## Example
```js
import { sharePlugin } from "@plaoc/plugin";

(async() => {
  const b = await sharePlugin.canShare() 
})();
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| canShare     | ✅      | ✅  | ✅          | X       |

## Related Links
  
[SharePlugin](./index.md)