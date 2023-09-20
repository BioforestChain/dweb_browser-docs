---
title: StateObserver.jsonlines()
category:
  - Plugin
tag:
  - StateObserver
  - jsonlines
---

实现了监听插件状态变化的Generator方法；

```js
StateObserver.jsonlines()
```

## 参数

  - 无


## 返回值

  一个迭代器 
  每次迭代返回值是一个实现了部分[State](../state/index.md)接口的对象；


## 示例

```js
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.state.onChange(state => {
  // 系统状态栏的状态发生变化的时候执行
})
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
| jsonlines    | ✅      | ✅  | ✅          | X      |
 

## 相关链接
[StateObserver](../state-observer/index.md)