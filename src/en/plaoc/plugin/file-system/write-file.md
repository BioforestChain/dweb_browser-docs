---
title: fileSystemPlugin.writeFile()
category:
  - Plugin
tag:
  - fileSystemPlugin
  - writeFile
---

write content

```js
import { fileSystemPlugin } from "@plaoc/plugin";
fileSystemPlugin.writeFile(options)
```

## parameters
  
  - options

  Option parameters to write to the file;
  The parameter value is the [WriteFileOptions](../../interface/write-file-options/index.md) object;

## return value

  Return a Promise, and resolve fulfills a [WriteFileResult](../../interface/write-file-result/index.md) object;

## Example
```js
import { fileSystemPlugin } from "@plaoc/plugin";
const path = "xxx"
const data = "内容"
fileSystemPlugin.writeFile({
  path, data
})
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| writeFile            | ✅       | ✅  | ✅         | X       |

## Related Links
[FileSystemPlugin](../index.md)


