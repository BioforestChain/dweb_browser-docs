---
title: UpdateControllerPlugin.resume()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - resume
---

恢复下载 APP。

## 示例

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
updateControllerPlugin.resume();
```

## 函数签名

```ts
resume(): Promise<boolean>
```

### 参数

- 无

### 返回值

- boolean

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|     resume     |   ✅    | ✅  |    X    |

## 相关链接

[UpdateControllerPlugin](./index.md)
