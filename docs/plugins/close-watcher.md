---
outline: deep
---

# close-watcher

<Badges name="@plaoc/plugins" />
<Platform supports="iOS,Android,MacOS,Windows" />

::: tip 介绍：
用于关闭请求的监听 [参考 WICG close-watcher](https://github.com/WICG/close-watcher)
:::

- [Usage](#usage)

## Usage

当前`CloseWatcher` 已经注入到全局环境中，等于提前实现了标准，因此可以直接使用。

```ts
const closeWatcher = new CloseWatcher();
closeWatcher.addEventListener("close", (event) => {
  closeWatcher.close();
});
```

`CloseWatcher` 是消耗性的，每次 `new` 都会阻止一次系统回退。

> 在桌面端是抵消 `esc`按钮
