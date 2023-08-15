---
title: HapticsPlugin.impactLight()
category:
  - Plugin
tag:
  - HapticsPlugin
  - impactLight
---

用来模拟碰撞中对象的质量；


```js
HapticsPlugin.impactLight(options)
```

## 参数

  - options

    参数值是一个[ImpactOptions](../../interface/impact-options/index.md)类型；
    

## 返回值

  返回一个Promise;

## 示例
```js
import { hapticsPlugin } from "@plaoc/plugin";
hapticsPlugin.impactLight({
  style: "HEAVY"
})
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| options      | ✅       | ✅  | ✅         | X       |

## 相关链接

[HapticsPlugin](../index.md)


