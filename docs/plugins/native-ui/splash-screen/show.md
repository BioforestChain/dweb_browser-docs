---
title: SplashScreenPlugin.show()
category:
  - Plugin 
tag:
  - SplashScreenPlugin
  - show
 
---

显示启动页

```js
SplashScreenPlugin.show(options)
```

## 参数

  - options

    显示启动页的选项参数；
    参数的值是一个[SplashScreenShowOptions](../../interface/splash-screen-show-options/index.md)对象


## 返回值

  返回一个Promise,resolve兑现一个boolean;

## 示例
```js
import { splashScreenPlugin } from "@plaoc/plugins";
splashScreenPlugin.show({})
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| show         | ✅       | ✅  | ✅          | X       |

## 相关链接

[SplashScreenPlugin](../index.md)



