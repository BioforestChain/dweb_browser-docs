---
outline: deep
---

# close-watcher

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip Introduction:
Used for monitoring close requests [Refer to WICG close-watcher](https://github.com/WICG/close-watcher)
:::

- [Usage](#usage)

## Usage

The `CloseWatcher` has been injected into the global environment, effectively implementing the standard in advance, so it can be used directly.

```ts
const closeWatcher = new CloseWatcher();
closeWatcher.addEventListener("close", (event) => {
  closeWatcher.close();
});
```

`CloseWatcher` is consumable; each `new` instance will block a system back action.

> On desktop, it counters the `esc` button
