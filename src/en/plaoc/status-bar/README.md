---
title: StatusBar
category:
  - Plugin
tag:
  - WebComponent
---


Control the system status bar.

> See example code: [Status Bar](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/StatusBar.vue)

## StatusBar WebComponent API

First, you need to declare the HTML tag style. This component mounts the `statechange` method, which triggers when there is a state change.

```html
<body>
  <dweb-status-bar></dweb-status-bar>
  <script type="module">
    import "@dweb-browser/plaoc";
    const statusBar = document.querySelector("dweb-status-bar")!
     async function hideStatusBar() {
      await statusBar.hide()
    }
    // Triggered along with state change
    statusBar.addEventListener("statechange",(event)=> {
      console.log("statechange=>",event)
    })
  </script>
</body>
```

### setColor

Set the background color of the status bar.

- Method signature:

  ```ts
    async setColor(color: string): Promise<string>
  ```

  | Param       | Type                | Description                                            |
  | ----------- | ------------------- | ------------------------------------------------------ |
  | **`color`** | <code>string</code> | The hexadecimal value of the color, e.g., `#3C5D65B6`. |

### getColor

Get the background color of the status bar.

- Method signature:

  ```ts
    async getColor(): Promise<string>
  ```

### setStyle

Set the style of the status bar, whether it should have a light or dark theme.

- Method signature:

  ```ts
    setStyle(style: BAR_STYLE): Promise<unknown>
  ```

| Param       | Type                                            | Description                  |
| ----------- | ----------------------------------------------- | ---------------------------- |
| **`style`** | <code><a href="#bar-style">BAR_STYLE</a></code> | The style of the status bar. |

### getStyle

Get the current style of the status bar.

- Method signature:

  ```ts
    async getStyle(): Promise<BAR_STYLE>
  ```

  **Returns:** <code>Promise&lt;<a href="#bar-style">BAR_STYLE</a>&gt;</code>

### show

Show the status bar.

- Method signature:

  ```ts
    async show(): Promise<unknown>
  ```

### hide

Hide the status bar.

- Method signature:

  ```ts
    async hide(): Promise<unknown>
  ```

### setVisible

Set the visibility of the status bar.

- Method signature:

  ```ts
    async setVisible(visible: boolean): Promise<unknown>
  ```

### getVisible

Get the visibility of the status bar.

- Method signature:

  ```ts
    async getVisible(): Promise<boolan>
  ```

### setOverlay

Set whether the status bar overlays the content.

- Method signature:

  ```ts
    setOverlay(overlay: boolean): Promise<unknown>
  ```

### getOverlay

Get the overlay status of the status bar.

- Method signature:

  ```ts
   async getOverlay(): Promise<boolan>
  ```

## StatusBar Plugin API

Control the system status bar and provide plugin functionality. The functionality of the WebComponent is essentially provided by the Plugin, so the Plugin includes all the WebComponent APIs. Users can also develop their own customized WebComponents based on the Plugin.

Import

```ts
import { statusBarPlugin } from "@dweb-browser/plaoc";
```

### setState

Set the state of the system status bar.

- Method signature:

  ```ts
  setState(state: Partial<$StatusBarWritableState>):Promise<void>
  ```

| Param       | Type                                                                       | Description                  |
| ----------- | -------------------------------------------------------------------------- | ---------------------------- |
| **`state`** | <code><a href="#statusbarwritablestate">$StatusBarWritableState</a></code> | The state of the status bar. |

> `Partial<Type>` constructs a type where all properties of Type are optional. This utility will return a type representing all subsets of a given type.

### setStateByKey

Set a specific state item individually.

- Method signature:

```ts
setStateByKey<K extends keyof $StatusBarWritableState>(key: K, value: $StatusBarWritableState[key]): Promise<void>
```

| Param       | Type                                                                            | Description                       |
| ----------- | ------------------------------------------------------------------------------- | --------------------------------- |
| **`key`**   | <code><a href="#statusbarwritablestate">string</a></code>                       | The key of the status bar item.   |
| **`value`** | <code><a href="#statusbarwritablestate">$StatusBarWritableState[key]</a></code> | The value of the status bar item. |

### getState

Get the state.

- Method signature:

  ```ts
    async getState(force_update?: boolean): Promise<$BarState>
  ```

  | Param              | Type                 | Description                 |
  | ------------------ | -------------------- | --------------------------- |
  | **`force_update`** | <code>boolean</code> | Whether to force an update. |

  **Returns:** <code>Promise&lt;<a href="#barstate">$BarState</a>&gt;</code>

## Interfaces

### BAR_STYLE

The style types for the status bar, where `Light` represents light-colored text on a dark background, and `Dark` represents dark-colored text on a light background.

Default: On Android, it will be the style that the app was launched with. On other platforms, the style will be based on the device's appearance settings.

| Prop          | Type                 | Description               | Since |
| ------------- | -------------------- | ------------------------- | ----- |
| **`Dark`**    | <code>DARK</code>    | Light text on dark        | 1.0.0 |
| **`Light`**   | <code>LIGHT</code>   | Dark text on light        | 1.0.0 |
| **`Default`** | <code>DEFAULT</code> | Style based on the device | 1.0.0 |

### $BarState

#### $StatusBarWritableState

| Prop          | Type                                            | Description           | Since |
| ------------- | ----------------------------------------------- | --------------------- | ----- |
| **`color`**   | <code>string</code>                             | Background color      | 1.0.0 |
| **`style`**   | <code><a href="#bar-style">BAR_STYLE</a></code> | Overall style         | 1.0.0 |
| **`overlay`** | <code>boolean</code>                            | Whether to overlay    | 1.0.0 |
| **`visible`** | <code>boolean</code>                            | Whether it is visible | 1.0.0 |
