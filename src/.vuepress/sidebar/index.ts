import { sidebar } from "vuepress-theme-hope";
import { BasePath } from "./config/base-path";
import { PlaocApp } from "./routes/plaoc-app";

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
import { PlaocPluginVirtualKeyboard } from "./routes/plaoc-plugin-virtual-keyboard";


import { PlaocPluginUpdateController } from "./routes/plaoc-plugin-dweb-update-controller";

const allRoutes = {
  "/plaoc-app/": PlaocApp,
  "/": PlaocPlugin,
  "/plaoc-plugin/system/barcode-scanner/": PlaocPluginBarcodeScanner,
  "/plaoc-plugin/web-component/barcode-scanning/": PlaocPluginBarcodeScanner,
  
  "/plaoc-plugin/system/biometrics/": PlaocPluginBiometrics,
  "/plaoc-plugin/system/bluetooth/": PlaocPluginBluetooth,
  "/plaoc-plugin/system/camera/": PlaocPluginCamera,
  "/plaoc-plugin/system/clipboard/": PlaocPluginClipboard,
  "/plaoc-plugin/system/config/": PlaocPluginConfig,
  "/plaoc-plugin/system/device/": PlaocPluginDevice,

  "/plaoc-plugin/system/dweb-service-worker/": PlaocPluginDwebServiceWorker,
  "/plaoc-plugin/interface/bfs-meta-data/":PlaocPluginDwebServiceWorker,
  
  "/plaoc-plugin/system/update-controller/": PlaocPluginUpdateController,
  "/plaoc-plugin/system/file-system/": PlaocPluginFileSystem,
  "/plaoc-plugin/system/haptics/": PlaocPluginHaptics,
  "/plaoc-plugin/system/m-webview/": PlaocPluginMWebview,
  "/plaoc-plugin/system/network/": PlaocPluginNetwork,
  "/plaoc-plugin/system/share/": PlaocPluginShare,
  "/plaoc-plugin/native-ui/safe-area/": PlaocPluginSafeArea,
  "/plaoc-plugin/native-ui/splash-screen/": PlaocPluginSplashScreen,
  "/plaoc-plugin/native-ui/status-bar/": PlaocPluginStatusBar,
  "/plaoc-plugin/native-ui/toast/": PlaocPluginToast,
  "/plaoc-plugin/native-ui/torch/": PlaocPluginTorch,
  "/plaoc-plugin/native-ui/navigation-bar/": PlaocPluginNavigationBar,
  "/plaoc-plugin/native-ui/virtual-keyboard/": PlaocPluginVirtualKeyboard,

  // "/plaoc-plugin/interface/": PlaocInterface,
  // "/plaoc-plugin/interface/bluetooth-device/": PlaocInterfaceBluetoothDevice,
  // "/plaoc-plugin/interface/bluetooth-remote-gatt-characteristic/":
  //   PlaocInterfaceBluetoothRemoteGattCharacteristic,
  // "/plaoc-plugin/interface/bluetooth-remote-gatt-descriptor/":
  //   PlaocInterfaceBluetoothRemoteGattDescriptor,
  // "/plaoc-plugin/interface/bluetooth-remote-gatt-server/":
  //   PlaocInterfaceBluetoothRemoteGattServer,
  // "/plaoc-plugin/interface/bluetooth-remote-gatt-service/":
  //   PlaocInterfaceBluetoothRemoteGattService,
  // "/plaoc-plugin/interface/fetch-event/": PlaocInterfaceFetchEvent,
  // "/plaoc-plugin/interface/state-observer/": PlaocInterfaceStateObserver,
  // "/plaoc-plugin/interface/window-listener-handle/":
  //   PlaocInterfaceWindowListenerHandle,

  // "/plaoc-plugin/web-component/": PlaocWebComponent,
  // "/plaoc-plugin/web-component/bluetooth/": PlaocWebComponentBluetooth,
};

export function createSidebar(basePath: BasePath) {
  const o = {};
  for (let key in allRoutes) {
    o[basePath + key] = new allRoutes[key](basePath);
  }
  return sidebar(o);
}
