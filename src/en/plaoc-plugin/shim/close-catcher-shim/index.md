---
title: CloseWatcherShim
category:
  - Shim  
tag:
  - CloseWatcherShim
---

Shim for listening to close events;
Inherits from [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget);


```js
import { CloseWatcher } from "@plaoc/plugin";
const closeWatcher = new CloseWatcher() 
```

## Properties

  - #id

    Identifier;
    A string;

  - onClose

    Sets or accesses the callback function triggered on the `close` event;
    Passes an [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) to the callback;
    Returns null if not set;
    Similar to the `listener` in `CloseWatcher.addEventListener("close", listener)`; 

## Methods

  - CloseWatcher.close()

    Close itself

  - [CloseWatcher.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

    Add an event listener

  - [CloseWatcher.removeEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

    Remove an event listener

## Events

  Any event

  Predefined events:

  - "close"

    Triggered when closed
    Passes an [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) to the handler

## Example

Vue-based example:

```vue
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { CloseWatcher } from "@plaoc/plugin";

const title = "Close Watcher";
const $dialogEle = ref<HTMLDialogElement>();
const showModal = ref(false);

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
  <button @click="openDialog">Open Dialog</button>
  
  <dialog ref="$dialogEle">
    <!-- dialog content -->
  </dialog>
</template>
```

## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |  
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| #id                  | ✅      | ✅   | ✅           | X       |
| onClose              | ✅      | ✅   | ✅           | X       |
| close                | ✅      | ✅   | ✅           | X       |
| addEventListener     | ✅      | ✅   | ✅           | X       |
| removeEventListener  | ✅      | ✅   | ✅           | X       |
| event close          | ✅      | ✅   | ✅           | X       |

## Related Links  

[Shim](../index.md)