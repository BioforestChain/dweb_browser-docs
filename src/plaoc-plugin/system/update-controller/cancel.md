---
title: UpdateControllerPlugin.cancel()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - cancel
---

取消下载 app ，调用后会取消正在进行的下载。

## 示例

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
updateControllerPlugin.cancel();
```

## 函数签名

```ts
cancel(): Promise<boolean>
```

### 参数

- 无

### 返回值

- boolean

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|     cancel     |   ✅    | ✅  |    X    |

## 相关链接

[UpdateControllerPlugin](./index.md)
