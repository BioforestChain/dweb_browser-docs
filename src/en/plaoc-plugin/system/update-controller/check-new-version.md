---
title: UpdateControllerPlugin.checkNewVersion()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - checkNewVersion
---

Check if there is a new app version.

## Example

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
updateControllerPlugin.checkNewVersion();
```

## Function signature

```ts
checkNewVersion(): Promise<$DwebResult>
```

### Parameters

- none

### return value

success returns true if a new version exists, false otherwise.

-$DwebResult

```ts
interface $DwebResult {
  success: boolean;
  message: string;
}
```

## Platform compatibility

| Properties/Methods/Events | Android | IOS | Desktop |
| :-----------------------: | :-----: | :-: | :-----: |
|      checkNewVersion      |   ✅    | ✅  |   ✅    |
