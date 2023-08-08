---
title: StatusBarPlugin.setOverlay()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setOverlay 
---

Set whether to conver the content of the App in the system status bar;

```js
StatusBarPlugin.setOverlay(b)
```

## parameters

  - b

    The parameter accepts a boolean;


## return value

  Return a Promise object, resolve fulfill null;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setOverlay(true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setOverlay           | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


