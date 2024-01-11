---
title: NavigationBarPlugin
category:
  - Plugin
tag:
  - NavigationBarPlugin
---

NavigationBarPlugin 接口用来表示系统导航栏元素, 并提供访问系统导航栏的属性和方法

```javascript
import { navigationBarPlugin } from "@plaoc/plugins";

// 设置导航栏的颜色
navigationBarPlugin.setColor("#FF0000FF")
 
```

## 属性

- [NavigationBarPlugin.state](./state.md)

  系统导航栏的状态对象；
  
  属性值是一个实现了[StateObserver](../../interface/state-observer/index.md) 接口的对象;
  

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

[Plaoc](../../)


