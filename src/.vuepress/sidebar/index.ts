import { sidebar } from "vuepress-theme-hope";
import { BasePath } from "./config/base-path";
import { PlaocApp } from "./routes/plaoc-app";

import { Plaoc } from "./routes/plaoc";
import { PlaocPlugin } from "./routes/plaoc-plugin";
import { PlaocPluginBarcodeScanner } from "./routes/plaoc-plugin-barcode-scanner";
import { PlaocPluginBiometrics } from "./routes/plaoc-plugin-biometrics";
import { PlaocPluginBluetooth } from "./routes/plaoc-plugin-bluetooth";
import { PlaocPluginCamera } from "./routes/plaoc-plugin-camera";
import { PlaocPluginClipboard } from "./routes/plaoc-plugin-clipboard";
import { PlaocPluginConfig } from "./routes/plaoc-plugin-config";
import { PlaocPluginDevice } from "./routes/plaoc-plugin-device";
import { PlaocPluginDwebServiceWorker } from "./routes/plaoc-plugin-dweb-service-worker";
import { PlaocPluginFileSystem } from "./routes/plaoc-plugin-file-system";
import { PlaocPluginHaptics } from "./routes/plaoc-plugin-haptics";
import { PlaocPluginMWebview } from "./routes/plaoc-plugin-m-webview";
import { PlaocPluginNavigationBar } from "./routes/plaoc-plugin-navigation-bar";
import { PlaocPluginNetwork } from "./routes/plaoc-plugin-network";
import { PlaocPluginSafeArea } from "./routes/plaoc-plugin-safe-area";
import { PlaocPluginShare } from "./routes/plaoc-plugin-share";
import { PlaocPluginSplashScreen } from "./routes/plaoc-plugin-splash-screen";
import { PlaocPluginStatusBar } from "./routes/plaoc-plugin-status-bar";
import { PlaocPluginToast } from "./routes/plaoc-plugin-toast";
import { PlaocPluginTorch } from "./routes/plaoc-plugin-torch";
import { PlaocPluginUpdateController } from "./routes/plaoc-plugin-update-controller";
import { PlaocPluginVirtualKeyboard } from "./routes/plaoc-plugin-virtual-keyboard";

import { PlaocInterface } from "./routes/plaoc-interface";
import { PlaocInterfaceBluetoothDevice } from "./routes/plaoc-interface-bluetooth-device";
import { PlaocInterfaceBluetoothRemoteGattCharacteristic } from "./routes/plaoc-interface-bluetooth-remote-gatt-characteristic";
import { PlaocInterfaceBluetoothRemoteGattDescriptor } from "./routes/plaoc-interface-bluetooth-remote-gatt-descriptor";
import { PlaocInterfaceBluetoothRemoteGattServer } from "./routes/plaoc-interface-bluetooth-remote-gatt-server";
import { PlaocInterfaceBluetoothRemoteGattService } from "./routes/plaoc-interface-bluetooth-remote-gatt-service";
import { PlaocInterfaceFetchEvent } from "./routes/plaoc-interface-fetch-event";
import { PlaocInterfaceStateObserver } from "./routes/plaoc-interface-state-observer";
import { PlaocInterfaceWindowListenerHandle } from "./routes/plaoc-interface-window-listener-handle";

import { PlaocWebComponent } from "./routes/plaoc-web-component";
import { PlaocWebComponentBarcodeScanning } from "./routes/plaoc-web-component-barcode-scanning";
import { PlaocWebComponentBluetooth } from "./routes/plaoc-web-component-bluetooth";

import { PlaocShim } from "./routes/plaoc-shim";
import { PlaocShimDwebServiceWorker } from "./routes/plaoc-shim-dweb-service-worker";



const allRoutes = {
  "/plaoc-app/": PlaocApp,
  "/plaoc-plugin/": Plaoc,
  "/plaoc-plugin/plugin/": PlaocPlugin,
  "/plaoc-plugin/plugin/barcode-scanner/": PlaocPluginBarcodeScanner,
  "/plaoc-plugin/plugin/biometrics/": PlaocPluginBiometrics,
  "/plaoc-plugin/plugin/bluetooth/": PlaocPluginBluetooth,
  "/plaoc-plugin/plugin/camera/": PlaocPluginCamera,
  "/plaoc-plugin/plugin/clipboard/": PlaocPluginClipboard,
  "/plaoc-plugin/plugin/config/": PlaocPluginConfig,
  "/plaoc-plugin/plugin/device/": PlaocPluginDevice,
  "/plaoc-plugin/plugin/dweb-service-worker/": PlaocPluginDwebServiceWorker,
  "/plaoc-plugin/plugin/file-system/": PlaocPluginFileSystem,
  "/plaoc-plugin/plugin/haptics/": PlaocPluginHaptics,
  "/plaoc-plugin/plugin/m-webview/": PlaocPluginMWebview,
  "/plaoc-plugin/plugin/navigation-bar/": PlaocPluginNavigationBar,
  "/plaoc-plugin/plugin/network/": PlaocPluginNetwork,
  "/plaoc-plugin/plugin/safe-area/": PlaocPluginSafeArea,
  "/plaoc-plugin/plugin/share/": PlaocPluginShare,
  "/plaoc-plugin/plugin/splash-screen/": PlaocPluginSplashScreen,
  "/plaoc-plugin/plugin/status-bar/": PlaocPluginStatusBar,
  "/plaoc-plugin/plugin/toast/": PlaocPluginToast,
  "/plaoc-plugin/plugin/torch/": PlaocPluginTorch,
  "/plaoc-plugin/plugin/update-controller/": PlaocPluginUpdateController,
  "/plaoc-plugin/plugin/virtual-keyboard/": PlaocPluginVirtualKeyboard,

  "/plaoc-plugin/interface/": PlaocInterface,
  "/plaoc-plugin/interface/bluetooth-device/": PlaocInterfaceBluetoothDevice,
  "/plaoc-plugin/interface/bluetooth-remote-gatt-characteristic/": PlaocInterfaceBluetoothRemoteGattCharacteristic,
  "/plaoc-plugin/interface/bluetooth-remote-gatt-descriptor/": PlaocInterfaceBluetoothRemoteGattDescriptor,
  "/plaoc-plugin/interface/bluetooth-remote-gatt-server/": PlaocInterfaceBluetoothRemoteGattServer,
  "/plaoc-plugin/interface/bluetooth-remote-gatt-service/": PlaocInterfaceBluetoothRemoteGattService,
  "/plaoc-plugin/interface/fetch-event/": PlaocInterfaceFetchEvent,
  "/plaoc-plugin/interface/state-observer/": PlaocInterfaceStateObserver,
  "/plaoc-plugin/interface/window-listener-handle/": PlaocInterfaceWindowListenerHandle,


  "/plaoc-plugin/web-component/": PlaocWebComponent,
  "/plaoc-plugin/web-component/barcode-scanning/": PlaocWebComponentBarcodeScanning,
  "/plaoc-plugin/web-component/bluetooth/": PlaocWebComponentBluetooth,

  "/plaoc-plugin/shim/": PlaocShim,
  "/plaoc-plugin/shim/dweb-service-worker/": PlaocShimDwebServiceWorker
}

export function createSidebar(basePath: BasePath) {
  const o = {}
  for (let key in allRoutes) {
    o[basePath + key] = new allRoutes[key](basePath);
  }
  return sidebar(o)
}