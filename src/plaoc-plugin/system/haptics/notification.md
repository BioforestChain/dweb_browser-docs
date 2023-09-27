---
title: HapticsPlugin.notification()
category:
  - Plugin
tag:
  - HapticsPlugin
  - notification
---

震动通知效果

```js
HapticsPlugin.notification(options)
```

## 参数

  选项参数是一个 [NotificationOptions](../../interface/notification-options/index.md)对象；

## 返回值

  返回一个promise

## 示例
```js
import { hapticsPlugin } from "@plaoc/plugins";
hapticsPlugin.notification({
  type: "SUCCESS"
})
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| notification | ✅       | ✅  | ✅          | X       |

## 相关链接
[HapticsPlugin](./index.md)


