---
title: ClipboardPlugin
category:
  - Plugin
tag:
  - ClipboardPlugin
---

剪切板插件；实现了对系统剪切板的访问；

## 属性

  - 无


## 方法

  - [ClipboardPlugin.read()](./read.md)

    读取剪切板上的数据；

  - [ClipboardPlugin.write()](./write.md)

    向剪切板上写入数据

## 事件

  - 无

## 示例
```js
import { clipboardPlugin } from "@plaoc/plugins";
clipboardPlugin.read();
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| read         | ✅      | ✅   | ✅          | X      |
| write        | ✅      | ✅   | ✅          | X      |

## 相关链接
[]()


