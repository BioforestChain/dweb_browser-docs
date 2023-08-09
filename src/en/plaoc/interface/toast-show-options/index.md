---
title: ToastShowOptions
category:
  - Interface
tag:
  - ToastShowOptions
---

As the parameter interface of [ToastPlugin.show()](../../plugin/toast/show.md) method;


## Property

  - text

     message text content;
     The attribute value is a string;

  - duration

    the duration of the message;
    The property value is a [ToastDuration](../toast-duration/index.md) object

  - position

    where the message is displayed;
    The attribute value is a string;
    The legal value range is \["top" , "center" , "bottom"\]
    On Android 12 and higher, all toasts are displayed at the bottom

## Method

  - none


## Event

  - none

## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| text                   | ✅      | ✅  | ✅           | X       |
| duration               | ✅      | ✅  | ✅           | X       |
| position               | ✅      | ✅  | ✅           | X       |

## Related Links

[Interface](../index.md)

[ToastPlugin.show()](../../plugin/toast/show.md)

[ToastPlugin](../../plugin/toast/index.md)


