---
title: UpdateControllerPlugin.checkNewVersion()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - checkNewVersion
---

检查是否有新的 app 版本。

## 示例

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
updateControllerPlugin.checkNewVersion();
```

## 函数签名

```ts
checkNewVersion(): Promise<$DwebResult>
```

### 参数

- 无

### 返回值

存在新版本 success 返回 true 否则返回 false。

- $DwebResult

```ts
interface $DwebResult {
  success: boolean;
  message: string;
}
```

## 平台兼容性

| 属性/方法/事件  | Android | IOS | Desktop |
| :-------------: | :-----: | :-: | :-----: |
| checkNewVersion |   ✅    | ✅  |   ✅    |
