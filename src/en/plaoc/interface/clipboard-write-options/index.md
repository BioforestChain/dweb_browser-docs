---
title: ClipboardWriteOptions
category:
  - Interface
tag:
  - ClipboardWriteOptions
---

Execute the ClipboardPlugin.write() method to pass the parameter type interface;

```js
ClipboardPlugin.write(ClipboardWriteOptions);
```

## Property

  - string

    optional attributes;
    The attribute value is a string;
    The value that needs to be copied to the clipboard;
  
  - image

    optional attributes;
    The property value is a [Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
    The picture that needs to be copied to the clipboard

  - url

    optional attributes
    The attribute value is a string;
    The url that needs to be copied to the cut class;

  - label

    optional attributes
    The attribute value is a string;
    Copying data is a label added to the data;
    Android only

## Method

  - none

    
## Event

  - none

## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| string                 | ✅      | ✅  | ✅          | X      |
| image                  | ✅      | ✅  | ✅          | X      |
| url                    | ✅      | ✅  | ✅          | X      |
| label                  | ✅      | X   | X          | X      |

## Related Links

[ClipboardPlugin](../../plugin/clipboard/index.md)


