---
title: StatusBarPlugin.show()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - show
---

Show the system status bar  

```js  
StatusBarPlugin.show()
```

## Parameters

  - None

## Return Value

  - A Promise object that resolves to null  

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.show()
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| show     | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)