---
title: TorchPlugin.getTorchState()
category:
  - Plugin 
tag:
  - TorchPlugin
  - getTorchState
---

获取手电筒的状态

```js
TorchPlugin.getTorchState()
```

## 参数

  - 无

## 返回值

  返回一个Promise,resolve兑现一个boolean;
  描述手电筒是否关闭的值；

## 示例
```js
import { torchPlugin } from "@plaoc/plugins";
;(async () => {
  const b = await torchPlugin.getTorchState()
  console.log(b ? "手电筒打开中" : "手电同关闭中")
})();
```

## 平台兼容性

| 属性/方法/事件      | Android | IOS | Desktop-Dev | Desktop |
|:-----------------:|:-------:|:---:|:-----------:|:-------:|
| getTorchState     | ✅       | ✅  | ✅          | X       |

## 相关链接

[TorchPlugin](./index.md)


