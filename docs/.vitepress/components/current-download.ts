import process from "node:process";
import { findReleaseAssets, latestReleaseAssets } from "./release-assets";

export interface HeroAction {
  theme?: "brand" | "alt";
  text: string;
  link: string;
  target?: string;
  rel?: string;
}

export function currentActions(actions: HeroAction[]): HeroAction[] {
  if (Array.isArray(actions)) {
    return actions
      .map((value, _) => {
        if (value.text === "Download") {
          let downloadText = "Download for ";
          if (process.platform === "android") {
            downloadText += "Android";
            switch (process.arch) {
              case "arm64":
                value.link = findReleaseAssets(latestReleaseAssets(), {
                  supports: {
                    platform: "Android",
                    bitness: "64",
                    architecture: "arm",
                  },
                })[0].link;
                break;
              case "arm":
                value.link = findReleaseAssets(latestReleaseAssets(), {
                  supports: {
                    platform: "Android",
                    bitness: "32",
                    architecture: "arm",
                  },
                })[0].link;
                break;
              case "x64":
                value.link = findReleaseAssets(latestReleaseAssets(), {
                  supports: {
                    platform: "Android",
                    bitness: "64",
                    architecture: "x86",
                  },
                })[0].link;
                break;
              default:
                break;
            }
          } else if (process.platform === "win32") {
            downloadText += "Windows";
            if (process.arch === "arm64") {
              value.link = findReleaseAssets(latestReleaseAssets(), {
                supports: {
                  platform: "Windows",
                  bitness: "64",
                  architecture: "arm",
                },
              })[0].link;
            } else {
              value.link = findReleaseAssets(latestReleaseAssets(), {
                supports: {
                  platform: "Windows",
                  bitness: "64",
                  architecture: "x86",
                },
              })[0].link;
            }
          } else if (process.platform === "darwin") {
            if (navigator.maxTouchPoints > 1) {
              downloadText += "iOS";
              value.link = "https://apps.apple.com/cn/app/6443558874";
            } else {
              downloadText += "MacOS";
              if (process.arch === "arm64") {
                value.link = findReleaseAssets(latestReleaseAssets(), {
                  supports: {
                    platform: "macOS",
                    bitness: "64",
                    architecture: "arm",
                  },
                })[0].link;
              } else {
                value.link = findReleaseAssets(latestReleaseAssets(), {
                  supports: {
                    platform: "macOS",
                    bitness: "64",
                    architecture: "x86",
                  },
                })[0].link;
              }
            }
          } else {
            return null;
          }
          value.text = downloadText;
          return value;
        } else {
          return value;
        }
      })
      .filter((value, _) => value != null);
  }
  return actions;
}
