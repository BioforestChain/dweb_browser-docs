---
title: CloseWatcher
category:
  - Plugin
tag:
  - closeWatcher
---

这是一个特殊的插件，它能`抵消一次`系统的返回信号，它也是`一次性的`。因此创建一个 CloseWatcher 对象，它就能抵消一次系统的返回操作。

因此我们可以借助这个插件配合 web 技术模拟一些系统级的操作。比如：web 中实现视频播放全屏的时候，用户点击系统后退按钮，我们就能实现只退出全屏，而不是把整个页面退出了。

总的来说就是拦截系统的返回，在 `android`和 `ios` 中是左滑操作(也可能是返回按键)，在左面端则是抵消一次`esc`按钮，然后可以做一些自己的逻辑操作。

## 方法

### closeWatcher.close()

主动取消这次后退拦截。也就是让这次的后退拦截失效。

### 示例

```ts
import { CloseWatcher } from "@plaoc/plugins";
const closeWatcher = new CloseWatcher();
// 取消此次后退拦截
closeWatcher.close();
```

## 事件

### closeEvent

当您创建一个`CloseWatcher`的时候，如果用户触发了后退操作，那么系统的后退操作会被拦截，并且触发这个 `close`事件。

### 示例

```ts
import { CloseWatcher } from "@plaoc/plugins";
const closeWatcher = new CloseWatcher();
closeWatcher.addEventListener("close", (event) => {
  console.log("这里能接收到后退事件=>", event.isTrusted, event.timeStamp);
});
```

::: tip
扩展阅读[close-watcher 提案](https://github.com/WICG/close-watcher/blob/main/README.md)
:::
