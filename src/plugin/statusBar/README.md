---
title: StatusBar
category:
  - Plugin
tag:
  - WebComponent
---

控制系统状态栏。

## example

```html
 <dweb-status-bar></dweb-status-bar>
```

## Attribute


## Event

### statechange
  - 事件类型

    CustomEvent
  
  - 触发时机

    当状态发生变化的时候触发
      
## Property

### state
  - 作用：
    
    访问 HTMLDwebStatusBarElement 的状态对象

  - 数据类型

    `Object`

    ```typescript
      {
        /**
         * Whether the bar is visible or not.
         */
        visible: boolean;

        /**
         * The current bar style.
         */
        style: BAR_STYLE;

        /**
         * The current bar color.
         *
         * This option is only supported on Android.
         */
        color: $AgbaColor;

        /**
         * Whether the bar is overlaid or not.
         *
         * This option is only supported on Android.
         */
        overlay: boolean;
        insets: $Insets;
      }

    ```
    [BAR_STYLE](../dataType/#bar-style)

    [$AgbaColor](../dataType/#agbacolor)

    [$Insets](../dataType/#insets)

## Method

### setColor

  - 作用：

    设置背景色

  - 调用签名：

    ```typescript
      async setColor(color: string): Promise<string>
    ```
  - 参数说明：

    十六进制背景色的值 

### getColor

  - 作用

    获取背景色

  - 调用签名

    ```typescript
      async getColor(): Promise<string>
    ```

### setStyle

  - 作用

    设置风格

  - 调用签名
    
    ```typescript
      setStyle(style: BAR_STYLE): Promise<unknown>

    ```

  - 数据类型说明：

    [BAR_STYLE](../dataType/#bar-style)

### getStyle

  - 作用

    获取当前风格

  - 调用签名

    ```typescript
      async getStyle(): Promise<BAR_STYLE>

    ```

  - 数据类型说明：

    [BAR_STYLE](../dataType/#bar-style)

### show

  - 作用

    显示

  - 调用签名

    ```typescript
      async show(): Promise<unknown>
    ```

### hide

  - 作用

    隐藏

  - 调用签名

    ```typescript
      async hide(): Promise<unknown>
    ```

### setVisible

  - 作用

    设置 显示/隐藏

  - 调用签名

    ```typescript
      async setVisible(visible: boolean): Promise<unknown>

    ```
### getVisible

  - 作用

    获取是否显示

  - 调用签名

    ```typescript
      async getVisible(): Promise<boolan>

    ```

### setOverlay

  - 作用

    设置 遮盖

  - 调用签名

    ```typescript
      setOverlay(overlay: boolean): Promise<unknown>
    ```

### getOverlay

  - 作用

    获取 遮盖状态

  - 调用签名
     
     ```typescript
      async getOverlay(): Promise<boolan>
     ```
