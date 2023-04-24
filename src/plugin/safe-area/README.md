---
title: SafeArea
category:
  - Plugin
tag:
  - WebComponent
---

控制安全区域。

> 具体查看示例代码：[safe-area](https://github.com/BioforestChain/dweb_browser/blob/main/example/vue3/src/pages/SafeArea.vue)

## HTMLDwebSafeAreaElement WebComponent API

  首先需要声明的 html 标签样式，该组件挂载了 statechange 方法，当有状态改变时会触发。

  ```ts


  ```

 
 






### plugin

  - 所用：

    访问插件对象，是 class SafeAreaPlugin 的实例；

  - 数据类型

    [class SafeAreaPlugin](#class-safeareaplugin)

### getState()

  - 作用

    获取状态

  - 调用签名：

    ```ts
      async getState(force_update?: boolean) => Promise<$SafeAreaState>

    ```

  - 参数说明：

    force_update 是否需要强制更新

  - 数据类型说明：

    [$SafeAreaState](../dataType/safeareastate)

### setState()

  - 作用：
  
    设置状态

  - 调用签名：

    ```ts
      async setState<K extends "overlay">(key: K, value: $SafeAreaWritableState[K]) => Promise<void>
    ```

  - 参数说明：

    key: 需要设置状态属性名称

    value: 属性的值

  - 数据类型说明：

    [$SafeAreaWritableState](../dataType/#safeareawritablestate)


### setOverlay()

  - 作用

    设置是否遮盖

  - 调用签名

    ```ts
      async setOverlay(overlay: boolean) => Promise<void>
    ```

  - 参数说明：

    overlay 是否遮盖


### getOverlay()

  - 作用

    获取遮盖状态

  - 调用签名：

    ```ts
      async getOverlay() => Promise<boolean>
    ```


## class SafeAreaPlugin

  控制安全区域，对外提供的插件功能

  导入
  ```ts
    import { safeAreaPlugin } from "@bfex/plugin";
  ```

  可以获取到插件的实例对象；

  继承自 class InsetsPlugin<$SafeAreaRawState, $SafeAreaState, $SafeAreaWritableState> 

  - 数据类型说明：

    [class InsetsPlugin](../dataType/#class-insetsplugin)

    [$SafeAreaRawState](../dataType/#safearearawstate)

    [$SafeAreaState](../dataType/#safeareastate)

    [$SafeAreaWritableState](../dataType/#safeareawritablestate)

### tagName

  - 作用：

    插件匹配的 webComponent 的标签名称

  - 数据类型

    "dweb-safe-area"

### coder

  - 作用:

    编解码器

  - 数据类型:

    \$Coder<$SafeAreaRawState, $SafeAreaState>
  
  - 数据类型说明：

    [\$Coder](../dataType/#coder)

    [$SafeAreaRawState](../dataType/#statusbarstate)

    [$SafeAreaState](../dataType/#statusbarrawstate)

### setState()

  - 作用：

    设置状态

  - 调用签名：

    ```ts
      async setState(state: Partial<$SafeAreaWritableState>): Promise<void>
    ```
  
  - 参数说明：

    state 状态的值

  - 数据类型说明：

    [$SafeAreaWritableState]()


### setStateByKey()

  - 作用
    
    单独设置某一项状态

  - 调用签名

    ```ts
      async setStateByKey<K extends "overlay">(key: K, value: $SafeAreaWritableState[K]): Promise<void>
    ```
    - 参数说明：

      key: 需要设置状态属性名称

      value: 属性的值

    - 数据类型说明：

      [$SafeAreaWritableState](../dataType/#safeareawritablestate)

### getState()

  - 作用：

    获取当前状态

  - 调用签名：

    ```ts
      async getState: (force_update?: boolean) => Promise<$SafeAreaState>

    ```

    - 参数说明：

      force_update 是否强制更新

  - 数据类型说明：

    [$SafeAreaState](../dataType/safefareastate)

### setOverlay()

  - 作用

    设置 是否遮盖

  - 调用签名：

    ```ts
      setOverlay(overlay: boolean): Promise<void>
    ```

    - 参数说明：

      overlay 是否遮盖

### getOverlay()

  - 作用

    获取当前遮盖状态

  - 调用签名

    ```ts
      getOverlay(): Promise<boolean>
    ```