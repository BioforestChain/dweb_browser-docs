---
title: SafeAreaPlugin.setState()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - setState 
---

Set safe zone state

```js
SafeAreaPlugin.setState(state)
```

## parameters

  - state

    Objects that implement part of the [State](../../interface/state/index.md) interface;
    The list of valid attributes includes: `[overlay]`

## return value

  A Promise object that resolves to null;

## Example
```js
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.setState({overlay: true})
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setState             | ✅       | ✅  | ✅          | X       |

## Related Links

[SafeAreaPlugin](./index.md)


