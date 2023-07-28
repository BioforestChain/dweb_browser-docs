---
title: BiometricsPlugin
category:
  - Plugin
tag:
  - BiometricsPlugin
---

BiometricsPlugin 是一个实现生物识别的接口；

```javascript
import { biometricsPlugin } from "@plaoc/plugins";
biometricsPlugin.check()
```

## 属性

- 无
   

## 方法 Method

  - [BiometricsPlugin.check()](./check.md)

    检查当前平台是否支持生物识别

  - [BiometricsPlugin.biometrics()](./biometrics.md)

    开启生物识别；


## 事件 Event
- 无


## 平台兼容性


| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| check        | ✅      | ✅  | ✅          | X       |
| biometrics   | ✅      | ✅  | ✅          | X       |


## 相关链接

[Plaoc](../)


