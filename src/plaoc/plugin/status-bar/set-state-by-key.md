---
title: StatusBarPlugin.setStateByKey()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setStateByKey 
---

设置系统状态栏状态某一属性的值

```js
StatusBarPlugin.setStateByKey(key, value)
```

## 参数

  - key

    字符串，需要设置的状态属性名称
    合法的属性名称范围参考[StatusBarPlugin.state](./index.md)属性的键名；

  - value
    需要设置的状态属性的值；
    合法的属性名称范围参考[StatusBarPlugin.state](./index.md)属性的值；

## 返回值

  - 一个Promise对象， resolve兑现Nnull

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setStateByKey("color", "#FFFFFFFF")
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setStateByKey | ✅      | ✅  | ✅          | X       |

## 相关链接

[StatusBarPlugin](./index.md)


