---
title: ShareOptions
category:
  - Interface
tag:
  - ShareOptions
---

分享的选项对象；作为[SharePlugin.share()](../../plugin/share/share.md)方法的参数接口；


## 属性

  - title

    可选属性；
    分享的内容的标题；
    属性值是一个string;

  - text

    可选属性；
    分享的内容文本；
    属性值是一个 string;

  - url

    可选属性；
    分享的链接地址；
    属性值是一个string;

  - files

    可选属性；
    分享的文件；
    仅支持IOS和Android;
    属性值是一个[FileList](https://developer.mozilla.org/zh-CN/docs/Web/API/FileList)
 

## 方法

  - 无

## 事件

  - 无

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| title        | ✅      | ✅  | ✅           | X       |
| text         | ✅      | ✅  | ✅           | X       |
| url          | ✅      | ✅  | ✅           | X       |
| files        | ✅      | ✅  | X            | X       |

## 相关链接

[Interface](../index.md)

[SharePlugin.share()](../../plugin/share/share.md)

[SharePlugin](../../plugin/share/index.md)


