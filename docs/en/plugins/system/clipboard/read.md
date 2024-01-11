---
title: ClipboardPlugin.read()
category:
  - Plugin
tag:
  - ClipboardPlugin
  - read
---

Reads data from the clipboard.

```js
ClipboardPlugin.read();
```

## Parameters

- None

## Returns

A Promise that resolves to a [ReadResult](../../interface/read-result/index.md) object.

## Example

```js
clipboardPlugin.read()
.then(result => {
  // Handle read result
});
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |  
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| read                  | ✅      | ✅  | ✅          | X       |

## See Also

[ClipboardPlugin](./index.md)