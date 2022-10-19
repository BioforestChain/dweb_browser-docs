---
title: StatusBar
category:
  - Plugin
tag:
  - WebComponent
---

控制系统状态栏。

## example

```html
 <dweb-status-bar id="status_bar" background-color="rgba(100,100,100,0.5)" overlay bar-style="default"></dweb-status-bar>
```

## dweb-status-bar

包含属性：`overlay`, `hidden`, `bar-style`, `background-color`。


### `overlay`

设置状态栏透明，如果设置了`overlay`又设置了`background-color`那么，`background-color`需要使用rgba形式。

### `hidden`

隐藏状态栏。有的手机会直接变黑色不好看，谨慎使用。

### `bar-style`

设置状态栏文字背景样式，枚举类型：

  `default`:	默认的样式（IOS 为白底黑字、Android 为黑底白字、Desktop-dev同Android）
  
  `light-content`:	黑底白字
  
  `dark-content`:	白底黑字（需要 Android API>=23）


### `background-color`

设置状态栏背景颜色，如果设置`overlay`,则需要传递透明值。

## Methods​

> platform为空就是同时支持ios/android/dasktop 平台

| API                                 | platform | return:Promise             | 解释                               |
|-------------------------------------|----------|----------------------------|----------------------------------|
| getStatusBarColor()                 |          | string                     | 获取状态栏颜色                     |
| getStatusBarVisible()               |          | boolean                    | 查看状态栏是否可见                 |
| setStatusBarVisible(isVer = true)   |          | boolean                    | 设置状态栏是否可见                 |
| getStatusBarOverlay()               |          | boolean                    | 查看状态栏是否覆盖内容             |
| setStatusBarOverlay(isOver = false) |          | boolean                    | 设置状态栏是否覆盖内容             |
| getStatusBarIsDark()                |          | dark-content,light-content | 获取状态栏是否更偏向于使用黑色效果 |
