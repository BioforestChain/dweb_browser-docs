---
title: MWebviewPlugin.activate()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - activate
---

Waking up the app window will activate the app window to the top.

## Example

```ts
import { mwebviewPlugin } from "@plaoc/plugins";
mwebviewPlugin.activate();
```

## Function signature

```ts
activate(): Promise<boolean>
```

### Parameters

- none

## return value

-boolean

## Platform compatibility

| Properties/Methods/Events | Android | IOS | Desktop |
| :-----------------------: | :-----: | :-: | :-----: |
|         activate          |   ✅    | ✅  |   ✅    |
