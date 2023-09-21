---
title: UpdateControllerPlugin.cancel()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - cancel
---

Cancel download app. After calling, the ongoing download will be canceled.

## Example

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
updateControllerPlugin.cancel();
```

## Function signature

```ts
cancel(): Promise<boolean>
```

### Parameters

- none

### return value

-boolean

## Platform compatibility

| Properties/Methods/Events | Android | IOS | Desktop |
| :-----------------------: | :-----: | :-: | :-----: |
|          cancel           |   ✅    | ✅  |    X    |

## Related Links

[UpdateControllerPlugin](./index.md)
