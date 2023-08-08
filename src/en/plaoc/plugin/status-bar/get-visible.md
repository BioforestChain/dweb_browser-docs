---
title: StatusBarPlugin.getVisible()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getVisible 
---

Query whether the system status bar is visible

```js
StatusBarPlugin.getVisible()
```

## parameters

  - none

## return value

  Return a Promise object, resolve fulfills boolean;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getVisible()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getVisible           | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


