import {
  $AssetSupport,
  $ReleaseAsset,
  githubReleaseUrl,
} from "./release-assets";

export function tmp_android_2(version: string) {
  const baseSupport = {
    mobile: true,
    platform: "Android",
    bitness: "64",
    architecture: "arm",
  } satisfies $AssetSupport;
  const result: $ReleaseAsset[] = [
    {
      version,
      link: `${githubReleaseUrl}/download/android-${version}-stable/DwebBrowser_arm64_v${version}.apk`,
      supports: [baseSupport],
    },
    {
      version,
      link: `${githubReleaseUrl}/download/android-${version}-stable/DwebBrowser_all_v${version}.apk`,
      supports: (["64", "32"] as const)
        .map((bitness) => {
          return (["x86", "arm"] as const).map((architecture) => {
            return {
              ...baseSupport,
              bitness: bitness,
              architecture: architecture,
            };
          });
        })
        .flat(),
    },
  ];
  // DwebBrowser_arm32_v3.240606.2.apk
  // DwebBrowser_release_v3.240606.2.apk
  // DwebBrowser_x86_v3.240606.2.apk
  return result;
}

export function tmp_android_1(version: string) {
  const baseSupport = {
    mobile: true,
    platform: "Android",
    bitness: "64",
    architecture: "arm",
  } satisfies $AssetSupport;
  const result: $ReleaseAsset[] = [
    {
      version,
      link: `${githubReleaseUrl}/download/android-${version}-stable/DwebBrowser_release_v${version}.apk`,
      supports: [baseSupport],
    },
    {
      version,
      link: `${githubReleaseUrl}/download/android-${version}-stable/DwebBrowser_arm32_v${version}.apk`,
      supports: (["64", "32"] as const).map((bitness) => {
        return {
          ...baseSupport,
          bitness: bitness,
        };
      }),
    },
    {
      version,
      link: `${githubReleaseUrl}/download/android-${version}-stable/DwebBrowser_x86_v${version}.apk`,
      supports: (["x86", "arm"] as const).map((architecture) => {
        return {
          ...baseSupport,
          architecture: architecture,
        };
      }),
    },
  ];
  // DwebBrowser_arm32_v3.240606.2.apk
  // DwebBrowser_release_v3.240606.2.apk
  // DwebBrowser_x86_v3.240606.2.apk
  return result;
}

export function tmp_dekstop_1(version: string) {
  const baseSupport = {
    mobile: false,
    bitness: "64",
  } satisfies Partial<$AssetSupport>;
  const result: $ReleaseAsset[] = [
    {
      version,
      link: `${githubReleaseUrl}/download/desktop-release-${version}/DwebBrowser-${version}-x86_64.msi`,
      supports: [{ ...baseSupport, platform: "Windows", architecture: "x86" }],
    },
    {
      version,
      link: `${githubReleaseUrl}/download/desktop-release-${version}/DwebBrowser-${version}-arm64.msi`,
      supports: [{ ...baseSupport, platform: "Windows", architecture: "arm" }],
    },
    {
      version,
      link: `${githubReleaseUrl}/download/desktop-release-${version}/DwebBrowser-${version}-x86_64.dmg`,
      supports: [{ ...baseSupport, platform: "macOS", architecture: "x86" }],
    },
    {
      version,
      link: `${githubReleaseUrl}/download/desktop-release-${version}/DwebBrowser-${version}-arm64.dmg`,
      supports: [{ ...baseSupport, platform: "macOS", architecture: "arm" }],
    },
  ];

  return result;
}
