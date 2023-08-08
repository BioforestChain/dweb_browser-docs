---
title: ClipboardPlugin
category:
  - Plugin
tag:
  - ClipboardPlugin
---

Clipboard plugin; implements access to the system clipboard;

## Property

  - none


## Method

  - [ClipboardPlugin.read()](./read.md)

    Read the data on the clipboard;

  - [ClipboardPlugin.write()](./write.md)

    Write data to the clipboard

## Event

  - none

## Example
```js
import { clipboardPlugin } from "@plaoc/plugin";
clipboardPlugin.read();
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| read                 | ✅      | ✅   | ✅          | X      |
| write                | ✅      | ✅   | ✅          | X      |

## Related Links
[]()


