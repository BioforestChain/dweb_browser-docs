---
title: ConfigPlugin.setInternalUrl()
category:
  - Plugin
tag:
  - ConfigPlugin
  - setInternalUrl
---

设置内部的Url;

```js
configPlugin.setInternalUrl(url)
```

## 参数

  - url

    参数是新的url；
    参数的类型是string;


## 返回值
  
  返回一个内部地址的Url;

## 示例
```js
import { configPlugin } from "@plaoc/plugin";
configPlugin.setInternalUrl("http://xxx")
```

## 平台兼容性

| 属性/方法/事件     | Android | IOS | Desktop-Dev | Desktop |
|:----------------:|:-------:|:---:|:-----------:|:-------:|
| setInternalUrl   | ✅      | ✅   | ✅          | X       |

## 相关链接

[ConfigPlugin](./index.md)


