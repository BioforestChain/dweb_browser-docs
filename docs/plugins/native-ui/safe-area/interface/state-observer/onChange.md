---
title: StateObserver.onChange()
category:
  - Plugin 
tag:
  - StateObserver
  - onChange
---

通过StateObserver.onChange()方法，可以添加一个监听器，当状态发生变化的时候会传递新的状态触发这个监听器；
前提条件是必须要开启了监听


```js
通过StateObserver.onChange(listener)
```

## 参数

  - listener

    监听器，当状态发生变化的时候会触发这个listener,同时会把新的状态作为参数传递给listener;

## 返回值

  一个取消监听的函数；执行这个返回的函数可以删除之前添加的listener;

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.state.onChange(state => {
  // 系统状态栏的状态发生变化的时候执行
})

// 开启监听
(async () => {
  for await (const _info of StatusBarPlugin.state.jsonlines()) {
    // 可以在这里获取到状态数据
    // 也可以通过 StateObserver.onChange(listener) 方法实现监听
    // console.log("stateChange", _info);
  }
})();

```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| onChange     | ✅      | ✅  | ✅          | X      |


## 相关链接

[StateObserver](../state-observer/index.md)

[StateObserver.*jsonlines()](./jsonlines.md)

