import { type DefaultTheme } from "vitepress";
export function navPlugins(
  sidebarPlugins: DefaultTheme.SidebarItem[]
): (DefaultTheme.NavItemChildren | DefaultTheme.NavItemWithLink)[] {
  let navItems: (
    | DefaultTheme.NavItemChildren
    | DefaultTheme.NavItemWithLink
  )[] = [];

  for (let [_, item] of sidebarPlugins.entries()) {
    const base = item.base ?? "";
    if (Array.isArray(item.items)) {
      navItems = navItems.concat(
        item.items.map((it) => {
          if (Array.isArray(it.items)) {
            return {
              text: it.text!,
              items: it.items.map((child) => {
                return { text: child.text!, link: base + child.link! };
              }),
            };
          } else {
            return { text: it.text!, link: base + it.link! };
          }
        })
      );
    } else {
      navItems.push({ text: item.text!, link: base + item.link! });
    }
  }

  return navItems;
}
