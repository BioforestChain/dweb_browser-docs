---
title: UpdateControllerPlugin.pause()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - pause
---

暂停下载 App,调用此 API 也会暂停下载进度更新。

::: warning
当下载链接服务不支持断点续传的时候，会重新下载。
:::

## 示例

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
updateControllerPlugin.pause();
```

## 函数签名

```ts
pause(): Promise<boolean>
```

## 参数

- 无

## 返回值

- boolean

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|     pause      |   ✅    | ✅  |    X    |

## 相关链接

[UpdateControllerPlugin](./index.md)
