---
title: NavigationBarPlugin.setVisible()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setVisible 
---

设置系统导航栏是否可见

```js
NavigationBarPlugin.setVisible(b)
```

## 参数

  - b

    参数接受一个 boolean;


## 返回值

  - 一个Promise对象， resolve兑现null

## 示例
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setVisible(true)
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setVisible   | ✅      | ✅  | ✅          | X       |

## 相关链接

[NavigationBarPlugin](./index.md)


