---
title: Barcode Scanning
category:
  - Plugin
tag:
  - WebComponent
---

扫描器

## example

```html
<dweb-barcode-scanning></dweb-barcode-scanning>
```

## Attributes
 
  无

## Event

  无

## Property

### getView
- 作用: 

  获取 video 的容器元素

- 可能的值： 

  `HTMLDivElement` 

  `null` 

  `undefined`

## Method

### process
- 作用：

  解析二维码图片

- 调用签名： 
```js
  async process(blob: Blob): Promise<Response>
```
- 参数说明：
  - blob 
    - 数据类型 
    
      `Blob`

    - 参数的作用： 

      需要解析的图片数据
      
- 备注说明

  只需要传递一个参数，以免出现无法预料的结果

### stop
- 作用： 
  
  停止解析二维码图片

- 调用签名
```js
  async stop(): Promise<Response>
```


### toggleTorch
- 作用：

  打开/关闭手电筒

- 调用签名：
```js
   async toggleTorch(): Promise<boolean>
```

### getTorchState
- 作用：

  手电筒状态

- 调用签名：
```js
  async getTorchState(): Promise<boolean>
```

### getPhoto
- 作用：

  获取图片数据

- 调用签名：
```js
  async getPhoto(options: ImageOptions = {}): Promise<ArrayBuffer>
```
- 参数说明：
  - options:
    - 数据类型： 
    
      `Object`

    - 参数作用: 
      
      图片条件说明

    - `Object` 属性说明：
      ```js
      {
        /**
         * The quality of image to return as JPEG, from 0-100
        *
        * @since 1.0.0
        */
        quality?: number;
        /**
        * Whether to allow the user to crop or make small edits (platform specific).
        * On iOS 14+ it's only supported for CameraSource.Camera, but not for CameraSource.Photos.
        *
        * @since 1.0.0
        */
        allowEditing?: boolean;
        /**
        * How the data should be returned. Currently, only 'Base64', 'DataUrl' or 'Uri' is supported
        *
        * @since 1.0.0
        */
        resultType?: CameraResultType;
        /**
        * Whether to save the photo to the gallery.
        * If the photo was picked from the gallery, it will only be saved if edited.
        * @default: false
        *
        * @since 1.0.0
        */
        saveToGallery?: boolean;
        /**
        * The desired maximum width of the saved image. The aspect ratio is respected.
        *
        * @since 1.0.0
        */
        width?: number;
        /**
        * The desired maximum height of the saved image. The aspect ratio is respected.
        *
        * @since 1.0.0
        */
        height?: number;
        /**
        * Whether to automatically rotate the image "up" to correct for orientation
        * in portrait mode
        * @default: true
        *
        * @since 1.0.0
        */
        correctOrientation?: boolean;
        /**
        * The source to get the photo from. By default this prompts the user to select
        * either the photo album or take a photo.
        * @default: CameraSource.Prompt
        *
        * @since 1.0.0
        */
        source?: CameraSource;
        /**
        * iOS and Web only: The camera direction.
        * @default: CameraDirection.Rear
        *
        * @since 1.0.0
        */
        direction?: CameraDirection;

        /**
        * iOS only: The presentation style of the Camera.
        * @default: 'fullscreen'
        *
        * @since 1.0.0
        */
        presentationStyle?: 'fullscreen' | 'popover';

        /**
        * Web only: Whether to use the PWA Element experience or file input. The
        * default is to use PWA Elements if installed and fall back to file input.
        * To always use file input, set this to `true`.
        *
        * Learn more about PWA Elements: https://capacitorjs.com/docs/web/pwa-elements
        *
        * @since 1.0.0
        */
        webUseInput?: boolean;

        /**
        * Text value to use when displaying the prompt.
        * @default: 'Photo'
        *
        * @since 1.0.0
        *
        */
        promptLabelHeader?: string;

        /**
        * Text value to use when displaying the prompt.
        * iOS only: The label of the 'cancel' button.
        * @default: 'Cancel'
        *
        * @since 1.0.0
        */
        promptLabelCancel?: string;

        /**
        * Text value to use when displaying the prompt.
        * The label of the button to select a saved image.
        * @default: 'From Photos'
        *
        * @since 1.0.0
        */
        promptLabelPhoto?: string;

        /**
        * Text value to use when displaying the prompt.
        * The label of the button to open the camera.
        * @default: 'Take Picture'
        *
        * @since 1.0.0
        */
        promptLabelPicture?: string;
      }
      ```

### hasMedia
- 作用：

  判断是否支持扫描功能

- 调用签名：
```js
  hasMedia(): boolean;
```


### startScanning
- 作用：

  启动摄像头扫描， 解析成功后关闭摄像头；

- 调用签名：
```js
  async startScanning(): Promise<string[]>
```

### stopScanning
- 作用： 

  停止扫描；会关闭摄像头;

- 调用签名：
```js
  stopScanning(): void;
```