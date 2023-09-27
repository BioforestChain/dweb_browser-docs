---
title: MWebviewPlugin.close()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - close
---

Destroy the specified page within the app.

## Example

```ts
import { mwebviewPlugin } from "@plaoc/plugins";
(() => {
  const { webview_id } = await mwebviewPlugin.open("http://xxx");
  mwebviewPlugin.close(webview_id);
})();
```

## Function signature

```ts
close(webview_id: string): Promise<boolean>
```

### Parameters

-string

The webview identifier can be understood as the page ID.

### return value

-boolean

## Platform compatibility

| Properties/Methods/Events | Android | IOS | Desktop |
| :-----------------------: | :-----: | :-: | :-----: |
|           close           |   ✅    | ✅  |   ✅    |
