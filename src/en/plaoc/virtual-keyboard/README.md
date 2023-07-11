---
title: VirtualKeyboard
category:
  - Plugin
tag:
  - WebComponent
---

Controls the state and visibility of a virtual keyboard.

> For specific example code, see: [VirtualKeyboard](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/VirtualKeyboard.vue)

## VirtualKeyboard WebComponent API

First, you need to declare the HTML tag style. The component mounts the `statechange` method, which triggers when there is a state change.

```html
<body>
  <dweb-virtual-keyboard></dweb-virtual-keyboard>
  <script type="module">
    import "@plaoc/plugins";
    const virtualKeyBoard = document.querySelector("dweb-virtual-keyboard")!
    // Listen for state changes
    virtualKeyBoard.addEventListener("statechange",(event)=> {
      console.log("virtualKeyBoard#statechange=>",event)
    })
  </script>
</body>
```

### getState

Get the state.

- Method signature:

  ```ts
    async getState(force_update?: boolean): Promise<$VirtualKeyboardState>
  ```

  | Param              | Type                 | Description                              |
  | ------------------ | -------------------- | ---------------------------------------- |
  | **`force_update`** | <code>boolean</code> | Indicates if a force update is required. |

  **Returns:** <code>Promise&lt;<a href="#virtualkeyboardstate">$VirtualKeyboardState</a>&gt;</code>

### setState

Set the state.

- Method signature:

  ```ts
    async setState<K extends "overlay">(key: K, value: $VirtualKeyboardWritableState[K]): Promise<void>;
  ```

  | Param       | Type                                                                                        | Description                                              |
  | ----------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
  | **`key`**   | <code>"overlay"</code>                                                                      | The name of the attribute that sets the keyboard state.  |
  | **`value`** | <code><a href="#virtualkeyboardwritablestate">$VirtualKeyboardWritableState[key]</a></code> | The value of the attribute that sets the keyboard state. |

### setOverlay

Set whether to overlay.

- Method signature:

  ```ts
    async setOverlay(overlay: boolean): Promise<void>
  ```

### getOverlay

Get whether it overlays.

- Method signature:

  ```ts
    async getOverlay(): Promise<boolean>
  ```

## VirtualKeyboard Plugin API

Controls the virtual keyboard and provides plugin functionality to the outside. The functionality of the WebComponent is essentially provided by the Plugin. Therefore, the Plugin includes all the APIs of the WebComponent. Users can also develop their own customized WebComponent based on the Plugin.

Import:

```ts
import { virtualKeyboardPlugin } from "@plaoc/plugins";
virtualKeyboardPlugin.state.onChange((state) => {
  console.log(state.overlay)
})
virtualKeyboardPlugin.getOverlay()
```

### setState

Set the state.

- Method signature:

  ```ts
    async setState(state: Partial<$VirtualKeyboardWritableState>): Promise<void>
  ```

  | Param       | Type                                                                                   | Description                              |
  | ----------- | -------------------------------------------------------------------------------------- | ---------------------------------------- |
  | **`state`** | <code><a href="#virtualkeyboardwritablestate">$VirtualKeyboardWritableState</a></code> | The state value of the virtual keyboard. |

  > `Partial<Type>` constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

### setStateByKey

Set the state of a specific item.

- Method signature:

  ```ts
    async setStateByKey<K extends "overlay">(key: K, value: $VirtualKeyboardWritableState[K]): Promise<void>
  ```

| Param       | Type                                                                                        | Description                                 |
| ----------- | ------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **`key`**   | <code>"overlay"</code>                                                                      | The name of the property to set the state.  |
| **`value`** | <code><a href="#virtualkeyboardwritablestate">$VirtualKeyboardWritableState[key]</a></code> | The value of the property to set the state. |

### getState

Get the state.

- Method signature:

  ```ts
    async getState(force_update?: boolean): Promise<$VirtualKeyboardState>
  ```

  | Param              | Type                 | Description                              |
  | ------------------ | -------------------- | ---------------------------------------- |
  | **`force_update`** | <code>boolean</code> | Indicates if a force update is required. |

  **Returns:** <code>Promise&lt;<a href="#virtualkeyboardstate">$VirtualKeyboardState</a>&gt;</code>

### setOverlay

Set whether to overlay.

- Method signature:

  ```ts
    async setOverlay(overlay: boolean): Promise<void>
  ```

### getOverlay

Get whether it overlays.

- Method signature:

  ```ts
    async getOverlay(): Promise<boolean>
  ```

## Interfaces

### $VirtualKeyboardState

| Prop          | Type                                            | Description                  | Since |
| ------------- | ----------------------------------------------- | ---------------------------- | ----- |
| **`overlay`** | <code>boolean</code>                            | Indicates if it overlays.    | 1.0.0 |
| **`insets`**  | <code><a href="#dominsets">DOMInsets</a></code> | Size data of the insets area | 1.0.0 |

### $VirtualKeyboardWritableState

| Prop          | Type                 | Description               | Since |
| ------------- | -------------------- | ------------------------- | ----- |
| **`overlay`** | <code>boolean</code> | Indicates if it overlays. | 1.0.0 |

### DOMInsets

| Prop         | Type                | Description                   | Since |
| ------------ | ------------------- | ----------------------------- | ----- |
| **`top`**    | <code>number</code> | Size data of the top inset    | 1.0.0 |
| **`right`**  | <code>number</code> | Size data of the right inset  | 1.0.0 |
| **`bottom`** | <code>number</code> | Size data of the bottom inset | 1.0.0 |
| **`left`**   | <code>number</code> | Size data of the left inset   | 1.0.0 |
