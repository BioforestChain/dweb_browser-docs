import { defineConfig, type DefaultTheme } from "vitepress";
import { navPlugins } from "./navPlugins";

export const es = defineConfig({
  lang: "es",
  description:
    "Un navegador que proporciona archivos adjuntos de aplicaciones y redes distribuidas.",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/es/plaoc/": { base: "/es/plaoc/", items: sidebarPlaoc() },
      "/es/plugins/": { base: "/es/plugins/", items: sidebarPlugins() },
    },

    editLink: {
      pattern:
        "https://github.com/BioforestChain/dweb_browser-docs/edit/main/docs/:path",
      text: "Edite esta página en GitHub",
    },

    footer: {
      message: "Publicado bajo la licencia MIT.",
      copyright: `Copyright © 2021-${new Date().getFullYear()} BFChain`,
    },
    docFooter: {
      prev: "Página anterior",
      next: "Página siguiente",
    },

    outline: {
      label: "Navegación de la página",
    },

    lastUpdated: {
      text: "Última actualización en",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "Multilingüe",
    returnToTopLabel: "Volver arriba",
    sidebarMenuLabel: "Menú",
    darkModeSwitchLabel: "Tema",
    lightModeSwitchTitle: "Cambiar a modo claro",
    darkModeSwitchTitle: "Cambiar a modo oscuro",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Dweb",
      activeMatch: "/plaoc/",
      items: navPlaoc(),
    },
    {
      text: "Plugins",
      activeMatch: "/plugins/",
      items: navPlugins(sidebarPlugins()),
    },
    {
      text: "3.x.x",
      items: [
        {
          text: "Mensual",
          link: "https://github.com/BioforestChain/dweb_browser/blob/main/monthly.md",
        },
        {
          text: "Comenzar para el desarrollador",
          link: "https://github.com/BioforestChain/dweb_browser/blob/main/GET_START_FOR_DEVELOPER.en.md",
        },
      ],
    },
    {
      text: "Descargas",
      link: "/es/downloads",
    },
  ];
}

function sidebarPlaoc(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Dweb App",
      collapsed: false,
      base: "/es/plaoc/",
      items: [
        { text: "Proceso de desarrollo", link: "flow" },
        {
          text: "Configuración de redireccionamiento",
          link: "redirect-config",
        },
        { text: "lista de configuración", link: "manifest" },
        { text: "@plaoc/cli", link: "cli" },
        { text: "tienda de aplicaciones", link: "app-store" },
      ],
    },
    { text: "Plugin System", base: "/es/plugins/", link: "web-components" },
  ];
}

function navPlaoc(): (
  | DefaultTheme.NavItemChildren
  | DefaultTheme.NavItemWithLink
)[] {
  let navItems: (
    | DefaultTheme.NavItemChildren
    | DefaultTheme.NavItemWithLink
  )[] = [];

  const plaoc = sidebarPlaoc();
  for (let [_, item] of plaoc.entries()) {
    const base = item.base ?? "";
    if (Array.isArray(item.items)) {
      navItems = navItems.concat(
        item.items.map((it) => {
          return { text: it.text!, link: base + it.link! };
        })
      );
    }
  }

  return navItems;
}

function sidebarPlugins(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Plugins",
      base: "/es/plugins/",
      items: [
        { text: "Introducción", link: "web-components" },
        {
          text: "API",
          collapsed: false,
          items: [
            { text: "CloseWatcher", link: "close-watcher" },
            { text: "DwebServiceWorker", link: "dweb-service-worker" },
          ],
        },
        {
          text: "Web Components",
          collapsed: false,
          items: [
            { text: "BarcodeScannerPlugin", link: "barcode-scanner" },
            { text: "BiometricsPlugin", link: "biometrics" },
            { text: "ClipboardPlugin", link: "clipboard" },
            { text: "ConfigPlugin", link: "config" },
            { text: "DevicePlugin", link: "device" },
            { text: "GeolocationPlugin", link: "geolocation" },
            { text: "HapticsPlugin", link: "haptics" },
            { text: "MediaPlugin", link: "media" },
            { text: "MotionSensorsPlugin", link: "motion-sensors" },
            { text: "NetworkPlugin", link: "network" },
            { text: "SharePlugin", link: "share" },
            { text: "ShortcutPlugin", link: "shortcut" },
          ],
        },
        {
          text: "Native UI",
          collapsed: false,
          items: [
            { text: "WindowPlugin", link: "window" },
            { text: "StatusBarPlugin", link: "status-bar" },
            { text: "NavigationBarPlugin", link: "navigation-bar" },
            { text: "VirtualKeyboardPlugin", link: "virtual-keyboard" },
            { text: "TorchPlugin", link: "torch" },
          ],
        },
      ],
    },
  ];
}

export const esSearch: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  es: {
    placeholder: "Buscar documentos",
    translations: {
      button: {
        buttonText: "Buscar documentos",
        buttonAriaLabel: "Buscar documentos",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Borrar criterios de búsqueda",
          resetButtonAriaLabel: "Borrar criterios de búsqueda",
          cancelButtonText: "Cancelar",
          cancelButtonAriaLabel: "Cancelar",
        },
        startScreen: {
          recentSearchesTitle: "Búsquedas recientes",
          noRecentSearchesText: "No hay búsquedas recientes",
          saveRecentSearchButtonTitle: "Guardar en búsquedas recientes",
          removeRecentSearchButtonTitle: "Eliminar de búsquedas recientes",
          favoriteSearchesTitle: "Favoritos",
          removeFavoriteSearchButtonTitle: "Eliminar de favoritos",
        },
        errorScreen: {
          titleText: "No se pueden obtener resultados",
          helpText: "Es posible que necesites verificar tu conexión a la red",
        },
        footer: {
          selectText: "Seleccionar",
          navigateText: "Navegar",
          closeText: "Cerrar",
          searchByText: "Proveedor de búsqueda",
        },
        noResultsScreen: {
          noResultsText: "No se encontraron resultados relevantes",
          suggestedQueryText: "Puedes intentar buscar",
          reportMissingResultsText: "¿Crees que debería haber resultados?",
          reportMissingResultsLinkText: "Haz clic para dar tu opinión",
        },
      },
    },
  },
};
