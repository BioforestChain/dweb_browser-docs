---
title: MWebviewPlugin.open()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - open
---

Open a new webview

```js
MWebviewPlugin.open(url)
```

## parameters

  - url

    The address to be loaded;
    The parameter value is a string;

## return value

  Return a Promise, and resolve fulfills a [WebViewItem](../../interface/webview-item/index.md) object;

## Example
```js
import { mwebviewPlugin } from "@plaoc/plugin";
mwebviewPlugin.open(`http://xxx`)
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| open                 | ✅       | ✅  | ✅         | X       |

## Related Links

[MWebviewPlugin](./index.md)


