---
title: VirtualKeyboardPlugin.setState()
category:
  - Plugin
tag:
  - VirtualKeyboardPlugin
  - setState 
---

Set the state of the virtual keyboard

```js
VirtualKeyboardPlugin.setState(state)
```

## parameters

  - state

    Objects that implement part of the [State](../../interface/state/index.md) interface;
    The list of valid attributes includes: `[overlay]`

## return value

  Return a Promise object that resolves to null

## Example
```js
import { virtualKeyboardPlugin } from "@plaoc/plugins";
const value = virtualKeyboardPlugin.setState({overlay: true})
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setState             | ✅       | ✅  | ✅          | X       |

## Related Links

[VirtualKeyboardPlugin](./index.md)


