---
title: StatusBarPlugin.setStateByKey()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setStateByKey 
---

Set the value of a property of the system status bar status

```js
StatusBarPlugin.setStateByKey(key, value)
```

## parameters

  - key

    String, the name of the state property to be set
    The list of valid attributes includes: `[overlay, visible, color, style]`

  - value

    The value of the state property that needs to be set;
    The legal attribute name range refers to the value of [StatusBarPlugin.state](./index.md) attribute;；

## return value

  Return a Promise object, resolve fulfill null;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setStateByKey("color", "#FFFFFFFF")
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setStateByKey        | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


