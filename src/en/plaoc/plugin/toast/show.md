---
title: ToastPlugin.show()
category:
  - Plugin
tag:
  - ToastPlugin
  - show
---

show message;

```js
ToastPlugin.show(options)
```

## parameters

  - options

    options parameter object;
    The parameter value is a [ToastShowOptions](../../interface/toast-show-options/index.md) object;

## return value

  Return a Promise object;

## Example
```js
import { toastPlugin } from "@plaoc/plugin";
toastPlugin.show({text: "test"})
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| show                 | ✅       | ✅  | ✅          | X       |

## Related Links

[ToastPlugin](./index.md)


