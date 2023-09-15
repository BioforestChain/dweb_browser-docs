---
title: dwebServiceWorker.restart()
category:
  - Plugin
tag:
  - dwebServiceWorker
  - restart
---

重启应用的前后端,体现出来的效果是 app 关闭，再重新打开。
这个函数可以不处理返回值，因为 app 已经被关闭

## 示例

```ts
import { dwebServiceWorker } from "@plaoc/plugins";
dwebServiceWorker.restart();
```

## 函数签名

```ts
restart(): Promise<$DwebResult>
```

## 参数

- 无

## 返回值

这里的 success 一般都为 true，如果报错，则出现了比较严重的错误，可以提交 issuse,并且说明运行环境。

- $DwebResult

```ts
interface $DwebResult {
  success: boolean;
  message: string;
}
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|    restart     |   ✅    | ✅  |   ✅    |

## 相关链接

[dwebServiceWorker](../index.md)
