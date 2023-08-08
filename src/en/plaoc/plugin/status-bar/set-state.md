---
title: StatusBarPlugin.setState()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setState 
---

Set the status of the system status bar

```js
StatusBarPlugin.setState(state)
```

## parameters

  - state

    Objects that implement part of the [State](../../interface/state/index.md) interface;
    The list of valid attributes includes: `[overlay, visible, color, style]`

## return value

  Return a Promise object, resolve fulfill null;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setState({overlay:true})
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setState             | ✅       | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


