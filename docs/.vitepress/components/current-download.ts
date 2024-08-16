import { findReleaseAssets, latestReleaseAssets } from "./release-assets";

export interface HeroAction {
  theme?: "brand" | "alt";
  text: string;
  link: string;
  target?: string;
  rel?: string;
}

function isAppleSilicon() {
  if (typeof document === "undefined") {
    return false;
  }
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl");
  // Best guess if the device is an Apple Silicon
  // https://stackoverflow.com/a/65412357
  return (
    // @ts-expect-error - Object is possibly 'null'
    gl.getSupportedExtensions().indexOf("WEBGL_compressed_texture_etc") !== -1
  );
}

async function detectArchByUserAgentData(): Promise<string | null> {
  if ("userAgentData" in navigator) {
    const userAgentData = await navigator.userAgentData.getHighEntropyValues([
      "architecture",
      "platform",
    ]);

    return userAgentData.architecture;
  }
  return null;
}
async function detectPlatformArch() {
  let arch = await detectArchByUserAgentData();
  if (arch === null) {
    if (navigator.platform === "MacIntel") {
      if (isAppleSilicon()) {
        arch = "arm";
      } else {
        arch = "x86";
      }
    } else if (navigator.platform === "Win32") {
      arch = await detectArchByUserAgentData();
    }
  }
  return arch;
}

const downloadFor = (lang: string, os: string) => {
  if (lang == "zh-Hans") {
    return `下载 ${os} 应用`;
  } else {
    return `Download for ${os}`;
  }
};
const installFor = (lang: string, os: string) => {
  if (lang == "zh-Hans") {
    return `安装 ${os} 应用`;
  } else {
    return `Install for ${os}`;
  }
};

export async function currentActions2(lang: string): Promise<HeroAction> {
  const userAgent = navigator.userAgent;

  let action: HeroAction = {
    theme: "alt",
    text: "",
    link: "",
  };
  if (/Win/i.test(navigator.platform)) {
    action.text = downloadFor(lang, "Windows");
    const arch = await detectPlatformArch();

    if (arch !== null && arch === "arm") {
      action.link = findReleaseAssets(latestReleaseAssets(), {
        supports: {
          platform: "Windows",
          architecture: "arm",
        },
      })[0].link;
    } else {
      action.link = findReleaseAssets(latestReleaseAssets(), {
        supports: {
          platform: "Windows",
          architecture: "x86",
        },
      })[0].link;
    }
  } else if (/iPhone|iPad/i.test(navigator.platform)) {
    action.text = installFor(lang, "iOS");
    action.link = "https://apps.apple.com/cn/app/6443558874";
  } else if (/Mac/i.test(navigator.platform)) {
    action.text = downloadFor(lang, "MacOS");

    if (isAppleSilicon()) {
      action.link = findReleaseAssets(latestReleaseAssets(), {
        supports: {
          platform: "macOS",
          bitness: "64",
          architecture: "arm",
        },
      })[0].link;
    } else {
      action.link = findReleaseAssets(latestReleaseAssets(), {
        supports: {
          platform: "macOS",
          bitness: "64",
          architecture: "x86",
        },
      })[0].link;
    }
  } else if (/Android/i.test(userAgent)) {
    action.text = downloadFor(lang, "Android");

    if (/aarch64|armv8/i.test(navigator.platform) || /arm64/i.test(userAgent)) {
      action.link = findReleaseAssets(latestReleaseAssets(), {
        supports: {
          platform: "Android",
          bitness: "64",
          architecture: "arm",
        },
      })[0].link;
    } else {
      action.link = findReleaseAssets(latestReleaseAssets(), {
        supports: {
          platform: "Android",
          bitness: "64",
          architecture: "x86",
        },
      })[0].link;
    }
  }

  return action;
}
