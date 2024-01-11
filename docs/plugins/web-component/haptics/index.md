---
title: HTMLDwebHapticsElement
category:
  - WebComponent
tag:
  - HTMLDwebHapticsElement
---

震动的物理反馈 HTMLElement
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);


```html
<dweb-haptics></dweb-haptics>
```

## 属性

  - plugin

    属性值是 [HapticsPlugin](../../plugin/haptics/index.md)对象；

  - vibrate

    属性值是 [HapticsPlugin.vibrate()](../../plugin/haptics/vibrate.md)方法

  - impactLight

    属性值是 [HapticsPlugin.impactLight()](../../plugin/haptics/impact-light.md) 方法

  - notification

    属性值是 [HapticsPlugin.notification()](../../plugin/haptics/notification.md) 方法

  - vibrateClick

    属性值是 [HapticsPlugin.vibrateTick()](../../plugin/haptics/vibrate-click.md) 方法

  - vibrateDisabled

    属性值是 [HapticsPlugin.vibrateDisabled()](../../plugin/haptics/vibrate-disbled.md) 方法

  - vibrateDoubleClick

    属性值是 [HapticsPlugin.vibrateDoubleClick()](../../plugin/haptics/vibrate-double-click.md) 方法

  - vibrateHeavyClick

    属性值是 [HapticsPlugin.vibrateHeavyClick](../../plugin/haptics/vibrate-heavy-click.md) 方法

  - vibrateTick

    属性值是 [HapticsPlugin.vibrateTick()](../../plugin/haptics/vibrate-tick.md) 方法


## 方法

  - 无

## 事件

  - 无预定是事件

## 示例
```html
<body>
  <dweb-haptics></dweb-haptics>
  <script type="text/javascript">
    const dwebHaptics = document.querySelector("dweb-haptics");
    dwebHaptics.vibrateDisabled()
  </script>
</body>
```


## 平台兼容性

| 属性/方法/事件       | Android | IOS | Desktop-Dev | Desktop |
|:------------------:|:-------:|:---:|:-----------:|:-------:|
| plugin             | ✅      | ✅  | ✅           | X       |
| vibrate            | ✅      | ✅  | ✅          | X       |
| impactLight        | ✅      | ✅  | ✅          | X       |
| notification       | ✅      | ✅  | ✅          | X       |
| vibrateClick       | ✅      | ✅  | ✅          | X       |
| vibrateDisabled    | ✅      | ✅  | ✅          | X       |
| vibrateDoubleClick | ✅      | ✅  | ✅          | X       |
| vibrateHeavyClick  | ✅      | ✅  | ✅          | X       |
| vibrateTick        | ✅      | ✅  | ✅          | X       |

## 相关链接

 [Plaoc WebComponent](../index.md)

[HapticsPlugin](../../plugin/haptics/index.md)