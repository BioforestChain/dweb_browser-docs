---
title: MWebviewPlugin.open()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - open
---

Open a new window page within the app.

## Example

```ts
import { mwebviewPlugin } from "@plaoc/plugins";
mwebviewPlugin.open(`http://xxx`);
```

## Function signature

```ts
open(url: string): Promise<WebViewItem>
```

### Parameters

-url

Pass the URL to open.

### return value

-WebViewItem

The returned `webview_id` is the opened page ID, and `wid` is the window ID.
The page can be closed based on `webview_id`.

```ts
interface WebViewItem {
  webview_id: string;
  wid: string;
}
```

## Platform compatibility

| Properties/Methods/Events | Android | IOS | Desktop |
| :-----------------------: | :-----: | :-: | :-----: |
|           open            |   ✅    | ✅  |   ✅    |
