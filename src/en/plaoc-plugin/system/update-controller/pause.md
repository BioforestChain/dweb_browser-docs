---
title: UpdateControllerPlugin.pause()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - pause
---

Pause the download of the app. Calling this API will also pause the download progress update.

::: warning
When the download link service does not support resumed downloading, it will be downloaded again.
:::

## Example

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
updateControllerPlugin.pause();
```

## Function signature

```ts
pause(): Promise<boolean>
```

## Parameters

- none

## return value

-boolean

## Platform compatibility

| Properties/Methods/Events | Android | IOS | Desktop |
| :-----------------------: | :-----: | :-: | :-----: |
|           pause           |   ✅    | ✅  |

## Related Links

[UpdateControllerPlugin](./index.md)
