---
title: fileSystemPlugin.writeFile()
category:
  - Plugin
tag:
  - fileSystemPlugin
  - writeFile
---

Write content.

```js
import { fileSystemPlugin } from "@plaoc/plugin";
fileSystemPlugin.writeFile(options)
```

## Parameters

- options: Options for writing the file. The value is a [WriteFileOptions](../../interface/write-file-options/index.md) object.

## Returns

A Promise that resolves to a [WriteFileResult](../../interface/write-file-result/index.md) object.

## Example

```js
import { fileSystemPlugin } from "@plaoc/plugin";

const path = "xxx";
const data = "content";

fileSystemPlugin.writeFile({
  path, 
  data
});
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |  
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| writeFile             | ✅      | ✅  | ✅          | X       |

## See Also
[FileSystemPlugin](../index.md)