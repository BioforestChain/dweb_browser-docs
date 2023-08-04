---
title: HapticsPlugin.vibrate()
category:
  - Plugin
tag:
  - HapticsPlugin
  - vibrate
---

自定制反馈的效果；

```js
HapticsPlugin.vibrate(options)
```

## 参数

  - options

    选项参数的值是一个[VibrateOptions](../../interface/vibrate-options/index.md)对象；

## 返回值

  返回一个Promise;
  

## 示例
```js
import { hapticsPlugin } from "@plaoc/plugin";
hapticsPlugin.vibrate({duration: [1000, 100]})
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| vibrate      | ✅       | ✅  | ✅         | X       |

## 相关链接

[HapticsPlugin](./index.md)


