---
title: MWebviewPlugin.activate()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - activate
---

唤醒 app 窗口，会把 app 窗口激活到最上层。

## 示例

```ts
import { mwebviewPlugin } from "@plaoc/plugins";
mwebviewPlugin.activate();
```

## 函数签名

```ts
activate(): Promise<boolean>
```

### 参数

- 无

## 返回值

- boolean

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|    activate    |   ✅    | ✅  |   ✅    |

