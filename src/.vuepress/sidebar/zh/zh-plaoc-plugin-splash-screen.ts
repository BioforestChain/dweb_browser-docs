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
            text: "SplashScreenPlugin",
            icon: "plugin",
            prefix: "splash-screen/",
            link: "splash-screen/",
            children: [
              {
                text: "show()",
                icon: "function",
                link: "show.md",
              },
              {
                text: "hide()",
                icon: "function",
                link: "hide.md",
              },
            ]
          },
        ]
      },
    ]
  },
]