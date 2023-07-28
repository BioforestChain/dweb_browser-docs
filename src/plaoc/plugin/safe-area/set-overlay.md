---
title: SafeAreaPlugin.setOverlay()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - setOverlay 
---

设置遮盖状态；
如果设置为true;
表示安全区域中App的内容会被系统栏遮盖部分内容；
这个设置会同时修改系统栏的状态；

```js
SafeAreaPlugin.setOverlay(b)
```

## 参数

  - b

    参数接受一个 boolean;


## 返回值

  - 一个Promise对象， resolve兑现Nnull

## 示例
```js
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.setOverlay(true)
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setOverlay   | ✅      | ✅  | ✅          | X       |

## 相关链接

[SafeAreaPlugin](./index.md)


