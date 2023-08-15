---
title: CloseWatcherShim
category:
  - Shim
tag:
  - CloseWatcherShim
---

监听关闭的垫片；
继承与[EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget);


```js
import { CloseWatcher } from "@plaoc/plugin";
const closeWatcher = new CloseWatcher()
```

## 属性

  - #id

    标识符；
    属性值是一个 string；

  - onClose

    设置或访问， `close` 事件会触发的回调函数；
    会把 [Event](https://developer.mozilla.org/zh-CN/docs/Web/API/Event) 传递给这个回调函数；
    如果没有设置这属性值返回null;
    类似 `CloseWatcher.addEventListener("close", listener)` 中的 `listener`;

## 方法

  - CloseWatcher.close()

    关闭自己；

  - [CloseWatcher.addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

    
    添加事件监听器

  - [CloseWatcher.removeEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener)


    移除事件监听器；


## 事件

  任意事件；
  预定义事件如下：

  - "close"

    被关闭后触发的事件；
    会把 [Event](https://developer.mozilla.org/zh-CN/docs/Web/API/Event) 作为参数传递给事件处理器；

## 示例
下面的实例基于 vue 实现；
```vue
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { CloseWatcher } from "@plaoc/plugin";

const title = "Close Watcher";
const $dialogEle = ref<HTMLDialogElement>();
const showModal = ref(false);

let console: Console;
let dialogEle: HTMLDialogElement;
onMounted(() => {
  dialogEle = $dialogEle.value!;
});

const openDialog = () => {
  if (dialogEle.open) {
    return;
  }
  dialogEle.showModal();
  showModal.value = true;
  const closer = new CloseWatcher();

  closer.addEventListener("close", (event) => {
    dialogEle.close();
    showModal.value = false;
  });

  dialogEle.onclose = (event) => {
    closer.close();
  };

  dialogEle.oncancel = (event) => {
    closer.close();
  };
};

const closeDialog = () => {
  dialogEle.close();
};
</script>

<template>
  <div class="card glass">
    <figure class="icon">
      <img src="../../assets/closewatcher.svg" :alt="title" />
    </figure>
    <article class="card-body">
      <h2 class="card-title">Close Watcher</h2>
      <dialog ref="$dialogEle">
        <div class="modal" :class="{'modal-open': showModal}">
          <div class="modal-box">
            <h3 class="text-lg font-bold">Dialog</h3>
            <p class="py-4">Hi</p>
            <div class="modal-action">
              <button class="btn" @click="closeDialog">Yay!</button>
            </div>
          </div>
        </div>
      </dialog>

      <button class="inline-block rounded-full btn btn-accent" @click="openDialog">Open Dialog</button>
    </article>
  </div>
  <div class="divider">LOG</div>
</template>



```


## 平台兼容性

| 属性/方法/事件         | Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| #id                  | ✅      | ✅  | ✅           | X       |
| onClose              | ✅      | ✅  | ✅           | X       |
| close                | ✅      | ✅  | ✅           | X       |
| addEventListener     | ✅      | ✅  | ✅           | X       |
| removeEventListener  | ✅      | ✅  | ✅           | X       |
| event close          | ✅      | ✅  | ✅          | X       |

## 相关链接

[Shim](../index.md)


