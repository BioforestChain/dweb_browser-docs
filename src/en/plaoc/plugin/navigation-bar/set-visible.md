---
title: NavigationBarPlugin.setVisible()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setVisible 
---

Set whether the system navigation bar is visible

```js
NavigationBarPlugin.setVisible(b)
```

## parameters

  - b

    The parameter accepts a boolean;


## return value

  A Promise object that resolves to null

## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setVisible(true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| setVisible           | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


