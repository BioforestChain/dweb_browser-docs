---
title: VirtualKeyboard
category:
  - Plugin
tag:
  - WebComponent
---

控制虚拟键盘的状态和显示隐藏。

> 具体查看示例代码：[VirtualKeyboard](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/VirtualKeyboard.vue)

## VirtualKeyboard WebComponent API

首先需要声明的 html 标签样式，该组件挂载了 statechange 方法，当有状态改变时会触发。

```html
<body>
  <dweb-virtual-keyboard></dweb-virtual-keyboard>
  <script type="module">
    import "@dweb-browser/plaoc";
    const virtualKeyBoard = document.querySelector("dweb-virtual-keyboard")!
    // 监听状态变化
    virtualKeyBoard.addEventListener("statechange",(event)=> {
      console.log("virtualKeyBoard#statechange=>",event)
    })
  </script>
</body>
```

### getState

获取状态

- 调用签名：

  ```ts
    async getState(force_update?: boolean): Promise<$VirtualKeyboardState>
  ```

  | Param              | Type                 | Description      |
  | ------------------ | -------------------- | ---------------- |
  | **`force_update`** | <code>boolean</code> | 是否需要强制更新 |

  **Returns:** <code>Promise&lt;<a href="#virtualkeyboardstate">$VirtualKeyboardState</a>&gt;</code>

### setState

设置状态

- 调用签名：

  ```ts
    async setState<K extends "overlay">(key: K, value: $VirtualKeyboardWritableState[K]): Promise<void>;
  ```

  | Param       | Type                                                                                        | Description                        |
  | ----------- | ------------------------------------------------------------------------------------------- | ---------------------------------- |
  | **`key`**   | <code>"overlay"</code>                                                                      | 设置虚拟键盘状态的属性名称         |
  | **`value`** | <code><a href="#virtualkeyboardwritablestate">$VirtualKeyboardWritableState[key]</a></code> | 设置虚拟键盘状态的属性名称的属性值 |

### setOverlay

设置是否遮盖

- 调用签名:

  ```ts
    async setOverlay(overlay: boolean): Promise<void>
  ```

### getOverlay

获取是否遮盖

- 调用签名：

  ```ts
    async getOverlay(): Promise<boolean>
  ```

## VirtualKeybard Plugin API

控制虚拟键盘，对外提供的插件功能；WebComponent 的功能本质由 Plugin 提供，因此，Plugin 包含 WebComponent 所有 API。
用户也可以依据 Plugin 开发自己定制化的 WebComponent。

导入

```ts
import { virtualKeyboardPlugin } from "@dweb-browser/plaoc";
```

### setState

设置状态

- 调用签名：

  ```ts
    async setState(state: Partial<$VirtualKeyboardWritableState>): Promise<void>
  ```

  | Param       | Type                                                                                   | Description          |
  | ----------- | -------------------------------------------------------------------------------------- | -------------------- |
  | **`state`** | <code><a href="#virtualkeyboardwritablestate">$VirtualKeyboardWritableState</a></code> | 设置虚拟键盘的状态值 |

  > `Partial<Type>` 构造一个类型，其中 Type 的所有属性都设置为可选。该实用程序将返回一个表示给定类型的所有子集的类型。

### setStateByKey

设置某一项的状态

- 调用签名:

  ```ts
    async setStateByKey<K extends "overlay">(key: K, value: $VirtualKeyboardWritableState[K]): Promise<void>
  ```

  | Param       | Type                                                                                        | Description        |
  | ----------- | ------------------------------------------------------------------------------------------- | ------------------ |
  | **`key`**   | <code>"overlay"</code>                                                                      | 设置状态的属性名称 |
  | **`value`** | <code><a href="#virtualkeyboardwritablestate">$VirtualKeyboardWritableState[key]</a></code> | 设置状态的属性值   |

### getState

获取状态

- 调用签名:

  ```ts
    async getState(force_update?: boolean): Promise<$VirtualKeyboardState>
  ```

  | Param              | Type                 | Description      |
  | ------------------ | -------------------- | ---------------- |
  | **`force_update`** | <code>boolean</code> | 是否需要强制更新 |

  **Returns:** <code>Promise&lt;<a href="#virtualkeyboardstate">$VirtualKeyboardState</a>&gt;</code>

### setOverlay

设置是否遮盖

- 调用签名:

  ```ts
    async setOverlay(overlay: boolean): Promise<void>
  ```

### getOverlay

获取是否遮盖

- 调用签名:

  ```ts
    async getOverlay(): Promise<boolean>
  ```

## Interfaces

### $VirtualKeyboardState

| Prop          | Type                                            | Description        | Since |
| ------------- | ----------------------------------------------- | ------------------ | ----- |
| **`overlay`** | <code>boolean</code>                            | 是否遮盖           | 1.0.0 |
| **`insets`**  | <code><a href="#dominsets">DOMInsets</a></code> | 插入区域的尺寸数据 | 1.0.0 |

### $VirtualKeyboardWritableState

| Prop          | Type                 | Description | Since |
| ------------- | -------------------- | ----------- | ----- |
| **`overlay`** | <code>boolean</code> | 是否遮盖    | 1.0.0 |

### DOMInsets

| Prop         | Type                | Description        | Since |
| ------------ | ------------------- | ------------------ | ----- |
| **`top`**    | <code>number</code> | 顶部插入的尺寸数据 | 1.0.0 |
| **`right`**  | <code>number</code> | 右侧插入的尺寸数据 | 1.0.0 |
| **`bottom`** | <code>number</code> | 底部插入的尺寸数据 | 1.0.0 |
| **`left`**   | <code>number</code> | 左侧插入的尺寸数据 | 1.0.0 |
