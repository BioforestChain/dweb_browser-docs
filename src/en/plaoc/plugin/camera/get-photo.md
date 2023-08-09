---
title: CameraPlugin.getPhoto()
category:
  - Plugin
tag:
  - CameraPlugin  
  - getPhoto
---

Gets a photo from the local device.

```js
CameraPlugin.getPhoto(options)
```

## Parameters

  - options: 

    Options object with type [ImageOptions](../../interface/image-options/index.md).

## Returns

  A Promise that resolves to an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

## Example

```js
import { cameraPlugin } from "@plaoc/plugin";

cameraPlugin.getPhoto({})
.then(res => {
  // handle result
}) 
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| getPhoto              | ✅      | ✅  | ✅          | X       |

## See Also

[CameraPlugin](./index.md)