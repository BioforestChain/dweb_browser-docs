---
title: SharePlugin.share()
category:
  - Plugin
tag:
  - SharePlugin
  - share
---

实现分享的方法

```js
 SharePlugin.share(options)
```

## 参数

  - options

    分享的选项对象；
    参数值是 [ShareOptions](../../interface/share-options/index.md)对象

## 返回值

  返回一个Promise,resolve兑现一个[ShareResult](../../interface/share-result/index.md)对象

## 示例
```js
import { sharePlugin } from "@plaoc/plugins";
;(async() => {
  const b = await sharePlugin.canShare()
  if(!b)return;
  const res = await sharePlugin.show({
    title: "标题"，
    text: "文本内容"
  })
})();
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| share        | ✅       | ✅  | ✅          | X       |

## 相关链接

[SharePlugin](./index.md)


