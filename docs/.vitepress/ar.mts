import { defineConfig, type DefaultTheme } from "vitepress";
import { navPlugins } from "./navPlugins";

export const ar = defineConfig({
  lang: "ar",
  description: "متصفح يقدم شبكة موزعة | تطبيق مرفق.",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/ar/plaoc/": { base: "/ar/plaoc/", items: sidebarPlaoc() },
      "/ar/plugins/": { base: "/ar/plugins/", items: sidebarPlugins() },
    },

    editLink: {
      pattern:
        "https://github.com/BioforestChain/dweb_browser-docs/edit/main/docs/:path",
      text: "حرر هذه الصفحة على GitHub",
    },

    footer: {
      message: "نشر بموجب رخصة MIT",
      copyright: `حقوق النشر © 2021-${new Date().getFullYear()} BFChain`,
    },

    docFooter: {
      prev: "الصفحة السابقة",
      next: "الصفحة التالية",
    },

    outline: {
      label: "ملاحة الصفحة",
    },

    lastUpdated: {
      text: "آخر تحديث",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "تعدد اللغات",
    returnToTopLabel: "العودة إلى الأعلى",
    sidebarMenuLabel: "القائمة",
    darkModeSwitchLabel: "الوضع",
    lightModeSwitchTitle: "التبديل إلى الوضع الفاتح",
    darkModeSwitchTitle: "التبديل إلى الوضع الداكن",
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
          text: "Monthly",
          link: "https://github.com/BioforestChain/dweb_browser/blob/main/monthly.md",
        },
        {
          text: "Get Start for Developer",
          link: "https://github.com/BioforestChain/dweb_browser/blob/main/GET_START_FOR_DEVELOPER.md",
        },
      ],
    },
    {
      text: "Downloads",
      link: "/ar/downloads",
    },
  ];
}

function sidebarPlaoc(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Dweb App",
      collapsed: false,
      base: "/ar/plaoc/",
      items: [
        { text: "عملية التطوير", link: "flow" },
        { text: "تكوين إعادة التوجيه", link: "redirect-config" },
        { text: "بيان التكوين", link: "manifest" },
        { text: "@plaoc/cli", link: "cli" },
        { text: "متجر التطبيقات", link: "app-store" },
      ],
    },
    {
      text: "نظام المكونات الإضافية",
      base: "/ar/plugins/",
      link: "web-components",
    },
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
      text: "مكونات إضافية",
      base: "/ar/plugins/",
      items: [
        { text: "مقدمة", link: "web-components" },
        {
          text: "API",
          collapsed: false,
          items: [
            { text: "CloseWatcher", link: "close-watcher" },
            { text: "DwebServiceWorker", link: "dweb-service-worker" },
          ],
        },
        {
          text: "المكونات الشبكية",
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
          text: "واجهة المستخدم الأصلية",
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

export const arSearch: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  ar: {
    placeholder: "بحث في الوثائق",
    translations: {
      button: {
        buttonText: "بحث في الوثائق",
        buttonAriaLabel: "بحث في الوثائق",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "محو المعايير",
          resetButtonAriaLabel: "محو المعايير",
          cancelButtonText: "إلغاء",
          cancelButtonAriaLabel: "إلغاء",
        },
        startScreen: {
          recentSearchesTitle: "تاريخ البحث",
          noRecentSearchesText: "لا يوجد تاريخ للبحث",
          saveRecentSearchButtonTitle: "حفظ إلى تاريخ البحث",
          removeRecentSearchButtonTitle: "إزالة من تاريخ البحث",
          favoriteSearchesTitle: "المفضلة",
          removeFavoriteSearchButtonTitle: "إزالة من المفضلة",
        },
        errorScreen: {
          titleText: "لا يمكن الحصول على نتائج",
          helpText: "قد تحتاج إلى التحقق من اتصالك بالشبكة",
        },
        footer: {
          selectText: "تحديد",
          navigateText: "تنقل",
          closeText: "إغلاق",
          searchByText: "مقدم البحث",
        },
        noResultsScreen: {
          noResultsText: "لا توجد نتائج ذات صلة",
          suggestedQueryText: "يمكنك محاولة البحث",
          reportMissingResultsText: "هل تعتقد أن هناك نتائج مفقودة؟",
          reportMissingResultsLinkText: "انقر لتقديم ملاحظات",
        },
      },
    },
  },
};
