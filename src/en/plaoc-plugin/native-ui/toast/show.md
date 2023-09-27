---
title: ToastPlugin.show()  
category:
  - Plugin
tag:
  - ToastPlugin
  - show
---

Show toast

```js
ToastPlugin.show(options)
```

## Parameters

  - options

    Option parameter object;
    The value is a [ToastShowOptions](../../interface/toast-show-options/index.md) object;

## Return Value

  Returns a Promise that resolves to void;

## Example
```js
import { toastPlugin } from "@plaoc/plugins";
toastPlugin.show({text: "test"})
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| show         | ✅      | ✅  | ✅          | X       |

## Related Links

[ToastPlugin](./index.md)