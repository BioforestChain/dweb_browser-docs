---
title: NavigationBarPlugin
category:
  - Plugin
tag:
  - NavigationBarPlugin
---

NavigationBarPlugin 接口用来表示系统导航栏元素, 并提供访问系统导航栏的属性和方法

```javascript
import { NavigationBarPlugin } from "@plaoc/plugins";

// 设置导航栏的颜色
NavigationBarPlugin.setColor("#FF0000FF")
 
```

## 属性

- NavigationBarPlugin.state

  系统导航栏的状态对象；
  
  属性值是一个实现了[StateObserver](../../interface/state-observer/index.md) 接口的对象;
  NavigationBarPlugin.state.currentState是一个部分实现了[State接口](../../interface/state/index.md)的对象
  NavigationBarPlugin.state.currentState实现的接口如下
  
  - overlay

    系统导航栏是否会遮盖 App 的内容；属性值是一个 boolean;

  - visible

    系统导航栏是否可见；属性值是一个 boolean;

  - State.style

    系统导航栏的风格，属性值是一个字符串; 合法的值如下
      - `"DARK"`  会设置 系统栏的前景色为浅色，用来适配深色背景的系统栏；
      - `"LIGHT"` 会设置 系统栏的前景色为深色，用来适配浅色背景的系统栏；
      - `"DEFAULT"` 会根据设备自动的设置系统栏的前景色; 
                  如果设备采用深色模式，系统栏的前景色会设置为浅色；
                  如果设备采用浅色模式，系统栏的前景色会设置为深色；

  - State.color

    系统导航栏的前景色，属性值是一个实现了 [AgbaColor](../../interface/rgba-color/index.md) 接口的对象

  - State.insets

    系统导航栏插入占据屏幕主体的位置信息; 是一个 [DOMInsets](../../interface/dom-insets/index.md) 对象；
    正常握持下表现为描述系统导航栏占据屏幕设备顶部的位置信息；
   

## 方法 Method

- [NavigationBarPlugin.getColor()](./get-color.md)

  查询系统导航栏的颜色\[背景色\]；

- [NavigationBarPlugin.getOverlay()](./get-overlay.md)

  查询系统导航栏是否遮盖 App 的内容；

- [NavigationBarPlugin.getState([force_update])](./get-state.md)

  查询系统导航栏的状态;

- [NavigationBarPlugin.getStyle()](./get-style.md)

  查询系统导航栏的风格；

- [NavigationBarPlugin.getVisible()](./get-visible.md)

  查询系统导航栏是否显示；
  返回一个Promise对象；resolve兑现一个boolean

- [NavigationBarPlugin.hide()](./hide.md)

  隐藏系统导航栏；

- [NavigationBarPlugin.setColor()](./set-color.md)

  设置系统导航栏的颜色;

- [NavigationBarPlugin.setOverlay()](./set-overlay.md)

  设置系统导航栏是否遮盖 App;

- [NavigationBarPlugin.setState()](./set-state.md)

  设置系统导航栏的状态；

- [NavigationBarPlugin.setStateByKey()](./set-state-by-key.md)

  设置系统导航栏某一状态的值；

- [NavigationBarPlugin.setStyle()](./set-style.md)

  设置系统导航栏的风格;

- [NavigationBarPlugin.setVisible()](./set-visible.md)
  
  设置系统导航栏是否可见；

- [NavigationBarPlugin.show()](./show.md)

  显示系统导航栏；




## 事件 Event
- 无


## 平台兼容性


| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| state        | ✅      | ✅  | ✅          | X       |
| getColor     | ✅      | ✅  | ✅          | X       |
| getOverlay   | ✅      | ✅  | ✅          | X       |
| getState     | ✅      | ✅  | ✅          | X       |
| getStyle     | ✅      | ✅  | ✅          | X       |
| getVisible   | ✅      | ✅  | ✅          | X       |
| hide         | ✅      | ✅  | ✅          | X       |
| setColor     | ✅      | ✅  | ✅          | X       |
| setOverlay   | ✅      | ✅  | ✅          | X       |
| setState     | ✅      | ✅  | ✅          | X       |
| setStateByKey| ✅      | ✅  | ✅          | X       |
| setStyle     | ✅      | ✅  | ✅          | X       |
| setVisible   | ✅      | ✅  | ✅          | X       |
| show         | ✅      | ✅  | ✅          | X       |


## 相关链接

[Plaoc](../)


