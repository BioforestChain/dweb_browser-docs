---
title: StatusBarPlugin
category:
  - Plugin
tag:
  - status-bar
---

StatusBarPlugin 接口用来表示系统状态栏元素, 并提供访问系统状态栏的属性和方法

```javascript
import { statusBarPlugin } from "@plaoc/plugins";

// 设置状态栏的颜色
statusBarPlugin.setColor("#FF0000FF")
 
```

## 属性

- [StatusBarPlugin.state](./state.md)

## 方法 Method
- [StatusBarPlugin.setColor()](./set-color.md)

  设置系统状态栏的颜色;

- [StatusBarPlugin.getColor()](./get-color.md)

  获取系统状态栏的颜色；

- [StatusBarPlugin.setStyle()](./set-style.md)

  设置系统状态栏的风格;

<!-- - HTMLDwebStatusBarElement.getStyle()

  获取系统状态栏的风格; -->


## 事件 Event

使用 addEventlistener() 实现事件的添加

- statechange

  当系统状态栏的状态发生改变的时候触发


## 平台兼容性


<!-- | 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setColor()   | ✅      | ✅  | ✅          | X      |
  -->

## 相关链接



