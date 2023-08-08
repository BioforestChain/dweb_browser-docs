---
title: fileSystemPlugin,getUri()
category:
  - Plugin
tag:
  - fileSystemPlugin
  - getUri
---

look for the address

```js
import { fileSystemPlugin } from "@plaoc/plugin";
fileSystemPlugin.getUri(options)
```

## parameters

  - options

    Query parameter options;
    The data type of the parameter is [GetUriOptions](../../interface/get-uri-options/index.md) object;

## return value

  Return a Promise, resolve to fulfill a [GetUriResult](../../interface/get-uri-result/index.md) object

## Example
```js
import { fileSystemPlugin } from "@plaoc/plugin";
fileSystemPlugin.getUri({
  path: "/path",
  directory: "DOCUMENTS"
})
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getUri               | ✅       | ✅  | ✅         | X      |

## Related Links

[FileSystemPlugin](../index.md)


