---
title: ImageResource
category:
  - manifest
tag:
  - ImageResource
---

描述图片来源的对象；


## 属性

  - src

    必选属性；
    属性值是一个 stirng;
    获取图像数据的 URL

  - sizes

    可选属性；
    属性值是一个 string;
    描述图片的尺寸；
 
  - type

    可选属性；
    属性值是一个 string;
    描述[图片的MIME类型](https://www.iana.org/assignments/media-types/media-types.xhtml#image)；

  - [purpose](https://w3c.github.io/manifest/#purpose-member)

    可选属性；
    属性值是一个 string;
    用来描述当前图片使用的目的；

  - [platform](https://w3c.github.io/manifest/#platform-member)

    可选属性；
    属性值是一个 string;
    用来描述图片对应的平台