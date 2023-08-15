---
title: ToastPlugin.show()
category:
  - Plugin
tag:
  - ToastPlugin
  - show
---

显示消息

```js
ToastPlugin.show(options)
```

## 参数

  - options

    选项参数对象；
    参数值是一个[ToastShowOptions](../../interface/toast-show-options/index.md)对象；

## 返回值

  返回一个 Promise，resolve兑现一个 void;

## 示例
```js
import { toastPlugin } from "@plaoc/plugin";
toastPlugin.show({text: "test"})
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| show         | ✅       | ✅  | ✅          | X       |

## 相关链接

[ToastPlugin](./index.md)


