---
title: MWebviewPlugin.close()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - close
---

销毁 app 内部指定的页面。

## 示例

```ts
import { mwebviewPlugin } from "@plaoc/plugins";
(() => {
  const { webview_id } = await mwebviewPlugin.open("http://xxx");
  mwebviewPlugin.close(webview_id);
})();
```

## 函数签名

```ts
close(webview_id: string): Promise<boolean>
```

### 参数

- string

  webview 标识符，可以理解为页面 ID。

### 返回值

- boolean

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|     close      |   ✅    | ✅  |   ✅    |
