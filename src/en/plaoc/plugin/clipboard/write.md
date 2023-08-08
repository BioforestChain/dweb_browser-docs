---
title: ClipboardPlugin.write()
category:
  - Plugin 
tag:
  - ClipboardPlugin
  - write
---

Read the data on the clipboard;

```js
ClipboardPlugin.write(data);
```

## parameters

  - data

    The data to be written; the value of the parameter is the [ClipboardWriteOptions](../../interface/clipboard-write-options/) object;

## return value

  returns a Promise;

## Example
```js
import { clipboardPlugin } from "@plaoc/plugin";
clipboardPlugin.write({string: "test"});
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| write         | ✅       | ✅  | ✅          | X       |

## Related Links

[ClipboardPlugin](./index.md)


