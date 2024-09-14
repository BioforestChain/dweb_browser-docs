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
  if (typeof navigator !== "undefined" && "userAgentData" in navigator) {
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

/// 模糊检测下载链接是否可用，不可用使用代理切换
const checkDownloadLink = async (link: string): Promise<string> => {
  if (link.length > 0) {
    try {
      const _ = await fetch(link, { method: "HEAD", mode: "no-cors" });
      return link;
    } catch {
      return `https://mirror.ghproxy.com/?q=${link}`;
    }
  }

  return link;
};

export async function currentActions2(lang: string): Promise<HeroAction> {
  let action: HeroAction = {
    theme: "alt",
    text: "",
    link: "javascript:void(0);",
  };

  if (typeof navigator === "undefined") return action;

  const userAgent = navigator.userAgent;
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

  action.link = await checkDownloadLink(action.link);

  return action;
}
