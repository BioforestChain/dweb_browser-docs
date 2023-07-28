export default [
  {
    text: "Plaoc",
    prefix: "/plaoc/",
    link: "/plaoc/",
    children: [
      {
        text: "Plaoc Plugin",
        prefix: "plugin/",
        link: "/plaoc/plugin/",
        children: [
          {
            text: "StatusBarPlugin",
            icon: "plugin",
            link: "status-bar/",
          },
          {
            text: "NavigationBarPlugin",
            icon: "plugin",
            link: "navigation-bar/",
          },
          {
            text: "SafeAreaPlugin",
            icon: "plugin",
            link: "safe-area/",
          },
          {
            text: "VirtualKeyboardPlugin",
            icon: "plugin",
            link: "virtual-keyboard/",
          },
          {
            text: "BarcodeScannerPlugin",
            icon: "plugin",
            link: "barcode-scanner/"
          },
          {
            text: "BiometricsPlugin",
            icon: "plugin",
            link: "biometrics/"
          },
        ]
      },
    ]
  },
]