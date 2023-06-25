---
title: SafeArea
category:
  - Plugin
tag:
  - WebComponent
---

Controls the safe area.

> For specific example code, see: [SafeArea](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/SafeArea.vue)

## SafeArea WebComponent API

First, you need to declare the HTML tag style. When using this component, it mounts the `statechange` method, which is triggered when there is a state change.

```html
<body>
  <dweb-safe-area></dweb-safe-area>
  <script type="module">
    import "@dweb-browser/plaoc";
    const safeArea = document.querySelector("dweb-safe-area")!
    async function getOverlay() {
      return await safeArea.getOverlay();
    }
      // Listen for state changes
    safeArea.addEventListener("statechange",(event)=> {
      console.log("safeArea#statechange=>",event)
    })
  </script>
</body>
```

### getState

Get the current state.

- Method signature:

  ```ts
    async getState(force_update?: boolean): Promise<$SafeAreaState>
  ```

  | Param              | Type                 | Description                              |
  | ------------------ | -------------------- | ---------------------------------------- |
  | **`force_update`** | <code>boolean</code> | Indicates if a force update is required. |

  **Returns:** <code>Promise&lt;<a href="#safeareastate">$SafeAreaState</a>&gt;</code>

### setState

Set the state.

- Method signature:

  ```ts
    async setState<K extends "overlay">(key: K, value: $SafeAreaWritableState[K]): Promise<void>
  ```

  | Param       | Type                                                                          | Description                                 |
  | ----------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
  | **`key`**   | <code>"overlay"</code>                                                        | The name of the safe area property to set.  |
  | **`value`** | <code><a href="#safeareawritablestate">$SafeAreaWritableState[key]</a></code> | The value of the safe area property to set. |

### setOverlay

Set whether to overlay.

- Method signature:

  ```ts
    async setOverlay(overlay: boolean): Promise<void>
  ```

### getOverlay

Get the overlay state.

- Method signature:

  ```ts
    async getOverlay(): Promise<boolean>
  ```

## SafeArea Plugin API

Controls the safe area and provides plugin functionality to the outside. The functionality of the WebComponent is essentially provided by the Plugin. Therefore, the Plugin includes all the APIs of the WebComponent. Users can also develop their own customized WebComponent based on the Plugin.

Import:

```ts
import { safeAreaPlugin } from "@dweb-browser/plaoc";
```

### setState

Set the state.

- Method signature:

  ```ts
    async setState(state: Partial<$SafeAreaWritableState>): Promise<void>
  ```

  | Param       | Type                                                                     | Description                  |
  | ----------- | ------------------------------------------------------------------------ | ---------------------------- |
  | **`state`** | <code><a href="#safeareawritablestate">$SafeAreaWritableState</a></code> | The style of the status bar. |

  > `Partial<Type>` constructs a type with all properties of Type set to optional. The utility will return a type that represents all subsets of a given type.

### setStateByKey

Set a specific state item individually.

- Method signature:

  ```ts
    async setStateByKey<K extends "overlay">(key: K, value: $SafeAreaWritableState[K]): Promise<void>
  ```

  | Param       | Type                                                                          | Description                                 |
  | ----------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
  | **`key`**   | <code>"overlay"</code>                                                        | The name of the safe area property to set.  |
  | **`value`** | <code><a href="#safeareawritablestate">$SafeAreaWritableState[key]</a></code> | The value of the safe area property to set. |

### getState

Get the current state.

- Method signature:

  ```ts
    async getState(force_update?: boolean): Promise<$SafeAreaState>
  ```

  | Param              | Type                 | Description                              |
  | ------------------ | -------------------- | ---------------------------------------- |
  | **`force_update`** | <code>boolean</code> | Indicates if a force update is required. |

  **Returns:** <code>Promise&lt;<a href="#safeareastate">$SafeAreaState</a>&gt;</code>

### setOverlay

Set whether to overlay.

- Method signature:

  ```ts
    async setOverlay(overlay: boolean): Promise<void>
  ```

### getOverlay

Get the overlay state.

- Method signature:

  ```ts
    async getOverlay(): Promise<boolean>
  ```

## Interfaces

### $SafeAreaState

| Prop               | Type                                            | Description                             | Since |
| ------------------ | ----------------------------------------------- | --------------------------------------- | ----- |
| **`cutoutInsets`** | <code><a href="#dominsets">DOMInsets</a></code> | The inset data for cutouts.             | 1.0.0 |
| **`outerInsets`**  | <code><a href="#dominsets">DOMInsets</a></code> | The inset data outside the app content. | 1.0.0 |
| **`insets`**       | <code><a href="#dominsets">DOMInsets</a></code> | The inset data for app content.         | 1.0.0 |
| **`overlay`**      | <code>boolean</code>                            | Whether it overlays content.            | 1.0.0 |

### $SafeAreaWritableState

| Prop          | Type                 | Description                  | Since |
| ------------- | -------------------- | ---------------------------- | ----- |
| **`overlay`** | <code>boolean</code> | Whether it overlays content. | 1.0.0 |

### DOMInsets

| Prop         | Type                | Description                 | Since |
| ------------ | ------------------- | --------------------------- | ----- |
| **`top`**    | <code>number</code> | The top inset size data.    | 1.0.0 |
| **`right`**  | <code>number</code> | The right inset size data.  | 1.0.0 |
| **`bottom`** | <code>number</code> | The bottom inset size data. | 1.0.0 |
| **`left`**   | <code>number</code> | The left inset size data.   | 1.0.0 |
