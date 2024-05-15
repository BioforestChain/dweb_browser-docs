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

Currently `CloseWatcher` has been injected into the global environment, which means that the standard has been implemented in advance, so it can be used directly.

```ts
const closeWatcher = new CloseWatcher();
closeWatcher.addEventListener("close", (event) => {
  closeWatcher.close();
});
```

`CloseWatcher` is consumable, and each `new` will prevent a system rollback.

> On desktop it is the offset `esc` button
