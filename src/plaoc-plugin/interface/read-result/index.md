---
title: ReadResult
category:
  - Interface
tag:
  - ReadResult
---

ReadResult是Clipboard.read()方法，返回的Promise,resolve之后兑现的值；


## 属性

  - value

    从剪切板上读取到的数据；
    属性值的类型是 字符串；

  - type
    
    从剪切板上读取到的数据的类型；
    属性值是字符串

## 方法

  - 无

    概述说明

## 事件

  - 无


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| value        | ✅      | ✅  | ✅          | X      |
| type         | ✅      | ✅  | ✅          | X      |

## 相关链接
[ClipboardPlugin](../../plugin/clipboard/index.md)


