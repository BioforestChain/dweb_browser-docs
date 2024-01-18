---
outline: deep
---

# close-watcher

<Badges name="@plaoc/plugins" />

::: tip intro:
Listening for closing requests [Reference WICG close-watcher](https://github.com/WICG/close-watcher)
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
