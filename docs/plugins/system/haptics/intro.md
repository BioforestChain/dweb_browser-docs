---
title: HapticsPlugin
category:
  - Plugin
tag:
  - HapticsPlugin
---

HapticsPlugin通过触碰 向用户同震动的物理反馈；
在 Desktop-dev环境下，通过消息在视觉上实现反馈；

```js
import { hapticsPlugin } from "@plaoc/plugins";
```

## 属性

  - isIOSDWebBrowser

    静态属性；
    判断是否是IOS浏览器环境；
    属性值一个 boolean;


## 方法

  - [HapticsPlugin.impactLight()](./impact-light.md)

    触碰轻质量物体
  
  - [HapticsPlugin.notification()](./notification.md)

    震动通知效果
  
  - [HapticsPlugin.vibrateClick()](./vibrate-click.md)

    单击效果
  
  - [HapticsPlugin.vibrateDisabled()](./vibrate-disbled.md)

    禁用手势的反馈振动
  
  - [HapticsPlugin.vibrateDoubleClick()](./vibrate-double-click.md)

    双击效果

  - [HapticsPlugin.vibrateHeavyClick()](./vibrate-heavy-click.md)

    重击手势的效果
  
  - [HapticsPlugin.vibrateTick()](./vibrate-tick.md)

    滴答效果
  
  - [HapticsPlugin.vibrate()](./vibrate.md)

    设置自定义效果

## 事件

## 平台兼容性

| 属性/方法/事件       | Android | IOS | Desktop-Dev | Desktop |
|:------------------:|:-------:|:---:|:-----------:|:-------:|
| impactLight        | ✅      | ✅  | ✅          | X       |
| notification       | ✅      | ✅  | ✅          | X       |
| vibrateClick       | ✅      | ✅  | ✅          | X       |
| vibrateDisabled    | ✅      | ✅  | ✅          | X       |
| vibrateDoubleClick | ✅      | ✅  | ✅          | X       |
| vibrateHeavyClick  | ✅      | ✅  | ✅          | X       |
| vibrateTick        | ✅      | ✅  | ✅          | X       |
| vibrate            | ✅      | ✅  | ✅          | X       |

## 相关链接

[Plaoc](../../)


