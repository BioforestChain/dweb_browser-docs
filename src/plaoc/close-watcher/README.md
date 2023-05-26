---
title: CloseWatcher
category:
  - Plugin
tag:
  - Plugin
---

该插件较为特殊，他提供了一次性(消耗性)的后退拦截，也就是说，每次都需要重新 `new CloseWatcher()`，后退拦截才能持续生效。

> 具体查看示例代码： [Biometrics](https://github.com/BioforestChain/dweb_browser/blob/main/example/vue3/src/pages/CloseWatcher.vue)

## Event `close`

### close

点击系统后退触发该事件。

```ts
const closer = new CloseWatcher();
closer.addEventListener("close", (event) => {
  console.log("CloseWatcher close", event.isTrusted, event.timeStamp);
});
```

**Callback Parameter:** <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent" target="_blank">CloseEvent</a></code>

---

## API `close`

### close

关闭 closeWatcher 监听。

```ts
const closer = new CloseWatcher();
closer.close();
```
