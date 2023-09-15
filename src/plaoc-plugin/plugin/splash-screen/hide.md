---
title: SplashScreenPlugin.hide()
category:
  - Interface
tag:
  - SplashScreenPlugin
  - hide
---

隐藏启动项

```js
SplashScreenPlugin.hide(options)
```

## 参数

  - options

    选项参数；
    参数值是一个[SplashScreenHideOptions]()对象

## 返回值

  返回一个Promise，resolve兑现一个boolean

## 示例
```js
import { splashScreenPlugin } from "@plaoc/plugins";
;(async () => {
  splashScreenPlugin.hide({})
})();
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| hide         | ✅       | ✅  | ✅          | X       |

## 相关链接

[SplashScreenPlugin](./index.md)


