---
title: ConfigPlugin.setPublicUrl()
category:
  - Plugin
tag:
  - ConfigPlugin
  - setPublicUrl
---

设置公共的Url;

```js
configPlugin.setPublicUrl(url)
```

## 参数

  - url

    参数是新的url；
    参数的类型是string;


## 返回值
  
  返回一个公共地址的Url;

## 示例
```js
import { configPlugin } from "@plaoc/plugins";
configPlugin.setPublicUrl("http://xxx")
```

## 平台兼容性

| 属性/方法/事件     | Android | IOS | Desktop-Dev | Desktop |
|:----------------:|:-------:|:---:|:-----------:|:-------:|
| setPublicUrl   | ✅      | ✅   | ✅          | X       |

## 相关链接

[ConfigPlugin](./index.md)


