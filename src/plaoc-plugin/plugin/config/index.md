---
title: ConfigPlugin
category:
  - Plugin
tag:
  - ConfigPlugin
---

配置插件

```js
import { configPlugin } from "@plaoc/plugin";
configPlugin.getInternalUrl()
```

## 属性

  - public_url

    属性定义公共的url;
    属性的值是一个string或resolve兑现一个string的Promise;

## 方法

  - [ConfigPlugin.getInternalUrl()]()

    获取内部的 Url;

  - [ConfigPlugin.setInternalUrl()]()

    设置内部的 Url;

  - [ConfigPlugin.setPublicUrl()]()

    设置公共的 Url;

## 事件

  - 无


## 平台兼容性

| 属性/方法/事件    | Android | IOS | Desktop-Dev | Desktop |
|:---------------:|:-------:|:---:|:-----------:|:-------:|
| public_url      | ✅      | ✅   | ✅          | X       |
| getInternalUrl  | ✅      | ✅   | ✅          | X       |
| setInternalUrl  | ✅      | ✅   | ✅          | X       |
| setPublicUrl    | ✅      | ✅   | ✅          | X       |

## 相关链接
[Plaoc](../../)


