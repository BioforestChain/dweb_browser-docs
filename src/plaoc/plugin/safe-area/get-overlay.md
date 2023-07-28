---
title: SafeAreaPlugin.getOverlay()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - getOverlay 
---

查询安全区域的遮盖状态；

```js
SafeAreaPlugin.getOverlay()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现boolean;
  如果兑现的值是true，表示安全区域中App的内容会被系统栏遮盖部分内容；
  如果兑现的值是false, 表示安全区域中App的内容不会被系统栏遮盖部分内容；

## 示例
```js
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.getOverlay()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay     | ✅      | ✅  | ✅          | X       |

## 相关链接

[SafeAreaPlugin](./index.md)


