---
title: NavigationBarPlugin.setState()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setState 
---

Set the system navigation bar state

```js
NavigationBarPlugin.setState(state)
```

## parameters

  - state

    Objects that implement part of the [State](../../interface/state/index.md) interface;
    The list of valid attributes includes: `[overlay, visible, color, style]`

## return value

  A Promise object that resolves to null

## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setState({color:"#FFFFFFFF"})
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setState             | ✅       | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


