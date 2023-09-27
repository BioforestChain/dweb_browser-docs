---
title: fileSystemPlugin.getUri()
category:
  - Plugin
tag:
  - fileSystemPlugin
  - getUri
---

Get URI 

```js
import { fileSystemPlugin } from "@plaoc/plugins";
fileSystemPlugin.getUri(options)
```

## Parameters

- options: Query options. The data type is [GetUriOptions](../../interface/get-uri-options/index.md) object.

## Returns

A Promise that resolves to a [GetUriResult](../../interface/get-uri-result/index.md) object.

## Example

```js
import { fileSystemPlugin } from "@plaoc/plugins";
fileSystemPlugin.getUri({
  path: "/path",
  directory: "DOCUMENTS" 
})
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| getUri                | ✅      | ✅  | ✅          | X       |

## See Also

[FileSystemPlugin](../index.md)