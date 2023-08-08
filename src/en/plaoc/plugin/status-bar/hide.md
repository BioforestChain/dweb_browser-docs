---
title: StatusBarPlugin.hide()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - hide 
---

hide system status bar;

```js
StatusBarPlugin.hide()
```

## parameters

  - none

## return value

  Retrun a Promise object, resolve fulfill null;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.hide()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| hide                 | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


