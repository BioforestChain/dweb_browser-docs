---
title: NavigationBarPlugin.getVisible()  
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getVisible
---

Check if the system navigation bar is visible

```js
NavigationBarPlugin.getVisible()
```

## Parameters

  - None

## Return

  - A Promise object that resolves to a boolean

## Example

```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getVisible()
```

## Platform Support

| API/Method/Event | Android | iOS | Desktop-Dev | Desktop |  
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getVisible   | ✅      | ✅  | ✅          | X       |  

## Related Links

[NavigationBarPlugin](./index.md)