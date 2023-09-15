---
title: dwebServiceWorker.canOpenUrl()
category:
  - Plugin
tag:
  - dwebServiceWorker
  - close
---

查看应用是否已经安装，这一般在跟其他 app 通信的时候检测。参数传递的是 `mmid`，也即通信的 appID。

## 示例

```ts
import { dwebServiceWorker } from "@plaoc/plugins";
dwebServiceWorker.canOpenUrl("game.text.com.dweb");
```

## 函数签名

```ts
canOpenUrl(mmid: $MMID): Promise<$ExterResponse>
```

### 参数

- $MMID

app 的身份标识，必须要以 `.dweb`结尾，格式为 `${string}.dweb`。

### 返回值

存在 app 的时候，success 为 `true`,反之则为 `false`。

- $ExterResponse

```ts
interface $ExterResponse {
  success: boolean;
  message: string;
}
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|   canOpenUrl   |   ✅    | ✅  |   ✅    |

## 相关链接

[dwebServiceWorker](../index.md)
