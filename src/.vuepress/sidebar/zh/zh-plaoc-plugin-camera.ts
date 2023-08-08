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
            text: "CameraPlugin",
            icon: "plugin",
            prefix: "camera/",
            link: "camera/",
            children: [
              {
                text: "getPhoto()",
                icon: "function",
                link: "get-photo.md",
              },
            ]
          },
        ]
      }
    ]
  }
]