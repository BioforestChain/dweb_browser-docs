---
title: MWebviewPlugin.close()  
category:
  - Plugin
tag:
  - MWebviewPlugin
  - close
---

Destroys the specified webview.

```js
MWebviewPlugin.close(webview_id)
```

## Parameters

- webview_id: The webview identifier. String value.

## Returns

A Promise that resolves to a boolean. 
Resolves to true if destroyed successfully, false if failed.

## Example

```js
import { mwebviewPlugin } from "@plaoc/plugins";

(async () => {
  const { webview_id } = await mwebviewPlugin.open("http://xxx");
  
  const success = await mwebviewPlugin.close(webview_id);

  if (success) {
    console.log("Success");
  } else {
    console.log("Failed");
  }  
})();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| close                 | ✅      | ✅  | ✅          | X       |

## See Also

[MWebviewPlugin](./index.md)