---
title: MWebviewPlugin.close()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - close
---

Destroy the specified webview

```js
MWebviewPlugin.close(webview_id)
```

## parameters

  - webview_id

    webview identifier
    The type of the parameter value is string;

## return value

  Return a Promise, and resolve fulfills a boolen;
  If the destruction is successful, it is true, and if the destruction is failed, it is false;

## Example
```js
import { mwebviewPlugin } from "@plaoc/plugin";
;(() => {
  const { webview_id } = await mwebviewPlugin.open("http://xxx");
  const b = mwebviewPlugin.close(webview_id);
  b
  ? console.log("success")
  : console.log("failure");
})();
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| close               | ✅       | ✅  | ✅         | X       |

## Related Links

[MWebviewPlugin](./index.md)


