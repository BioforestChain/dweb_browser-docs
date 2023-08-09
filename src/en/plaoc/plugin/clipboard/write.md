---
title: ClipboardPlugin.write()
category:
  - Plugin
tag:
  - ClipboardPlugin
  - write  
---

Writes data to the clipboard.

```js
ClipboardPlugin.write(data);
```

## Parameters

- data: 

  The data to write, passed as a [ClipboardWriteOptions](../../interface/clipboard-write-options/) object.

## Returns

A Promise.

## Example

```js
import { clipboardPlugin } from "@plaoc/plugin";

clipboardPlugin.write({string: "test"}); 
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| write                 | ✅      | ✅  | ✅          | X       |

## See Also

[ClipboardPlugin](./index.md)