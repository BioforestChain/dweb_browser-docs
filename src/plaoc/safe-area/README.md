---
title: SafeArea
category:
  - Plugin
tag:
  - WebComponent
---

控制安全区域。

> 具体查看示例代码：[SafeArea](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/SafeArea.vue)

## SafeArea WebComponent API

首先需要声明的 html 标签样式，该组件挂载了 statechange 方法，当有状态改变时会触发。

```html
<body>
  <dweb-safe-area></dweb-safe-area>
  <script type="module">
    import "@plaoc/plugins";
    const safeArea = document.querySelector("dweb-safe-area")!
    async function getOverlay() {
      return await safeArea.getOverlay();
    }
      // 监听状态变化
    safeArea.addEventListener("statechange",(event)=> {
      console.log("safeArea#statechange=>",event)
    })
  </script>
</body>
```

### getState

获取当前状态

- 调用签名：

  ```ts
    async getState(force_update?: boolean): Promise<$SafeAreaState>
  ```

  | Param              | Type                 | Description      |
  | ------------------ | -------------------- | ---------------- |
  | **`force_update`** | <code>boolean</code> | 是否需要强制更新 |

  **Returns:** <code>Promise&lt;<a href="#safeareastate">$SafeAreaState</a>&gt;</code>

### setState

设置状态

- 调用签名：

  ```ts
    async setState<K extends "overlay">(key: K, value: $SafeAreaWritableState[K]): Promise<void>
  ```

| Param       | Type                                                                          | Description            |
| ----------- | ----------------------------------------------------------------------------- | ---------------------- |
| **`key`**   | <code>"overlay"</code>                                                        | 设置安全区域属性的名称 |
| **`value`** | <code><a href="#safeareawritablestate">$SafeAreaWritableState[key]</a></code> | 设置安全区域属性的值   |

### setOverlay

设置是否遮盖

- 调用签名

  ```ts
    async setOverlay(overlay: boolean): Promise<void>
  ```

### getOverlay

获取遮盖状态

- 调用签名：

  ```ts
    async getOverlay(): Promise<boolean>
  ```

## SafeArea Plugin API

控制安全区域，对外提供的插件功能。WebComponent 的功能本质由 Plugin 提供，因此，Plugin 包含 WebComponent 所有 API。
用户也可以依据 Plugin 开发自己定制化的 WebComponent。

使用

```ts
import { safeAreaPlugin } from "@plaoc/plugins";
```

### setState

设置状态

- 调用签名：

  ```ts
    async setState(state: Partial<$SafeAreaWritableState>): Promise<void>
  ```

  | Param       | Type                                                                     | Description        |
  | ----------- | ------------------------------------------------------------------------ | ------------------ |
  | **`state`** | <code><a href="#safeareawritablestate">$SafeAreaWritableState</a></code> | 设置状态栏的风格。 |

  > `Partial<Type>` 构造一个类型，其中 Type 的所有属性都设置为可选。该实用程序将返回一个表示给定类型的所有子集的类型。

### setStateByKey

单独设置某一项状态

- 调用签名

  ```ts
    async setStateByKey<K extends "overlay">(key: K, value: $SafeAreaWritableState[K]): Promise<void>
  ```

  | Param       | Type                                                                          | Description            |
  | ----------- | ----------------------------------------------------------------------------- | ---------------------- |
  | **`key`**   | <code>"overlay"</code>                                                        | 设置安全区域属性的名称 |
  | **`value`** | <code><a href="#safeareawritablestate">$SafeAreaWritableState[key]</a></code> | 设置安全区域属性的值   |

### getState

获取当前状态

- 调用签名：

  ```ts
    async getState(force_update?: boolean): Promise<$SafeAreaState>
  ```

  | Param              | Type                 | Description      |
  | ------------------ | -------------------- | ---------------- |
  | **`force_update`** | <code>boolean</code> | 是否需要强制更新 |

  **Returns:** <code>Promise&lt;<a href="#safeareastate">$SafeAreaState</a>&gt;</code>

### setOverlay

设置是否遮盖

- 调用签名

  ```ts
    async setOverlay(overlay: boolean): Promise<void>
  ```

### getOverlay

获取遮盖状态

- 调用签名：

  ```ts
    async getOverlay(): Promise<boolean>
  ```

## Interfaces

### $SafeAreaState

| Prop               | Type                                            | Description                | Since |
| ------------------ | ----------------------------------------------- | -------------------------- | ----- |
| **`cutoutInsets`** | <code><a href="#dominsets">DOMInsets</a></code> | 切口插入的区域数据         | 1.0.0 |
| **`outerInsets`**  | <code><a href="#dominsets">DOMInsets</a></code> | app 内容之外插入的区域数据 | 1.0.0 |
| **`insets`**       | <code><a href="#dominsets">DOMInsets</a></code> | app 内容插入的区域数据     | 1.0.0 |
| **`overlay`**      | <code>boolean</code>                            | 是否遮盖内容               | 1.0.0 |

### $SafeAreaWritableState

| Prop          | Type                 | Description  | Since |
| ------------- | -------------------- | ------------ | ----- |
| **`overlay`** | <code>boolean</code> | 是否遮盖内容 | 1.0.0 |

### DOMInsets

| Prop         | Type                | Description        | Since |
| ------------ | ------------------- | ------------------ | ----- |
| **`top`**    | <code>number</code> | 顶部插入的尺寸数据 | 1.0.0 |
| **`right`**  | <code>number</code> | 右侧插入的尺寸数据 | 1.0.0 |
| **`bottom`** | <code>number</code> | 底部插入的尺寸数据 | 1.0.0 |
| **`left`**   | <code>number</code> | 左侧插入的尺寸数据 | 1.0.0 |
