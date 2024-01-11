---
title: WriteFileOptions
category:
  - Interface
tag:
  - WriteFileOptions
---

Parameter interface for [FileSystemPlugin.writeFile()](../../plugin/file-system/write-file.md) function;

 

## Property

  - path

    the path to write to the file;
    The type of attribute value is string;

  - data

    the body of data written to the file;
    The type of attribute value is string;

  - directory

    optional attributes;
    Write to the directory where the file is located;
    The type of attribute value is [Directory](../directory/index.md);

  - encoding

    optional attributes;
    The code that will definitely write the data;
    The default is base64 encoding;
    The type of attribute value is [Encoding](../encoding/index.md);

  - recursive

    optional attributes;
    Whether to recursively create parent-level directories;
    The default is false;
    The type of attribute value is boolean;


## Method

  - none

## Event

  - none

## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev  | Desktop |
|:------------:|:-------:|:---:|:------------:|:-------:|
| path         | ✅      | ✅  | ✅           | X       |
| data         | ✅      | ✅  | ✅           | X       |
| directory    | ✅      | ✅  | ✅           | X       |
| encoding     | ✅      | ✅  | ✅           | X       |
| recursive    | ✅      | ✅  | ✅           | X       |

## Related Links

[FileSystemPlugin](../../plugin/file-system/index.md)

[FileSystemPlugin.writeFile()](../../plugin/file-system/write-file.md)



