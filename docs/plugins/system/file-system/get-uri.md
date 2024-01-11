---
title: fileSystemPlugin,getUri()
category:
  - Plugin
tag:
  - fileSystemPlugin
  - getUri
---

查询地址

```js
import { fileSystemPlugin } from "@plaoc/plugins";
fileSystemPlugin.getUri(options)
```

## 参数

  - options

    查询的参数选项；
    参数的数据类型是[GetUriOptions](../../interface/get-uri-options/index.md)对象；

## 返回值

  返回一个Promise,resolve兑现一个 [GetUriResult](../../interface/get-uri-result/index.md)对象

## 示例
```js
import { fileSystemPlugin } from "@plaoc/plugins";
fileSystemPlugin.getUri({
  path: "/path",
  directory: "DOCUMENTS"
})
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getUri       | ✅       | ✅  | ✅         | X      |

## 相关链接

[FileSystemPlugin](../index.md)


