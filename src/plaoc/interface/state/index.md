---
title: State
category:
  - Plugin
tag:
---

State 接口是一个Object; 用来描述插件的状态；不同的元素， State 会具有不同的属性和值;
以下的属性包含了完整的属性描述；


## 属性
- State.overlay
   
  系统栏是否会遮盖住 app 的内容；属性值是一个 boolean;

- State.visible

  系统栏是否可见；属性值是一个boolean

- State.style

  系统栏的风格，值是一个字符串; 合法的值如下
    - `"DARK"`  会设置 系统栏的前景色为浅色，用来适配深色背景的系统栏；
    - `"LIGHT"` 会设置 系统栏的前景色为深色，用来适配浅色背景的系统栏；
    - `"DEFAULT"` 会根据设备自动的设置系统栏的前景色; 
                如果设备采用深色模式，系统栏的前景色会设置为浅色；
                如果设备采用浅色模式，系统栏的前景色会设置为深色；

- State.color

  系统栏的前景色，只是一个十六进制颜色的字符串表示；
  <!-- 系统栏的前景色，值是一个实现了 [AgbaColor](../rgba-color/index.md) 接口的对象 -->

- State.insets

  描述主体被其他元素插入占据的位置信息; 是一个 [DOMInsets](../dom-insets/index.md) 对象


- State.cutoutInsets

  显示的屏幕设置，描述切口插入的区域 只和硬件相关;
  例如在刘海屏中 `State.cutoutInsets.top`的值就是刘海的高度；

- State.outerInsets

  描述在屏幕的显示内容中， App以外的内容插入的区域信息；
  例如： 在系统状态栏的overlay设置为true的情况下，`SafeAreaPlugin.state._currentState.outerInsets.top`的值等于系统状态栏的高度；

## 方法
- 无

## 事件
- 无


## 平台兼容性


| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| overlay      | ✅      | ✅  | ✅          | X       |
| visible      | ✅      | ✅  | ✅          | X       |
| style        | ✅      | ✅  | ✅          | X       |
| color        | ✅      | ✅  | ✅          | X       |
| insets       | ✅      | ✅  | ✅          | X       |
| cutoutInsets | ✅      | ✅  | ✅          | X       |
| outerInsets  | ✅      | ✅  | ✅          | X       |
 

## 相关链接
[StateObserver](../state-observer/index.md)
  
   



