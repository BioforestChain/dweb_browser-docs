---
title: MWebviewPlugin.closeApp()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - closeApp
---

关闭整个应用窗口。

## 示例

```ts
import { mwebviewPlugin } from "@plaoc/plugins";
mwebviewPlugin.closeApp();
```

## 函数签名

```ts
closeApp(): Promise<boolean>
```

### 参数

- 无

### 返回值

- boolean

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|    closeApp    |   ✅    | ✅  |   ✅    |
