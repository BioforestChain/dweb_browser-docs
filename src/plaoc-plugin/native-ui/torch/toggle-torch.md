---
title:  TorchPlugin.toggleTorch()
category:
  - Plugin
tag:
  - TorchPlugin
  - toggleTorch
---

打开或关闭手电筒；

```js
 TorchPlugin.toggleTorch()
```

## 参数

  - 无

## 返回值

  返回一个Promise,resolve兑现一个boolean;

## 示例
```js
import { torchPlugin } from "@plaoc/plugins";
;(async () => {
  const b = torchPlugin.toggleTorch();
  cosole.log(b ? "打开了手电筒": "关闭了手电筒");
})();
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| toggleTorch  | ✅       | ✅  | ✅          | X       |

## 相关链接

[TorchPlugin](./index.md)


