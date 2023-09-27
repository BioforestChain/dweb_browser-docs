---
title: ClipboardPlugin.write()
category:
  - Plugin 
tag:
  - ClipboardPlugin
  - write
---

读取剪切板上的数据；

```js
ClipboardPlugin.write(data);
```

## 参数

  - data

    需要写入的数据；参数的值是[ClipboardWriteOptions](../../interface/clipboard-write-options/)对象；


## 返回值

  返回换一个Promise;

## 示例
```js
import { clipboardPlugin } from "@plaoc/plugins";
clipboardPlugin.write({string: "test"});
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| write         | ✅       | ✅  | ✅          | X       |

## 相关链接

[ClipboardPlugin](./index.md)


