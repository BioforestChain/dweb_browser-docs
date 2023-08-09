export default [
  {
    text: "Ploac",
    prefix: "/plaoc/",
    link: "/plaoc/",
    children: [
      {
        text: "Ploac Interface",
        prefix: "interface/",
        link: "interface/",
        children: [
          {
            icon: "object",
            text: "StateObserver",
            prefix: "state-observer/",
            link: "state-observer/",
            children: [
              {
                icon: "function",
                text: "getState",
                link: "getState.md",
              },
              {
                icon: "function",
                text: "jsonlines",
                link: "jsonlines.md",
              },
              {
                icon: "function",
                text: "onChnage",
                link: "onChange.md",
              },
              {
                icon: "function",
                text: "stopObserve",
                link: "stopObserve.md",
              },
            ]
          },
        ]
      }
    ]
  }
]