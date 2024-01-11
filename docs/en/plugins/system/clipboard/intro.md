---
title: ClipboardPlugin
category:
  - Plugin
tag:
  - ClipboardPlugin
---

Clipboard plugin that provides access to the system clipboard.

## Properties

- None

## Methods

- [ClipboardPlugin.read()](./read.md)

  Reads data from the clipboard.

- [ClipboardPlugin.write()](./write.md)

  Writes data to the clipboard.

## Events

- None  

## Example

```js
import { clipboardPlugin } from "@plaoc/plugins";
clipboardPlugin.read();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| read                  | ✅      | ✅  | ✅          | X       |
| write                 | ✅      | ✅  | ✅          | X       |

## See Also

[]()