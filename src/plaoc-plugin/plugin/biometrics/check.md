---
title: BiometricsPlugin.check()
category:
  - Plugin
tag:
  - BiometricsPlugin
  - check 
---

查询当前平台是否支持生物识别

```js
BiometricsPlugin.check()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现boolean

## 示例
```js
import { biometricsPlugin } from "@plaoc/plugins";
const value = biometricsPlugin.check()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| check     | ✅      | ✅  | ✅          | X       |

## 相关链接

[BiometricsPlugin](./index.md)


