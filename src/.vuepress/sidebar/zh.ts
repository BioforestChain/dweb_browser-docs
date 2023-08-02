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
  "/plaoc/interface/": zhPlaocInterface,
  "/plaoc/interface/bluetooth-device/": zhPlaocInterfaceBluetoothDevice,
  "/plaoc/interface/bluetooth-remote-gatt-characteristic/": zhPlaocInterfaceBluetoothRemoteGATTCharacteristic,
  "/plaoc/interface/bluetooth-remote-gatt-descriptor/": zhPlaocInterfaceBluetoothRemoteGATTDescriptor,
  "/plaoc/interface/bluetooth-remote-gatt-server/": zhPlaocInterfaceBluetoothRemoteGATTServer,
  "/plaoc/interface/bluetooth-remote-gatt-service/": zhPlaocInterfaceBluetoothRemoteGATTService,

});


