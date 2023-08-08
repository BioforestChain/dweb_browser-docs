---
title: StatusBarPlugin.show()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - show 
---

show system status bar;

```js
StatusBarPlugin.show()
```

## parameters

  - none

## return value

  Return a Promise object, resolve fulfill null;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.show()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| show                 | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


