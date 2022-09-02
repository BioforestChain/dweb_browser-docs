export const themeData = JSON.parse("{\"repo\":\"https://github.com/BioforestChain/plaoc\",\"docsRepo\":\"https://github.com/BioforestChain/plaoc-docs\",\"docsBranch\":\"main\",\"docsDir\":\"docs\",\"sidebar\":[{\"text\":\"Navigation Bar\",\"link\":\"/plugin/bottomBar/\"},{\"text\":\"Top Bar\",\"link\":\"/plugin/topBar/\"},{\"text\":\"status Bar\",\"link\":\"/plugin/statusBar/\"},{\"text\":\"icon\",\"link\":\"/plugin/icon/\"},{\"text\":\"keyboard\",\"link\":\"/plugin/keyboard/\"},{\"text\":\"dialogs\",\"link\":\"/plugin/dialogs/\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
