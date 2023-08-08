---
title: BFSMetaData
category:
  - Interface
tag:
  - BFSMetaData
---

app metadata interface;
This is an internal interface and cannot be accessed directly;
Only the Promise returned by [UpdateController.download()](../../plugin/update-controller/download.md) resolves to this interface;

 
## Property

  - id

    identifier;
    The attribute value is a string;

  - server

    The address of the application's entry service file;
    The property value is a [MainServer](../main-server/index.md) object;

  - name

    application name
    The attribute value is a string;

  - short_name

    Application subtitle
    The value of the attribute is a string;

  - icon

    app icon
    The value of the attribute is a string;


  - downloadUrl

    App download address
    The value of the attribute is a string;


 - images

    List of screenshots of the application;
    The attribute value is an Array, and the index value is string;

  - description

    App description
    The attribute value is a string;

  - author

    the author of the application;
    The value of the attribute is a string;

  - version

    the version of the application;
    The value of the attribute is a string;

  -categories

    keywords
    The value of the attribute is a string, and the index value is a string;

  - home

    home page address;
    The attribute value is a string;


  - size

    App size
    The attribute value is a string;

  - fileHash

    Hash value of the file
    The attribute value is a string;

  -permissions

    the license type applied;
    The attribute value is an Array, and the index value is a string;

  - plugins

    A list of plugins used by the application;
    The attribute value is an Array, and the index value is a string;

  - release_date

    Last update time;
    The attribute is just a string;

## Method

  - none

## Event

  - none

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| id                   | ✅      | ✅  | ✅          | X      |
| server               | ✅      | ✅  | ✅          | X      |
| name                 | ✅      | ✅  | ✅          | X      |
| short_name           | ✅      | ✅  | ✅          | X      |
| icon                 | ✅      | ✅  | ✅          | X      |
| downloadUrl          | ✅      | ✅  | ✅          | X      |
| images               | ✅      | ✅  | ✅          | X      |
| description          | ✅      | ✅  | ✅          | X      |
| author               | ✅      | ✅  | ✅          | X      |
| version              | ✅      | ✅  | ✅          | X      |
| categories           | ✅      | ✅  | ✅          | X      |
| home                 | ✅      | ✅  | ✅          | X      |
| size                 | ✅      | ✅  | ✅          | X      |
| fileHash             | ✅      | ✅  | ✅          | X      |
| permissions          | ✅      | ✅  | ✅          | X      |
| plugins              | ✅      | ✅  | ✅          | X      |
| release_date         | ✅      | ✅  | ✅          | X      |

## Related Links

[UpdateControllerPlugin](../../plugin/update-controller/index.md)


