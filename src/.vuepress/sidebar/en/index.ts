import { sidebar } from "vuepress-theme-hope";
import enApp from "./en-app"
import enPlaoc from "./en-plaoc"
import enPlaocPlugin from "./en-plaoc-plugin"
import enPlaocPluginBarcodeScanner from "./en-plaoc-plugin-barcode-scanner";
import enPlaocPluginBiometrics from "./en-plaoc-plugin-biometrics";
import enPlaocPluginNavigationBar from "./en-plaoc-plugin-navigation-bar";
import enPlaocPluginSafeArea from "./en-plaoc-plugin-safe-area";
import enPlaocPluginStatusBar from "./en-plaoc-plugin-status-bar";
import enPlaocPluginVirtualKeyboard from "./en-plaoc-plugin-virtual-keyboard";
import enPlaocPluginBluetooth from "./en-plaoc-plugin-bluetooth"
import enPlaocPluginCamera from "./en-plaoc-plugin-camera"
import enPlaocPluginClipboard from "./en-plaoc-plugin-clipboard"
import enPlaocPluginConfig from "./en-plaoc-plugin-config"
import enPlaocPluginDevice from "./en-plaoc-device"
import enPlaocPluginUpdateController from "./en-plaoc-plugin-update-controller"
import enPlaocPluginDwebServiceWorker from "./en-plaoc-plugin-dweb-service-worker"
import enPlaocPluginFileSystem from "./en-plaoc-plugin-file-system"
import enPlaocPluginHaptics from "./en-plaoc-plugin-haptics";
import enPlaocPluginMWebview from "./en-plaoc-plugin-m-webview";
import enPlaocPluginNetwork from "./en-plaoc-plugin-network";
import enPlaocPluginShare from "./en-plaoc-plugin-share";
import enPlaocPluginSplashScreen from "./en-plaoc-plugin-splash-screen";
import enPlaocPluginToast from "./en-plaoc-plugin-toast"
import enPlaocPluginTorch from "./en-plaoc-plugin-torch";

import enPlaocInterface from "./en-plaoc-interface";
import enPlaocInterfaceFetchEvent from "./en-plaoc-interface-fetch-event";
import enPlaocInterfaceBluetoothDevice from "./en-plaoc-interface-bluetooth-device"
import enPlaocInterfaceBluetoothRemoteGATTCharacteristic from "./en-plaoc-interface-bluetooth-remote-gatt-characteristic"
import enPlaocInterfaceBluetoothRemoteGATTDescriptor from "./en-plaoc-interface-bluetooth-remote-gatt-descriptor"
import enPlaocInterfaceBluetoothRemoteGATTServer from "./en-plaoc-interface-bluetooth-remote-gatt-server"
import enPlaocInterfaceBluetoothRemoteGATTService from "./en-plaoc-interface-bluetooth-remote-gatt-service"
import enPlaocInterfaceStateObserver from "./en-plaoc-interface-state-observer"
import enPlaocInterfaceWindowListenerHandle from "./en-plaoc-interface-window-listener-handle";

import enPlaocWebComponent from "./en-plaoc-web-component";
import enPlaocWebComponentBarcodeScanning from "./en-plaoc-web-component-barcode-scanning"
import enPlaocWebComponentBluetooth from "./en-plaoc-web-component-bluetooth";

import enPlaocShim from "./en-plaoc-shim";
import enPlaocShimDwebServiceWorker from "./en-plaoc-shim-dweb-service-worker";



export const enSidebar = sidebar({
  "/en/app/": enApp,
  "/en/plaoc/": enPlaoc,
  "/en/plaoc/plugin/": enPlaocPlugin,
  "/en/plaoc/plugin/status-bar/": enPlaocPluginStatusBar,
  "/en/plaoc/plugin/navigation-bar/": enPlaocPluginNavigationBar,
  "/en/plaoc/plugin/safe-area/": enPlaocPluginSafeArea,
  "/en/plaoc/plugin/virtual-keyboard/": enPlaocPluginVirtualKeyboard,
  "/en/plaoc/plugin/barcode-scanner/": enPlaocPluginBarcodeScanner,
  "/en/plaoc/plugin/biometrics/": enPlaocPluginBiometrics,
  "/en/plaoc/plugin/bluetooth/": enPlaocPluginBluetooth,
  "/en/plaoc/plugin/camera/": enPlaocPluginCamera,
  "/en/plaoc/plugin/clipboard/": enPlaocPluginClipboard,
  "/en/plaoc/plugin/config/": enPlaocPluginConfig,
  "/en/plaoc/plugin/device/": enPlaocPluginDevice,
  "/en/plaoc/plugin/update-controller/": enPlaocPluginUpdateController,
  "/en/plaoc/plugin/dweb-service-worker/": enPlaocPluginDwebServiceWorker,
  "/en/plaoc/plugin/file-system/": enPlaocPluginFileSystem,
  "/en/plaoc/plugin/haptics/": enPlaocPluginHaptics,
  "/en/plaoc/plugin/m-webview/": enPlaocPluginMWebview,
  "/en/plaoc/plugin/network/": enPlaocPluginNetwork,
  "/en/plaoc/plugin/share/": enPlaocPluginShare,
  "/en/plaoc/plugin/splash-screen/": enPlaocPluginSplashScreen,
  "/en/plaoc/plugin/toast/": enPlaocPluginToast,
  "/en/plaoc/plugin/torch/": enPlaocPluginTorch,

  "/en/plaoc/interface/": enPlaocInterface,
  "/en/plaoc/interface/fetch-event": enPlaocInterfaceFetchEvent,
  "/en/plaoc/interface/bluetooth-device/": enPlaocInterfaceBluetoothDevice,
  "/en/plaoc/interface/bluetooth-remote-gatt-characteristic/": enPlaocInterfaceBluetoothRemoteGATTCharacteristic,
  "/en/plaoc/interface/bluetooth-remote-gatt-descriptor/": enPlaocInterfaceBluetoothRemoteGATTDescriptor,
  "/en/plaoc/interface/bluetooth-remote-gatt-server/": enPlaocInterfaceBluetoothRemoteGATTServer,
  "/en/plaoc/interface/bluetooth-remote-gatt-service/": enPlaocInterfaceBluetoothRemoteGATTService,
  "/en/plaoc/interface/state-observer/": enPlaocInterfaceStateObserver,
  "/en/plaoc/interface/window-listener-handle/": enPlaocInterfaceWindowListenerHandle,
  "/en/plaoc/web-component/": enPlaocWebComponent,
  "/en/plaoc/web-component/barcode-scanning/": enPlaocWebComponentBarcodeScanning,
  "/en/plaoc/web-component/bluetooth/": enPlaocWebComponentBluetooth,

  "/en/plaoc/shim/": enPlaocShim,
  "/en/plaoc/shim/dweb-service-worker/": enPlaocShimDwebServiceWorker
});
