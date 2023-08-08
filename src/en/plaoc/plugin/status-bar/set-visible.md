---
title: StatusBarPlugin.setVisible()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setVisible 
---

Set whether the system status bar is visible

```js
StatusBarPlugin.setVisible(b)
```

## parameters

  - b

    The parameter accepts a boolean;


## return value

  Return a Promise object, resolve fulfill null;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setVisible(true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setVisible           | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


