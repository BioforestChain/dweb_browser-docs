---
title: ClipboardWriteOptions
category:
  - Interface
tag:
  - ClipboardWriteOptions
---

执行 ClipboardPlugin.write()方法传递额参数类型接口；

```js
ClipboardPlugin.write(ClipboardWriteOptions);
```

## 属性

  - string

    可选属性；
    属性值是一个字符串；
    需要拷贝到剪切板上的值；
    
  - image

    可选属性；
    属性值是一个[Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
    需要拷贝到剪切板上的图片

  - url

    可选属性
    属性值是一个字符串；
    需要拷贝到剪切班上的url;

  - label

    可选属性
    属性值是一个字符串；
    拷贝数据是给数据添加的标签；
    仅支持 Android

## 方法

  - 无

    
## 事件

  - 无

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| string       | ✅      | ✅  | ✅          | X      |
| image        | ✅      | ✅  | ✅          | X      |
| url          | ✅      | ✅  | ✅          | X      |
| label        | ✅      | X   | X          | X      |

## 相关链接

[ClipboardPlugin](../../plugin/clipboard/index.md)


