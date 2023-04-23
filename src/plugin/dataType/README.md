---
title: DataType
category:
  - Plugin
tag:
  - /
---


## class HTMLStateObserverElement

  - 声明：

    ```ts
    class HTMLStateObserverElement<RAW, STATE> extends HTMLElement {
      constructor(
        readonly state: StateObserver<RAW, STATE>
      ) {}
    }

    ```

  - 数据类型说明：

    [StateObserver](#class-stateobserver)

  ### statechange Event
    - 事件类型

      CustomEvent
    
    - 触发时机

      当状态发生变化的时候触发

    - $event.detail 的数据类型

      STATE

## class BarPlugin

  - 声明：

    ```ts
      abstract class BarPlugin<
        RAW extends $BarRawState,
        STATE extends $BarState,
        WRITABLE_STATE extends $BarWritableState
      > extends InsetsPlugin<RAW, STATE, WRITABLE_STATE> {
        /**
         * 设置 Bar 背景色
        * @param r 0~255
        * @param g 0~255
        * @param b 0~255
        * @param a 0~1
        */
        async setColor(color: string): Promise<unknown>
        /**
         *  获取背景颜色
        */
        async getColor(): Promise<string>

        /**
         * 设置 Bar 风格
        * // 支持 light | dark | defalt
        * 据观测
        * 在系统主题为 Light 的时候, Default 意味着 白色字体
        * 在系统主题为 Dark 的手, Default 因为这 黑色字体
        * 这兴许与设置有关系, 无论如何, 尽可能避免使用 Default 带来的不确定性
        *
        * @param style
        */
        async setStyle(style: STATE["style"]): Promise<unknown>
        /**
         * 获取当前 style
        */
        async getStyle(): Promise<BAR_STYLE>

        /**
         * 显示 Bar
        */
        async show(): Promise<unknown>

        /**
         * 隐藏 bar.
        */
        async hide(): Promise<unknown>

        /**
         * 设置是否可见 
        */
        setVisible(visible: boolean): Promise<unknown>
        
        /**
         * 获取是否可见 
        */
        async getVisible(): Promise<boolan>

        /**
         * 设置 是否遮盖
        */
        setOverlay(overlay: boolean): Promise<unknown>
        
        /**
         * 获取 是否遮盖 
        */
        async getOverlay(): Promise<boolean>
      }
    ```

  - 数据类型说明：

    [$BarRawState](#barrawstate)

    [$BarState](#barstate)

    [$BarWritableState](#barwritablestate)

    [BAR_STYLE](#bar-style)

## class DOMInsets

  - 声明：

    ```ts
    class DOMInsets {
      constructor(
        readonly left: number,
        readonly top: number,
        readonly right: number,
        readonly bottom: number
      ) {}
      toCss(options?: $InsetsToCssOptions):string[][];s
      toCssText(options?: $InsetsToCssOptions): string;
      setStyle(style: CSSStyleDeclaration, options?: $InsetsToCssOptions): void;
      effect(options: $InsetsToCssOptions): void;
    }

    ```

  - 数据类型说明：
    
    [$InsetsToCssOptions](#insetstocssoptions)

## class InsetsPlugin

  - 声明：

    ```ts
    abstract class InsetsPlugin<
      RAW extends $InsetsRawState,
      STATE extends $InsetsState,
      WRITABLE_STATE extends $InsetsWritableState
    > extends BasePlugin {
      static rid_acc = 1;

      /**
       * 状态
       */
      state: StateObserver<RAW, STATE>;
      /**
       * 获取状态
       * force_update 是否前置更新数据
       */
      async getState(force_update?: boolean) => Promise<STATE>;
      
      /**
       * 设置遮盖
       * overlay 是否遮盖
       */
      async setOverlay(overlay: boolean): Promise<unknown>;

      /**
       * 获取遮盖
       */
      async getOverlay(): Promise<boolean>
    }

    ```

  - 数据类型说明：

    [$InsetsRawState](#insetsrawstate)

    [$InsetsState](#insetsstate)

    [$InsetsWritableState](#insetswritablestate)

    [StateObserver](#class-stateobserver)


## class StateObserver

  - 声明：

    ```ts
    class StateObserver<RAW, STATE> {
      constructor(
        private plugin: BasePlugin,
        private fetcher: () => Promise<RAW>,
        private coder: {
          decode: $Transform<RAW, STATE>;
          encode: $Transform<STATE, RAW>;
        }
      ) { }
      async startObserve(): Promise<Response & $fetchExtends>;
      async *jsonlines(options?: { signal?: AbortSignal }): AsyncGenerator<Awaited<STATE>, void, unknown>;
      async stopObserve(): Promise<Response & $fetchExtends>;
      /**
       * 当前状态 
       */
      currentState: $StatusBarState | undefined;
      onChange(cb: $Callback<[$StatusBarState], unknown>): $OffListener;
      getState(force_update = false): Promise<$StatusBarState>;
    }
    ```

  - 数据类型说明：

    [$StatusBarState](#statusbarstate)

    [$Callback](#callback)

    [$OffListener](#offlistener) 

    [$fetchExtends](#fetchExtends)

    [AbortSignal](#AbortSignal)

## $BarRawState

  - 声明：

    ```ts
    interface $BarRawState extends $InsetsRawState {
      /**
       * 是否可见.
       */
      visible: boolean;

      /**
       * 当前样式.
       */
      style: BAR_STYLE;

      /**
       * 背景色 
       * 
       * 仅支持 android.
       */
      color: $AgbaColor;

      /**
       * 是否遮盖
       * 
       * 仅支持android.
       */
      overlay: boolean;

      /**
       * 插入到屏幕的数据 
       */
      insets: $Insets;
    }
    ```

  - 数据类型说明：

    [[$InsetsRawState](#insetsrawstate)

    [BAR_STYLE](#bar-style)

    [$AgbaColor](#agbacolor)

    [$Insets](#insets)

## $BarState

  - 声明：

    ```ts
    interface $BarState extends $InsetsState {
      color: string;
      style: BAR_STYLE;
      overlay: boolean;
      visible: boolean;
      insets: DOMInsets;
    }

    ```
  
  - 数据类型说明：

    [$InsetsState](#insetsstate)

    [BAR_STYLE](#bar-style)

    [DOMInsets](#class-dominsets)

## $BarWritableState

  - 声明：

    ```ts
    type $BarWritableState = Omit<$BarState, "insets">
    ```

  - 数据类型说明：

    [$BarState](#barstate)

## $InsetsState

  - 声明：
    ```ts
    interface $InsetsState {
      overlay: boolean;
      insets: DOMInsets;
    }
    ```

  - 数据类型说明：

    [DOMInsets](#class-dominsets)

## $Coder

  - 声明：

    ```ts
      interface $Coder<RAW, STATE> {
        decode: $Transform<RAW, STATE>;
        encode: $Transform<STATE, RAW>;
      }
    ```
  
  - 数据类型说明：

    [$Transform](#transform)

## $StatusBarState

  - 声明：

    ```ts
      {
      /**
         * 是否可见.
        */
        visible: boolean;

        /**
         * 样式.
        */
        style: BAR_STYLE;

        /**
         * 当前背景色.
        *
        * 仅支持android.
        */
        color: $AgbaColor;

        /**
         * 是否遮盖.
        *
        * 仅支持android.
        */
        overlay: boolean;
        insets: $Insets;
      }
    ```

  - 数据类型说明：

    [$AgbaColor](#agbacolor)

    [$Insets](#insets)


## $StatusBarRawState

  - 声明：

    ```ts
      {
      /**
         * 是否可见.
         */
        visible: boolean;

        /**
         * 样式.
         */
        style: BAR_STYLE;

        /**
         * 当前背景色.
         *
         * 仅支持android.
         */
        color: $AgbaColor;

        /**
         * 是否遮盖.
         *
         * 仅支持android.
         */
        overlay: boolean;
        insets: $Insets;
      }
    ```

  - 数据类型说明:

    [$AgbaColor](#agbacolor)

    [$Insets](#insets)

## $StatusBarWritableState

  - 声明：

    ```ts
      type $StatusBarWritableState = $BarWritableState
    ```

  - 类型声明

    [$BarWritableState](#barwritablestate)

## $BarState

  - 声明：
    ```ts
    interface $BarState extends $InsetsState {
      color: string;
      style: BAR_STYLE;
      overlay: boolean;
      visible: boolean;
      insets: DOMInsets;
    }

    ```

  - 数据类型说明：

    [$InsetsState](#insetsstate)

## $InsetsState

  - 声明：

    ```ts
    interface $InsetsState {
      overlay: boolean;
      insets: DOMInsets;
    }
    ```
  - 数据类型说明：

    [DOMInsets](#class-dominsets)
## $InsetsToCssOptions

  - 声明：

    ```ts
    interface $InsetsToCssOptions {
      css_var_prefix?: string;
      css_var_name?: string;
      density?: number;
      layer?: string;
    }
    ```

## BAR_STYLE

  - 声明：
    ```ts
      /**
       * 条栏的风格
       * Light 代表文字为黑色
       * Dark 代表文字为白色
       * Default 根据设备
       */
      export enum BAR_STYLE {
        /**
         * 用户深色的背景.
        *
        */
        Dark = "DARK",

        /**
         * 用于浅色的背景.
        *
        */
        Light = "LIGHT",

        /**
         * 基于设备的模式判断.
        */
        Default = "DEFAULT",
      }

    ```

## $AgbaColor

  - 声明：

    ```ts
      {
        // number 0 ~ 255
        red: number;
        green: number;
        blue: number;
        alpha: number;
      };

    ```

## $Insets

  - 声明：
    ```ts
      {
        left: number;
        top: number;
        right: number;
        bottom: number;
      }
    ```

## $fetchExtends

  - 声明
    ```ts
      {
        number(): Promise<number>;
        ok(): Promise<Response>;
        text(): Promise<string>;
        binary(): Promise<ArrayBuffer>;
        boolean(): Promise<boolean>;
        object(): Promise<Object>;
        jsonlines(parser: $Transform): Promise<ReadableStream>;
        stream(): Promise<ReadableStream<Uint8Array>>;
      }
    ```

  - 数据类型说明：

    [$Transform](#transform)

## $Transform

  - 声明：

    ```ts
      type $Transform<T, R> = (value: T) => R;
    ```
  
  - 数据类型说明：

    [$Transform](#transform)


## AbortSignal

  - 声明：
    ```ts
      interface AbortSignal extends EventTarget {
        /** 
         * 是否已经终止 
        * */
        readonly aborted: boolean;
        readonly reason: any;
        onabort: ((this: AbortSignal, ev: Event) => any) | null;
        addEventListener<K extends keyof AbortSignalEventMap>(
          type: K,
          listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any,
          options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
          type: string,
          listener: EventListenerOrEventListenerObject,
          options?: boolean | AddEventListenerOptions,
        ): void;
        removeEventListener<K extends keyof AbortSignalEventMap>(
          type: K,
          listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any,
          options?: boolean | EventListenerOptions,
        ): void;
        removeEventListener(
          type: string,
          listener: EventListenerOrEventListenerObject,
          options?: boolean | EventListenerOptions,
        ): void;

        /** 
         * 抛出终止的原因 
        **/
        throwIfAborted(): void;
      }

    ```
  - 数据类型说明：

    [AbortSignalEventMap](#AbortSignalEventMap)

    [AddEventListenerOptions](#AddEventListenerOptions)

    [EventListenerOrEventListenerObject](#EventListenerOrEventListenerObject)

## AbortSignalEventMap

  - 声明：
    ```ts
      interface AbortSignalEventMap {
        abort: Event;
      }
    ```

## AddEventListenerOptions

  - 声明
    ```ts
      interface AddEventListenerOptions extends EventListenerOptions {
        once?: boolean;
        passive?: boolean;
        signal?: AbortSignal;
      }
    ```

## EventListenerOrEventListenerObject

  - 声明：

    ```ts
      type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
    ```

## $Callback

  - 声明：

    ```ts
      type $Callback<ARGS extends unknown[] = [], RETURN = unknown> = (
        ...args: ARGS
      ) => RETURN;
    ```

## $OffListener
  
  - 声明：

    ```ts
      type $OffListener = () => boolean
    ```

## $NavigationBarRawState

  - 声明：

    ```ts
      type $NavigationBarRawState = $BarRawState;
    ```

  - 数据类型说明：

    [$BarRawState](#barrawstate)

## $NavigationBarState

  - 声明：

    ```ts
      type $NavigationBarState = $BarState;
    ```


  - 数据类型说明：

    [$BarState](#barstate)

## $NavigationBarWritableState

  - 声明：

    ```ts
      type $NavigationBarWritableState = $BarWritableState
    ```

  - 数据类型说明：

    [$BarWritableState](#barwriteablestate)

## $SafeAreaRawState

  - 声明

    ```ts
      interface $SafeAreaRawState extends $InsetsRawState {
        cutoutInsets: $Insets;
        outerInsets: $Insets;
      }

    ```

  - 数据类型说明：

    [$InsetsRawState](#insetsrawstate)

    [$Insets](#insets)

## $SafeAreaState

  - 声明

    ```ts
      interface $SafeAreaState extends $InsetsState {
        cutoutInsets: DOMInsets;
        outerInsets: DOMInsets;
      }

    ```

  - 数据类型说明：

    [$InsetsState](#insetsstate)

    [DOMInsets](#class-dominsets)

## #SafeAreaWritableState

  - 申明：

    ```ts
      interface $SafeAreaWritableState extends $InsetsWritableState {}
    ```

  - 数据类型说明：

    [$InsetsWritableState](#insetswritablestate)


  
## $InsetsRawState

  - 声明

    ```ts
      $InsetsRawState {
        overlay: boolean;
        insets: $Insets;
      }

    ```
  
  - 数据类型说明：

    [$Insets](#insets)


## $Insets

  - 声明 

    ```ts
      type $Insets = {
        left: number;
        top: number;
        right: number;
        bottom: number;
      };
    ```

## $InsetsWritableState

  - 声明

    ```ts
    interface $InsetsWritableState {
      overlay: boolean;
    }

    ```





  
 