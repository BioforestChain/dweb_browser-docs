---
title: NavigationBarPlugin.getVisible()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getVisible 
---

查询系统导航栏是否可见

```js
NavigationBarPlugin.getVisible()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现boolean;

## 示例
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getVisible()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getVisible   | ✅       | ✅  | ✅          | X       |

## 相关链接

[NavigationBarPlugin](./index.md)


