---
title: MWebviewPlugin.close()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - close
---

销毁指定的webview

```js
MWebviewPlugin.close(webview_id)
```

## 参数

  - webview_id

    webview标识符
    参数值的类型是 string;

## 返回值

  返回一个Promise，resolve兑现一个boolen;
  销毁成功兑现的是true,销毁失败兑现的是false;

## 示例
```js
import { mwebviewPlugin } from "@plaoc/plugins";
;(() => {
  const { webview_id } = await mwebviewPlugin.open("http://xxx");
  const b = mwebviewPlugin.close(webview_id);
  b
  ? console.log("成功")
  : console.log("失败");
})();
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| close        | ✅       | ✅  | ✅         | X       |

## 相关链接

[MWebviewPlugin](./index.md)


