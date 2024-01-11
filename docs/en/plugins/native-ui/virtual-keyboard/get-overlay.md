---
title: VirtualKeyboardPlugin.getOverlay()
category:
  - Plugin
tag:
  - VirtualKeyboardPlugin
  - getOverlay 
---

Query whether the content of the App will be covered after the virtual keyboard is expanded;;

```js
VirtualKeyboardPlugin.getOverlay()
```

## parameters

  - none

## return value

  Return a Promise object, resolve fulfills boolean;
  If the cashed value is true, it means that the content of this app will be displayed after the virtual keyboard is expanded;
  If the cashed value is false, it means that the content of this app will not be displayed after the virtual keyboard is expanded;

## Example
```js
import { virtualKeyboardPlugin } from "@plaoc/plugins";
const value = virtualKeyboardPlugin.getOverlay()
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay           | ✅      | ✅  | ✅          | X       |

## Related Links

[VirtualKeyboardPlugin](./index.md)


