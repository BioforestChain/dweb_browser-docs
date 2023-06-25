---
title: Haptics
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

Device haptic feedback API.

> For specific example code, see: [Haptics](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Haptics.vue)

## Haptics WebComponent API

To use the WebComponent, you need to mount the DOM node and then call the corresponding API.
Using Vue 3 as an example:

```html
<body>
  <dweb-haptics></dweb-haptics>
  <script type="module">
    import "@dweb-browser/plaoc";
    import { ImpactStyle, NotificationType } from "@dweb-browser/plaoc";
    const haptics = document.querySelector("dweb-haptics")!
    // Trigger light impact on a lightweight object
    const impactLight = async () => {
      await haptics.impactLight({ style: ImpactStyle.Heavy })
    }
    // Vibrate notification
    const notification = async () => {
      await haptics.notification({ type: NotificationType.Success })
    }
  </script>
</body>
```

### impactLight

Trigger light impact on a lightweight object.

- Method signature:

```ts
  async impactLight(options: ImpactOptions): Promise<void>
```

| Param         | Type                                                    | Description           |
| ------------- | ------------------------------------------------------- | --------------------- |
| **`options`** | <code><a href="#impactoptions">ImpactOptions</a></code> | Haptic feedback style |

### notification

Vibrate for notification.

- Method signature:

```ts
  async notification(options: NotificationOptions): Promise<void>
```

| Param         | Type                                                                | Description           |
| ------------- | ------------------------------------------------------------------- | --------------------- |
| **`options`** | <code><a href="#notificationoptions">NotificationOptions</a></code> | Haptic feedback style |

### vibrateClick

Haptic feedback vibration for a click gesture.

- Method signature:

```ts
  async vibrateClick(): Promise<void>
```

### vibrateDisabled

Haptic feedback vibration for a disabled gesture. It consists of a shake effect that starts with an increase in intensity and then decays. Here, only the enhanced shaking phase provides synchronous haptic feedback.

- Method signature:

```ts
  async vibrateDisabled(): Promise<void>
```

### vibrateDoubleClick

Haptic feedback vibration for a double-click gesture.

- Method signature:

```ts
  async vibrateDoubleClick(): Promise<void>
```

### vibrateHeavyClick

Haptic feedback vibration for a heavy-click gesture, such as a menu key or force touch.

- Method signature:

```ts
  async vibrateHeavyClick(): Promise<void>
```

### vibrateTick

Haptic feedback vibration for a tick.

- Method signature:

```ts
  async vibrateTick(): Promise<void>
```

### vibrate

Custom haptic vibration effect.

- Method signature:

```ts
  async vibrate(options: VibrateOptions): Promise<void>
```

| Param         | Type                                                      | Description                             |
| ------------- | --------------------------------------------------------- | --------------------------------------- |
| **`options`** | <code><a href="#vibrateoptions">VibrateOptions</a></code> | Duration of vibration (in milliseconds) |

## Haptics Plugin API

The functionality of the WebComponent is essentially provided by the Plugin. Therefore, the Plugin includes the same API as the WebComponent.

```ts
import { hapticsPlugin } from "@dweb-browser/plaoc";

// Haptic feedback vibration for a click gesture
hapticsPlugin.vibrateClick();
// Haptic

 feedback vibration for a double-click gesture
hapticsPlugin.vibrateDoubleClick();
```

## Interfaces

### ImpactOptions

| Prop        | Type                                                | Description           | Since |
| ----------- | --------------------------------------------------- | --------------------- | ----- |
| **`style`** | <code><a href="#impactstyle">ImpactStyle</a></code> | Haptic feedback style | 1.0.0 |

#### ImpactStyle

| Prop         | Type                | Description                                   | Since |
| ------------ | ------------------- | --------------------------------------------- | ----- |
| **`Heavy`**  | <code>HEAVY</code>  | Collision between large and heavy UI elements | 1.0.0 |
| **`Medium`** | <code>MEDIUM</code> | Collision between medium-sized UI elements    | 1.0.0 |
| **`Light`**  | <code>LIGHT</code>  | Collision between small and light UI elements | 1.0.0 |

### NotificationOptions

| Prop       | Type                          | Description                | Since |
| ---------- | ----------------------------- | -------------------------- | ----- |
| **`type`** | <code>NotificationType</code> | Notification feedback type | 1.0.0 |

### NotificationType

| Prop          | Type                 | Description                                 | Since |
| ------------- | -------------------- | ------------------------------------------- | ----- |
| **`Success`** | <code>SUCCESS</code> | Notification feedback type for task success | 1.0.0 |
| **`Warning`** | <code>WARNING</code> | Notification feedback type for warning      | 1.0.0 |
| **`Error`**   | <code>ERROR</code>   | Notification feedback type for task failure | 1.0.0 |

### VibrateOptions

| Prop           | Type                | Description                             | Since |
| -------------- | ------------------- | --------------------------------------- | ----- |
| **`duration`** | <code>number</code> | Duration of vibration (in milliseconds) | 1.0.0 |
