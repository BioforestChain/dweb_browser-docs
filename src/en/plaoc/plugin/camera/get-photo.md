---
title: CameraPlugin.getPhoto()
category:
  - Plugin
tag:
  - CameraPlugin
  - getPhoto
---

Get pictures locally;;

```js
CameraPlugin.getPhoto(options)
```

## parameters

  - options

    Get the option object of the image; the type of attribute value is [ImageOptions](../../interface/image-options/index.md) object;

## return value

  Return a Promise, and resolve fulfills an [ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

## Example
```js
import { cameraPlugin } from "@plaoc/plugin";
cameraPlugin.getPhoto({})
.then(res => {})
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setColor()           | ✅      | ✅  | ✅          | X      |

## Related Links

[CameraPlugin](./index.md)


