---
title: dwebServiceWorker.canOpenUrl()
category: 
  - Plugin
tag: 
  - dwebServiceWorker 
  - close
---

Check if the application is already installed. This is generally used when communicating with other apps. The parameter passed in is `mmid`, which is the appID of the communication app.

## Example

```ts
import { dwebServiceWorker } from "@plaoc/plugins";

dwebServiceWorker.canOpenUrl("game.text.com.dweb");
```

## Function signature

```ts
canOpenUrl(mmid: $MMID): Promise<$ExterResponse>  
```

### Parameters

- $MMID

 Identity identifier of the app, must end with `.dweb`, format is `${string}.dweb`.

### Return value

When the app exists, success is `true`, otherwise it is `false`.

- $ExterResponse

```ts
interface $ExterResponse {
  success: boolean;
  message: string;
}
```

## Platform compatibility

| Attribute/Method/Event | Android | IOS | Desktop | 
|:------------:|:-----:|:---:|:-----:|
| canOpenUrl | ✅ | ✅ | ✅ |

## Related links

[dwebServiceWorker](../index.md)