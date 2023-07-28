export default [
  {
    text: "Plaoc",
    prefix: "/plaoc/",
    link: "/plaoc/",
    children:[
      {
        text: "Plaoc Plugin",
        prefix: "plugin/",
        link: "plugin/",
        children: [
          {
            text: "SafeArealugin",
            icon: "plugin",
            prefix: "safe-area/",
            link: "safe-area/",
            children: [
              {
                text: "state",
                icon: "object",
                link: "state.md",
              },
              {
                text: "getOverlay()",
                icon: "function",
                link: "get-overlay.md",
              },
              {
                text: "getState()",
                icon: "function",
                link: "get-state.md",
              },
              {
                text: "setOverlay()",
                icon: "function",
                link: "set-overlay.md",
              },
              {
                text: "setStateByKey()",
                icon: "function",
                link: "set-state-by-key.md",
              },
              {
                text: "setState()",
                icon: "function",
                link: "set-state.md",
              },
            ]
          },
        ]
      },
    ]
  },
  
  
]