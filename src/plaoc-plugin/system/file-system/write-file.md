---
title: fileSystemPlugin.writeFile()
category:
  - Plugin
tag:
  - fileSystemPlugin
  - writeFile
---

写入内容

```js
import { fileSystemPlugin } from "@plaoc/plugins";
fileSystemPlugin.writeFile(options)
```

## 参数
  
  - options

  写入文件的选项参数；
  参数值是[WriteFileOptions](../../interface/write-file-options/index.md)对象；


## 返回值

  返回一个Promise,resolve兑现一个[WriteFileResult](../../interface/write-file-result/index.md)对象；

## 示例
```js
import { fileSystemPlugin } from "@plaoc/plugins";
const path = "xxx"
const data = "内容"
fileSystemPlugin.writeFile({
  path, data
})
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| writeFile    | ✅       | ✅  | ✅         | X       |

## 相关链接
[FileSystemPlugin](../index.md)


