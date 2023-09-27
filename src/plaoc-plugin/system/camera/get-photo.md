---
title: CameraPlugin.getPhoto()
category:
  - Plugin
tag:
  - CameraPlugin
  - getPhoto
---

从本地获取图片;

```js
CameraPlugin.getPhoto(options)
```

## 参数

  - options

    获取图片的选项对象；属性值的类型是 [ImageOptions](../../interface/image-options/index.md)对象；

## 返回值

  返回一个Promise，resolve兑现一个[ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

## 示例
```js
import { cameraPlugin } from "@plaoc/plugins";
cameraPlugin.getPhoto({})
.then(res => {})
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setColor()   | ✅      | ✅  | ✅          | X      |

## 相关链接

[CameraPlugin](./index.md)


