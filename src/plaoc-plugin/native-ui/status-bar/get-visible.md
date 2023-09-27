---
title: StatusBarPlugin.getVisible()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getVisible 
---

查询系统状态栏是否可见

```js
StatusBarPlugin.getVisible()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现boolean;

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getVisible()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getVisible    | ✅      | ✅  | ✅          | X       |

## 相关链接

[StatusBarPlugin](./index.md)


