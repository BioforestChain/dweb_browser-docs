---
title: NavigationBarPlugin.getOverlay()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getOverlay 
---

查询系统导航栏是否遮盖APP的内容

```js
NavigationBarPlugin.getOverlay()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现boolean;

## 示例
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getOverlay()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay     | ✅      | ✅  | ✅          | X       |

## 相关链接

[NavigationBarPlugin](./index.md)


