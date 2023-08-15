import { BasePath } from "../config/base-path"
export class PlaocInterface extends Array {
  constructor(basePath: BasePath) {
    super();
    this.push(
      {
        text: "Ploac",
        prefix: basePath + "/plaoc-plugin/",
        link: basePath + "/plaoc-plugin/",
        children: [
          {
            text: "Ploac Interface",
            prefix: "interface/",
            link: "interface/",
            children: [
              {
                icon: "object",
                text: "BaseEvent",
                link: "base-event/",
              },
              {
                icon: "object",
                text: "BFSMetaData",
                link: "bfs-meta-data/",
              },
              {
                icon: "object",
                text: "BiometricsResult",
                link: "biometrics-result/",
              },
              {
                icon: "object",
                text: "BluetoothAdvertisingEvent",
                link: "bluetooth-advertising-event/",
              },
              {
                icon: "object",
                text: "BluetoothCloseResponse",
                link: "bluetooth-close-response/",
              },
              {
                icon: "object",
                text: "BluetoothDataViewResponse",
                link: "bluetooth-dataview-response/",
              },
              {
                icon: "object",
                text: "BluetoothDevice",
                link: "bluetooth-device/",
              },
              {
                icon: "object",
                text: "BluetoothForgetResponse",
                link: "bluetooth-forget-response/",
              },
              {
                icon: "object",
                text: "GattServerDisconnectedEvent",
                link: "bluetooth-gett-server-disconnected-event/",
              },
              {
                icon: "object",
                text: "BluetoothOpenResponse",
                link: "bluetooth-open-response/",
              },
              {
                icon: "object",
                text: "BluetoothRemoteGATTCharacteristic",
                link: "bluetooth-remote-gatt-characteristic/",
              },
              {
                icon: "object",
                text: "BluetoothRemoteGATTDescriptor",
                link: "bluetooth-remote-gatt-descriptor/",
              },
              {
                icon: "object",
                text: "BluetoothRemoteGATTServer",
                link: "bluetooth-remote-gatt-server/",
              },
              {
                icon: "object",
                text: "BluetoothRemoteGATTService",
                link: "bluetooth-remote-gatt-service/",
              },
              {
                icon: "object",
                text: "BluetoothRequestAndConnectDeviceResponse",
                link: "bluetooth-request-and-connect-device-response/",
              },
              {
                icon: "object",
                text: "BluetoothRequestDeviceOptions",
                link: "bluetooth-request-device-options/",
              },
              {
                icon: "object",
                text: "BluetoothResponse",
                link: "bluetooth-response/",
              },
              {
                icon: "object",
                text: "BluetoothServiceUUID",
                link: "bluetooth-service-uuid/",
              },
              {
                icon: "object",
                text: "BluetoothWatchAdvertisementsResponse",
                link: "bluetooth-watch-advertisements-response/",
              },
              {
                icon: "object",
                text: "BodyInit",
                link: "body-init/",
              },
              {
                icon: "object",
                text: "BufferSource",
                link: "buffer-source/",
              },
              {
                icon: "object",
                text: "$BuildRequestInit",
                link: "build-request-init/",
              },
              {
                icon: "object",
                text: "$BuildRequestWithBaseInit",
                link: "build-request-with-base-init/",
              },
              {
                icon: "object",
                text: "ClipboardWriteOptions",
                link: "clipboard-write-options/",
              },
              {
                icon: "object",
                text: "ConnectionStatus",
                link: "connection-status/",
              },
              {
                icon: "object",
                text: "ConnectionType",
                link: "connection-type/",
              },
              {
                icon: "object",
                text: "Directory",
                link: "directory/",
              },
              {
                icon: "object",
                text: "DOMInsets",
                link: "dom-insets/",
              },
              {
                icon: "object",
                text: "Encoding",
                link: "encoding/",
              },
              {
                icon: "object",
                text: "$ExterRequestWithBaseInit",
                link: "exter-request-with-base-init/",
              },
              {
                icon: "object",
                text: "FetchEvent",
                link: "fetch-event/"
              },
              {
                icon: "object",
                text: "GetUriOptions",
                link: "get-uri-options/",
              },
              {
                icon: "object",
                text: "GetUriResult",
                link: "get-uri-result/",
              },
              {
                icon: "object",
                text: "HeadersInit",
                link: "headers-init/",
              },
              {
                icon: "object",
                text: "ImageOptions",
                link: "image-options/",
              },
              {
                icon: "object",
                text: "ImpactOptions",
                link: "impact-options/",
              },
              {
                icon: "object",
                text: "MainServer",
                link: "main-server/",
              },
              {
                icon: "object",
                text: "$MMID",
                link: "mmid/",
              },
              {
                icon: "object",
                text: "NotificationOptions",
                link: "notification-options/",
              },
              {
                icon: "object",
                text: "NotificationType",
                link: "notification-type/",
              },
              {
                icon: "object",
                text: "ReadResult",
                link: "read-result/",
              },
              {
                icon: "object",
                text: "RequestInit",
                link: "request-init/",
              },
              {
                icon: "object",
                text: "RequestMode",
                link: "request-mode/",
              },
              {
                icon: "object",
                text: "$ResponseUUIDData",
                link: "response-uuid-data/"
              },
              {
                icon: "object",
                text: "RGBAColor",
                link: "rgba-color/",
              },
              {
                icon: "object",
                text: "ShareOptions",
                link: "share-options/",
              },
              {
                icon: "object",
                text: "ShareResult",
                link: "share-result/",
              },
              {
                icon: "object",
                text: "SplashScreenHideOptions",
                link: "splash-screen-hide-options/",
              },
              {
                icon: "object",
                text: "SplashScreenShowOptions",
                link: "splash-screen-show-options/",
              },
              {
                icon: "object",
                text: "State",
                link: "state/",
              },
              {
                icon: "object",
                text: "StateObserver",
                link: "state-observer/",
              },
              {
                icon: "object",
                text: "Tkit",
                link: "tkit/",
              },
              {
                icon: "object",
                text: "ToastDuration",
                link: "toast-duration/",
              },
              {
                icon: "object",
                text: "ToastShowOptions",
                link: "toast-show-options/",
              },
              {
                icon: "object",
                text: "UpdateController",
                link: "update-controller/",
              },
              {
                icon: "object",
                text: "VibrateOptions",
                link: "vibrate-options/",
              },
              {
                icon: "object",
                text: "WebViewItem",
                link: "webview-item/",
              },
              {
                icon: "object",
                text: "WindowListenerHandle",
                link: "window-listener-handle/",
              },
              {
                icon: "object",
                text: "WriteFileOptions",
                link: "write-file-options/",
              },
              {
                icon: "object",
                text: "WriteFileResult",
                link: "write-file-result/",
              },
              {
                icon: "object",
                text: "XMLHttpRequestBodyInit",
                link: "xml-http-request-body-init/",
              },
            ]
          }
        ]
      }
    )
  }
}



// {
//   icon: "object",
//   text: "",
//   link: "/",
// },