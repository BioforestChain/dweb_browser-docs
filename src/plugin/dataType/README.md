---
title: DataType
category:
  - Plugin
tag:
  - /
---

数据类型说明

## BAR_STYLE
  ```js
  /**
   * 条栏的风格
   * Light 代表文字为黑色
   * Dark 代表文字为白色
   */
  export enum BAR_STYLE {
    /**
     * Light text for dark backgrounds.
     *
     */
    Dark = "DARK",

    /**
     * Dark text for light backgrounds.
     *
     */
    Light = "LIGHT",

    /**
     * The style is based on the device appearance.
     * If the device is using Dark mode, the bar text will be light.
     * If the device is using Light mode, the bar text will be dark.
     * On Android the default will be the one the app was launched with.
     *
     */
    Default = "DEFAULT",
  }

  ```

## $AgbaColor
  ```js
    {
      // number 0 ~ 255
      red: number;
      green: number;
      blue: number;
      alpha: number;
    };

  ```

## $Insets
  ```js
    {
      left: number;
      top: number;
      right: number;
      bottom: number;
    }
  ```