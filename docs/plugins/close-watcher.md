---
outline: deep
---

# close-watcher

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip 介绍：
用于关闭请求的监听 [参考WICG close-watcher](https://github.com/WICG/close-watcher)
:::

- [Usage](#usage)

## Usage

```ts
const closeWatcher = new CloseWatcher();
closeWatcher.addEventListener("close", (event) => {
  closeWatcher.close();
});
```
