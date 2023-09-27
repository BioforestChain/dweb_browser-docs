---
title: BiometricsPlugin.biometrics()
category:
  - Plugin
tag:
  - BiometricsPlugin
  - biometrics 
---

开启生物识别

```js
BiometricsPlugin.biometrics()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现一个[BiometricsResult](../../interface/biometrics-result/index.md)对象;

## 示例
```js
import { biometricsPlugin } from "@plaoc/plugins";
const value = biometricsPlugin.biometrics()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| biometrics   | ✅      | ✅  | ✅          | X       |

## 相关链接

[BiometricsPlugin](./index.md)


