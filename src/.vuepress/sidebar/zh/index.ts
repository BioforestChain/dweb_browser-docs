import { sidebar } from "vuepress-theme-hope";
import zhApp from "./zh-app";
import zhPlaocInterfaceBluetoothDevice from "./zh-plaoc-interface-bluetooth-device"
import zhPlaocInterfaceBluetoothRemoteGATTCharacteristic from "./zh-plaoc-interface-bluetooth-remote-gatt-characteristic"
import zhPlaocInterfaceBluetoothRemoteGATTDescriptor from "./zh-plaoc-interface-bluetooth-remote-gatt-descriptor"
import zhPlaocInterfaceBluetoothRemoteGATTServer from "./zh-plaoc-interface-bluetooth-remote-gatt-server"
import zhPlaocInterfaceBluetoothRemoteGATTService from "./zh-plaoc-interface-bluetooth-remote-gatt-service"
import zhPlaocInterface from "./zh-plaoc-interface";
import zhPlaocPluginBarcodeScanner from "./zh-plaoc-plugin-barcode-scanner";
import zhPlaocPluginBiometrics from "./zh-plaoc-plugin-biometrics";
import zhPlaocPluginNavigationBar from "./zh-plaoc-plugin-navigation-bar";
import zhPlaocPluginSafeArea from "./zh-plaoc-plugin-safe-area";
import zhPlaocPluginStatusBar from "./zh-plaoc-plugin-status-bar";
import zhPlaocPluginVirtualKeyboard from "./zh-plaoc-plugin-virtual-keyboard";
import zhPlaocPluginBluetooth from "./zh-plaoc-plugin-bluetooth"
import zhPlaocPluginCamera from "./zh-plaoc-plugin-camera"
import zhPlaocPluginClipboard from "./zh-plaoc-plugin-clipboard"
import zhPlaocPluginConfig from "./zh-plaoc-plugin-config"
import zhPlaocPluginDevice from "./zh-plaoc-device"
import zhPlaocPluginUpdateController from "./zh-plaoc-plugin-update-controller"
import zhPlaocPluginDwebServiceWorker from "./zh-plaoc-plugin-dweb-service-worker"
import zhPlaocPluginFileSystem from "./zh-plaoc-plugin-file-system"
import zhPlaocPluginHaptics from "./zh-plaoc-plugin-haptics";
import zhPlaocPluginMWebview from "./zh-plaoc-plugin-m-webview";
import zhPlaocPluginNetwork from "./zh-plaoc-plugin-network";
import zhPlaocPluginShare from "./zh-plaoc-plugin-share";
import zhPlaocPluginSplashScreen from "./zh-plaoc-plugin-splash-screen";
import zhPlaocPluginToast from "./zh-plaoc-plugin-toast"
import zhPlaocPluginTorch from "./zh-plaoc-plugin-torch";

import zhPlaocPlugin from "./zh-plaoc-plugin"
import zhPlaoc from "./zh-plaoc"



export const zhSidebar = sidebar({
  "/app/": zhApp,
  "/plaoc/": zhPlaoc,
  "/plaoc/plugin/": zhPlaocPlugin,
  "/plaoc/plugin/status-bar/": zhPlaocPluginStatusBar,
  "/plaoc/plugin/navigation-bar/": zhPlaocPluginNavigationBar,
  "/plaoc/plugin/safe-area/": zhPlaocPluginSafeArea,
  "/plaoc/plugin/virtual-keyboard/": zhPlaocPluginVirtualKeyboard,
  "/plaoc/plugin/barcode-scanner/": zhPlaocPluginBarcodeScanner,
  "/plaoc/plugin/biometrics/": zhPlaocPluginBiometrics,
  "/plaoc/plugin/bluetooth/": zhPlaocPluginBluetooth,
  "/plaoc/plugin/camera/": zhPlaocPluginCamera,
  "/plaoc/plugin/clipboard/": zhPlaocPluginClipboard,
  "/plaoc/plugin/config/": zhPlaocPluginConfig,
  "/plaoc/plugin/device/": zhPlaocPluginDevice,
  "/plaoc/plugin/update-controller/": zhPlaocPluginUpdateController,
  "/plaoc/plugin/dweb-service-worker/": zhPlaocPluginDwebServiceWorker,
  "/plaoc/plugin/file-system/": zhPlaocPluginFileSystem,
  "/plaoc/plugin/haptics/": zhPlaocPluginHaptics,
  "/plaoc/plugin/m-webview/": zhPlaocPluginMWebview,
  "/plaoc/plugin/network/": zhPlaocPluginNetwork,
  "/plaoc/plugin/share/": zhPlaocPluginShare,
  "/plaoc/plugin/splash-screen/": zhPlaocPluginSplashScreen,
  "/plaoc/plugin/toast/": zhPlaocPluginToast,
  "/plaoc/plugin/torch/": zhPlaocPluginTorch,
  "/plaoc/interface/": zhPlaocInterface,
  "/plaoc/interface/bluetooth-device/": zhPlaocInterfaceBluetoothDevice,
  "/plaoc/interface/bluetooth-remote-gatt-characteristic/": zhPlaocInterfaceBluetoothRemoteGATTCharacteristic,
  "/plaoc/interface/bluetooth-remote-gatt-descriptor/": zhPlaocInterfaceBluetoothRemoteGATTDescriptor,
  "/plaoc/interface/bluetooth-remote-gatt-server/": zhPlaocInterfaceBluetoothRemoteGATTServer,
  "/plaoc/interface/bluetooth-remote-gatt-service/": zhPlaocInterfaceBluetoothRemoteGATTService,
});


