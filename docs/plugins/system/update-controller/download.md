---
title: UpdateControllerPlugin.download()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - download
---

负责 app 的下载，调用后跳转到下载界面。

## 示例

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
updateControllerPlugin.download("http://example.com/metadata.json");
```

## 函数签名

```ts
download(medatadaUrl?: string): Promise<boolean>
```

### 参数

- metadataUrl

  参数是访问 app 元数据的地址。
  参数的类型是 string。

### 返回值

- boolean

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|    download    |   ✅    | ✅  |   X    |
