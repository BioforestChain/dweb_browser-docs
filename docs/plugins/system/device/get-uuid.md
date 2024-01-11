---
title: DevicePlugin.getUUID()
category:
  - Plugin
tag:
  - DevicePlugin
  - getUUID
---

获取设备的标识符

```js
import { devicePlugin } from "@plaoc/plugins";
devicePlugin.getUUID()
```

## 参数

  - 无

## 返回值

  返回一个Promise, resolve兑现一个[$ResponseUUIDData](../../interface/response-uuid-data/index.md)对象

## 示例

```js
import { devicePlugin } from "@plaoc/plugins";
devicePlugin.getUUID()
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getUUID      | ✅      | ✅   | ✅          | X       |

## 相关链接

[DevicePlugin](./index.md)


