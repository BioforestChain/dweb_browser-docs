---
title: VirtualKeyboardPlugin.setOverlay()
category:
  - Plugin
tag:
  - VirtualKeyboardPlugin
  - setOverlay 
---

Set the cover state;
if set to true;
Indicates that when the virtual keyboard is expanded, it will cover part of the content of the App;

```js
VirtualKeyboardPlugin.setOverlay(b)
```

## parameters

  - b

    The parameter accepts a boolean;


## return value

  Return a Promise object that resolves to null;

## Example
```js
import { virtualKeyboardPlugin } from "@plaoc/plugins";
const value = virtualKeyboardPlugin.setOverlay(true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setOverlay           | ✅      | ✅  | ✅          | X       |

## Related Links

[VirtualKeyboardPlugin](./index.md)


