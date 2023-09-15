---
title: MWebviewPlugin.open()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - open  
---

Opens a new webview.

```js
MWebviewPlugin.open(url)
```

## Parameters

- url: The URL to load. String value.

## Returns  

A Promise that resolves to a [WebViewItem](../../interface/webview-item/index.md) object.

## Example

```js
import { mwebviewPlugin } from "@plaoc/plugins";

mwebviewPlugin.open(`http://xxx`); 
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| open                  | ✅      | ✅  | ✅          | X       |

## See Also

[MWebviewPlugin](./index.md)