---
title: Status Bar
category:
  - Plugin
tag:
  - WebComponent
---

控制系统状态栏。

> 具体查看示例代码： [Status Bar](https://github.com/BioforestChain/dweb_browser/blob/main/example/vue3/src/pages/StatusBar.vue)


## HTMLDwebBarcodeScanningElement

  声明 html 标签样式

  ```html
    <dweb-barcode-scanning></dweb-barcode-scanning>
  ```

  继承值 class HTMLStateObserverElement<$StatusBarRawState, $StatusBarState>

  - 数据类型说明：

    [class HTMLStateObserverElement](../dataType/#class-htmlstateobserverelement)

    [$StatusBarRawState](../dataType/#statusbarrawstate)

    [$StatusBarState](../dataType/#statusbarstate)

### plugin

  - 作用：

    访问插件对象,是 class StatusbarPlugin 的实例;

  - 数据类型：

    [class StatusBarPlugin](#class-statusbarplugin)

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

    设置 是否遮盖

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

## class StatusBarPlugin

  控制系统状态栏，对外提供的插件功能。

  导入

  ```typescript
    import { statusBarPlugin } from "@bfex/plugin"
  ```

  可以获取到插件的实例对象；

  继承自 class BarPlugin <$StatusBarRawState,$StatusBarState, $StatusBarWritableState> 

  - 数据类型说明

    [class BarPlugin](../dataType/#class-barplugin)
    
    [$StatusBarRawState](../dataType/#statusbarrawstate)

    [$StatusBarState](../dataType/#statusbarstate)

    [$StatusBarWritableState](../dataType/#statusbarwritablestate)

### tagName

  - 作用：

    插件匹配的 webComponent 的标签名称

  - 数据类型

  "dweb-status-bar"
### coder

  - 作用:

    编解码器

  - 数据类型:

    \$Coder<$StatusBarRawState, $StatusBarState>
  
  - 数据类型说明：

    [\$Coder](../dataType/#coder)

    [$StatusBarRawState](../dataType/#statusbarstate)

    [$StatusBarState](../dataType/#statusbarrawstate)

### setState

  - 作用

    - 设置状态

  - 调用签名

    ```typescript
    setState(state: Partial<$StatusBarWritableState>):Promise<void>

    ```

  - 参数说明

    state 状态的值

  - 数据类型说明：

    [$StatusBarWritableState](../dataType/#statusbarwritablestate)


### setStateByKey
  - 作用
    
    单独设置某一项状态

  - 调用签名

  ```typescript
    setStateByKey<K extends keyof $StatusBarWritableState>(key: K, value: $StatusBarWritableState[key]): Promise<void>
  ```
  - 参数说明：

    key: 需要设置状态属性名称

    value: 属性的值

  - 数据类型说明：

    [$StatusBarWritableState](../dataType/#statusbarwritablestate)

### getState()

  - 作用 

    获取状态

  - 调用签名

    ```ts
      async getState(force_update?: boolean) => Promise<$BarState>
    ```
  
    - 参数说明：

      force_update 是否强制更新

  - 数据类型说明：

    [$BarState](../dataType/#barstate)

