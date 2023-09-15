---
title: ImageOptions
category:
  - Interface
tag:
  - ImageOptions
---

图片的选项对象，作为CameraPlugin.getPhoto()方法的参数接口对象；
 

## 属性

  - quality

    是一个可选属性;当返回的图片是 JPEG 类型的时候，定义返回图片的质量；
    属性值的类型是整数；范围是`0 ~ 100`;

  - allowEditing

    是一个可选属性；是否允许用户对图片进行编辑，属性值是一个boolean;只能够用于特定的平台；
    在 `IOS 14+`只支持 CameraSource.Camera;

  - resultType

    是一个可选属性；设定返回的数据类型属性;属性值是一个字符串；
    合法的值包括 `["uri", "base64", "dataUrl"]`

  - saveToGallery

    是一个可选属性；是否把照片保存到相册；属性值是一个boolean;默认值是false;
    如果图片是从相册中选取的，只有编辑后的图片才能够被保存；

  - width

    是一个可选属性；设置图片保存时的最大宽度尺寸；属性值是一个数字；如果图片的宽度尺寸超过了设置的值；会同比例缩小保存图片；

  - height

    是一个可选属性；设置图片保存时的最大高度尺寸；属性值是一个数字；入股偶图片的高度尺寸超过了设置的值；会同比例缩小保存；


  - correctOrientation

    是一个可选属性；属性值是一个boolean;
    当设备出于纵向模式下，是否通过自动旋转图片，矫正图片的方向；
    默认值是true;


  - source

    是一个可选属性，设置选择图片的来源；
    合法的值包括：
    
    "PROMPT" === 让用户选择

    "CAMERA" === 通过照相机获取图片

    "PHOTOS" === 从相册中选取

    默认的值是 "PROMPT"

  - direction

    是一个可选属性；如果图片的来源是相机的情况下，定义使用哪一个相机；
    只有 IOS 和 WEB 支持；
    合法的值包括：

    "user" === 前置摄像头

    "environment" === 后置摄像头

    默认值是 "environment"

  - presentationStyle

    是一个可选属性；如果图片的来源是相机的情况下，定义图片呈现的风格；
    只有 IOS 才支持;
    合法的值包括：

    "fullscreen" === 全屏

    "popover" === 以弹窗的形式

    默认的值是 "fullscreen"


  - webUseInput

    可选属性；
    属性值是boolean;
    仅支持web端
    是使用 PWA元素还是使用Input元素
    默认情况下，如果程序已经被安装，那么会使用 PWA 元素；
    否则会回使用 Input 元素；

  - promptLabelHeader

    可选属性；
    属性值是字符串；
    当显示PROMPT时候的头部提示文本
    默认值是:"Photo";

  - promptLabelCancel

    可选属性；
    属性值是字符串；
    当显示PROMPT时候的取消按钮的提示文本；
    仅 IOS 支持；
    默认值是:"Cancel"

  - promptLabelPhoto

    可选属性；
    属性值是字符串
    当显示PROMPT时候，选择图片来源是相册的按钮上显示的文本；
    默认值是： "From Photos";


  - promptLabelPicture

    可选属性；
    属性值是字符串
    当显示PROMPT时候，选择图片来源是相机的按钮上显示的文本；
    默认值是： ”Take Picture“ 
    
 
## 方法

  - 无

## 事件

  - 无

## 示例
```js
import { cameraPlugin } from "@plaoc/plugins";
cameraPlugin.getPhoto({})
.then(res => {})
```

## 平台兼容性

| 属性/方法/事件       | Android | IOS | Desktop-Dev | Desktop |
|:------------------:|:-------:|:---:|:-----------:|:-------:|
| quality            | ✅      | ✅   | ✅          | X       |
| allowEditing       | X       | ✅   | X          | X       |
| resultType         | ✅       | ✅  | ✅          | X       |
| saveToGallery      | ✅       | ✅  | ✅          | X       |
| width              | ✅       | ✅  | ✅          | X       |
| height             | ✅       | ✅  | ✅          | X       |
| correctOrientation | ✅       | ✅  | ✅          | X       |
| direction          | X        | ✅  | ✅          | X       |
| presentationStyle  | ✅       | ✅  | ✅          | X       |
| webUseInput        | ✅       | ✅  | ✅          | X       |
| promptLabelHeader  | ✅       | ✅  | ✅          | X       |
| promptLabelCancel  |          | ✅  | X          | X       |
| promptLabelPhoto   | ✅       | ✅  | ✅          | X       |
| promptLabelPicture | ✅       | ✅  | ✅          | X       |

## 相关链接
[cameraPlugin](../../plugin/camera/index.md)


