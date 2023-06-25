---
title: NavigationBar
category:
  - Plugin
tag:
  - WebComponent
---

Controls the system's bottom navigation bar.

> For specific example code, see: [NavigationBar](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/NavigationBar.vue)

## NavigationBar WebComponent API

Declares the HTML tag style. When using it, you need to mount it to the DOM first:

```html
<body>
  <dweb-navigation-bar></dweb-navigation-bar>
  <script type="module">
    import "@dweb-browser/plaoc";
    const navigationBar = document.querySelector("dweb-navigation-bar")!;
    async function getState() {
     console.log(await navigationBar.getState());
    }
    // Triggered with state changes
    navigationBar.addEventListener("statechange",(event)=> {
      console.log("statechange=>",event)
    })
  </script>
</body>
```

### setColor

Set the background color.

- Method signature:

  ```typescript
    async setColor(color: string): Promise<string>
  ```

  | Param       | Type                | Description                                                       |
  | ----------- | ------------------- | ----------------------------------------------------------------- |
  | **`color`** | <code>string</code> | The hexadecimal value of the background color, e.g., `#3C5D65B6`. |

### getColor

Get the background color of the navigation bar.

- Method signature:

  ```ts
    async getColor(): Promise<string>
  ```

### setStyle

Set the style of the navigation bar, whether it should have a light or dark appearance.

- Method signature:

  ```ts
    setStyle(style: BAR_STYLE): Promise<unknown>
  ```

  | Param       | Type                                            | Description                      |
  | ----------- | ----------------------------------------------- | -------------------------------- |
  | **`style`** | <code><a href="#bar-style">BAR_STYLE</a></code> | The style of the navigation bar. |

### getStyle

Get the current style of the navigation bar.

- Method signature:

  ```ts
    async getStyle(): Promise<BAR_STYLE>
  ```

  **Returns:** <code>Promise&lt;<a href="#bar-style">BAR_STYLE</a>&gt;</code>

### show

Show the navigation bar.

- Method signature:

  ```ts
    async show(): Promise<unknown>
  ```

### hide

Hide the navigation bar.

- Method signature:

  ```ts
    async hide(): Promise<unknown>
  ```

### setVisible

Set the visibility of the navigation bar.

- Method signature:

  ```ts
    async setVisible(visible: boolean): Promise<unknown>
  ```

### getVisible

Get whether the navigation bar is visible.

- Method signature:

  ```ts
    async getVisible(): Promise<boolean>
  ```

### setOverlay

Set whether the navigation bar overlays the content.

- Method signature:

  ```ts
    setOverlay(overlay: boolean): Promise<unknown>
  ```

### getOverlay

Get the overlay state of the navigation bar.

- Method signature:

  ```ts
  async getOverlay(): Promise<boolean>
  ```

## NavigationBar Plugin API

Controls the navigation bar and provides plugin functionality to the outside. The functionality of the WebComponent is essentially provided by the Plugin. Therefore, the Plugin includes all the APIs of the WebComponent. Users can also develop their own customized WebComponent based on the Plugin.

Import:

```ts
import { navigationBarPlugin } from "@dweb-browser/plaoc";
```

### setState

Set the state of the navigation bar.

- Method signature:

  ```typescript
  async setState(state: Partial<$NavigationBarWritableState>):Promise<void
  ```

| Param       | Type                                                                               | Description                      |
| ----------- | ---------------------------------------------------------------------------------- | -------------------------------- |
| **`state`** | <code><a href="#navigationbarwritablestate">$NavigationBarWritableState</a></code> | The state of the navigation bar. |

> `Partial<Type>` constructs a type with all properties of Type set to optional. The utility will return a type that represents all subsets of a given type.

### setStateByKey

Set a specific state item individually.

- Method signature:

```ts
setStateByKey<K extends keyof $NavigationBarWritableState>(key: K, value: $NavigationBarWritableState[key]): Promise<void>
```

| Param       | Type                                                                                    | Description                                        |
| ----------- | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **`key`**   | <code><a href="#navigationbarwritablestate">string</a></code>                           | The key of the state item in the navigation bar.   |
| **`value`** | <code><a href="#navigationbarwritablestate">$NavigationBarWritableState[key]</a></code> | The value of the state item in the navigation bar. |

### getState

Get the state.

- Method signature:

  ```ts
  async getState(force_update?: boolean): Promise<$BarState>
  ```

  | Param              | Type                 | Description                              |
  | ------------------ | -------------------- | ---------------------------------------- |
  | **`force_update`** | <code>boolean</code> | Indicates if a force update is required. |

  **Returns:** <code>Promise&lt;<a href="#barstate">$BarState</a>&gt;</code>

## Interfaces

### BAR_STYLE

Constraints the style types of the navigation bar. "Dark" represents light text on a dark background, while "Light" represents dark text on a light background.

Default: If the device uses a dark mode, the bar text will become light. If the device uses a light mode, the bar text will become dark. On Android, the default style will be the one used when launching the application.

| Prop          | Type                 | Description                   | Since |
| ------------- | -------------------- | ----------------------------- | ----- |
| **`Dark`**    | <code>DARK</code>    | Light text on dark background | 1.0.0 |
| **`Light`**   | <code>LIGHT</code>   | Dark text on light background | 1.0.0 |
| **`Default`** | <code>DEFAULT</code> | Style based on device changes | 1.0.0 |

### $BarState

#### $NavigationBarWritableState

| Prop          | Type                                            | Description                | Since |
| ------------- | ----------------------------------------------- | -------------------------- | ----- |
| **`color`**   | <code>string</code>                             | Background color           | 1.0.0 |
| **`style`**   | <code><a href="#bar-style">BAR_STYLE</a></code> | Overall style              | 1.0.0 |
| **`overlay`** | <code>boolean</code>                            | Whether it overlays        | 1.0.0 |
| **`visible`** | <code>boolean</code>                            | Whether the bar is visible | 1.0.0 |
