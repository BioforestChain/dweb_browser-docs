---
title: UpdateControllerPlugin.download()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - download
---

Responsible for downloading the app and jumping to the download interface after calling.

## Example

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
updateControllerPlugin.download("http://example.com/metadata.json");
```

## Function signature

```ts
download(medatadaUrl?: string): Promise<boolean>
```

### Parameters

- metadataUrl

  The parameter is the address to access the app metadata.
  The parameter type is string.

### return value

-boolean

## Platform compatibility

| Properties/Methods/Events | Android | IOS | Desktop |
| :-----------------------: | :-----: | :-: | :-----: |
|         download          |   ✅    | ✅  |
