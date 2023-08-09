---
title: SharePlugin.share()
category:
  - Plugin
tag:
  - SharePlugin
  - share
---

Method for sharing 

```js
SharePlugin.share(options)
```

## Parameters

  - options

    Share options object;
    The value is a [ShareOptions](../../interface/share-options/index.md) object

## Return Value

  Returns a Promise that resolves to a [ShareResult](../../interface/share-result/index.md) object

## Example
```js
import { sharePlugin } from "@plaoc/plugin";

(async() => {
  const b = await sharePlugin.canShare()
  if(!b) return;
  
  const res = await sharePlugin.share({
    title: "Title",
    text: "Text content" 
  })
})();
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| share        | ✅      | ✅  | ✅          | X       |

## Related Links

[SharePlugin](./index.md)