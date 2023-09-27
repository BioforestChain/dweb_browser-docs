---
title: dwebServiceWorker.restart()
category:
  - Plugin
tag:
  - dwebServiceWorker
  - restart
---

Restart the backend and frontend of the application. The effect is that the app closes and reopens.

The return value of this function can be ignored because the app has already been closed.

## Example

```ts
import { dwebServiceWorker } from "@plaoc/plugins";

dwebServiceWorker.restart();
```

## Function signature

```ts
restart(): Promise<$DwebResult>
```

## Parameters

- None

## Return value

Here success is generally true. If an error occurs, it is a more serious error. You can submit an issue and describe the running environment.

- $DwebResult

```ts
interface $DwebResult {
  success: boolean;
  message: string;
}
```

## Platform compatibility

| Attribute/Method/Event | Android | IOS | Desktop |
| :--------------------: | :-----: | :-: | :-----: |
|        restart         |   ✅    | ✅  |   ✅    |

## Related links

[dwebServiceWorker](../index.md)
