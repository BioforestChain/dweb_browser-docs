---
outline: deep
---

# close-watcher

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip intro:
Listening for closing requests [Reference WICG close-watcher](https://github.com/WICG/close-watcher)
:::

- [Usage](#usage)

## Usage

```ts
const closeWatcher = new CloseWatcher();
closeWatcher.addEventListener("close", (event) => {
  closeWatcher.close();
});
```
