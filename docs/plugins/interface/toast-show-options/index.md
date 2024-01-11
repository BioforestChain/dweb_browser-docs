---
title: ToastShowOptions
category:
  - Interface
tag:
  - ToastShowOptions
---

作为[ToastPlugin.show()](../../plugin/toast/show.md)方法的参数接口；


## 属性

  - text

    消息文本内容；
    属性值是一个 string；

  - duration

    消息持续的时间；
    属性值是一个 [ToastDuration](../toast-duration/index.md)对象
 
  - position

    消息显示的位置；
    属性值是一个 string;
    合法的值的范围是\["top" , "center" , "bottom"\]
    在 Android 12 及更高版本上，所有 toast 都显示在底部

## 方法

  - 无


## 事件

  - 无

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| text         | ✅      | ✅  | ✅           | X       |
| duration     | ✅      | ✅  | ✅           | X       |
| position     | ✅      | ✅  | ✅           | X       |

## 相关链接

[Interface](../index.md)

[ToastPlugin.show()](../../plugin/toast/show.md)

[ToastPlugin](../../plugin/toast/index.md)


