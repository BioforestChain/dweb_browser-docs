---
title: NavigationBar
category:
  - Plugin
tag:
  - WebComponent
---

控制系统底部导航栏。

> 具体查看示例代码： [NavigationBar](https://github.com/BioforestChain/dweb_browser/blob/main/example/vue3/src/pages/NavigationBar.vue)


## HTMLDwebStatusBarElement

  自定以 html 标签的类

  ```html
    <dweb-status-bar></dweb-status-bar>

  ```

  继承与 class HTMLStateObserverElement<$NavigationBarRawState, $NavigationBarState>

  - 数据类型说明：

    [HTMLStateObserverElement](../dataType/#class-htmlstateobserverelement)

    [$NavigationBarRawState](../dataType/#navigationbarrawstate)

    [$NavigationBarState](../dataType/#navigationbarstate)

### plugin
  - 作用
    
    访问插件对象，是 class NavigationBarPlugin 的实例对象 

  - 调用签名 

    ```ts
      dwebStatusBar.plugin
    ```

  - 类型说明：

    [class NavigationBarPlugin](#class-navigationbarplugin)

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

## class NavigationBarPlugin

  控制导航栏，对外提供的插件功能；

  导入

  ```ts
    import { navigationBarPlugin } from "@bfx/plugin"
  ```

  可以获取到 实例对象；
  


  继承自 class BarPlugin<$NavigationBarRawState, $NavigationBarState, $NavigationBarWritableState>

  - 数据类型说明：

    [class BarPlugin](../dataType/#class-barplugin)

    [$NavigationBarRawState](../dataType/#navigationbarrawstate)

    [$NavigationBarState](../dataType/#navigationbarstate)

    [$NavigationBarWritableState](../dataType/#navigationbarwriteablestate)

### tagName

  - 作用：

    插件匹配的 webComponent 的标签名称

  - 数据类型

    "dweb-navigation-bar"

### coder

  - 作用:

    编解码器

  - 数据类型:

    \$Coder<$NavigationBarRawState, $NavigationBarState>
  
  - 数据类型说明:

    [\$Coder](../dataType/#coder)

    [$NavigationBarRawState](../dataType/#navigationbarrawstate)

    [$NavigationBarState](../dataType/navigationbarstate)


### setState()
  - 作用

    设置状态

  - 调用签名

    ```typescript
      async setState(state: Partial<$NavigationBarWritableState>):Promise<void>
    ```

  - 数据类型说明：

    [$NavigationBarWritableState](../dataType/#navigationbarwritablestate)

### setStateByKey()
  - 作用
    
    单独设置某一项状态

  - 调用签名

  ```ts
    async setStateByKey<K extends keyof $NavigationBarWritableState>( key: K,
      value: $NavigationBarWritableState[K]): Promise<void>
  ```

  - 参数说明：

    key: 需要设置状态属性名称

    value: 属性的值

  - 数据类型说明：
    
    [$NavigationBarWritableState](../dataType/#navigationbarwritablestate)

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

 




 
