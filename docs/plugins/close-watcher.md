---
outline: deep
---

# close-watcher

::: tip 介绍：
用于关闭请求的监听 [参考WICG close-watcher](https://github.com/WICG/close-watcher)
:::

- [Usage](#usage)

## Usage

```ts twoslash
import { CloseWatcher } from "@plaoc/plugins";
const closeWatcher = new CloseWatcher();
closeWatcher.addEventListener("close", (event) => {
  closeWatcher.close();
//             ^?
});
```