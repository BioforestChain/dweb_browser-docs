---
title: ShareOptions
category:
  - Interface
tag:
  - ShareOptions
---

Shared option object; as the parameter interface of [SharePlugin.share()](../../plugin/share/share.md) method;


## Property

- title

  optional attributes;
  the title of the shared content;
  The attribute value is a string;

- text

  optional attributes;
  the text of the shared content;
  The attribute value is a string;

- url

  optional attributes;
  Shared link address;
  The attribute value is a string;

- files

  optional attributes;
  shared files;
  Only support IOS and Android;
  The attribute value is a [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
 

## Method

  - none

## Event

  - none

## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| title                  | ✅      | ✅  | ✅           | X       |
| text                   | ✅      | ✅  | ✅           | X       |
| url                    | ✅      | ✅  | ✅           | X       |
| files                  | ✅      | ✅  | X            | X       |

## Related Links

[Interface](../index.md)

[SharePlugin.share()](../../plugin/share/share.md)

[SharePlugin](../../plugin/share/index.md)


