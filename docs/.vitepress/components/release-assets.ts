/// 参考链接： https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues

import {
  tmp_android_1,
  tmp_android_2,
  tmp_dekstop_1,
} from "./release-assets-tmp";

export type $Platform = "Android" | "Windows" | "macOS" | "iOS" | "Linux";
export type $Architecture = "x86" | "arm";
export type $Bitness = "64" | "32";
export type $Model = string;
export type $PlatformVersion = string;

export type $ReleaseAsset = {
  link: string;
  version: string;
  supports: $AssetSupport[];
};
export type $AssetSupport = {
  platform: $Platform;
  mobile: boolean;
  bitness: $Bitness;
  architecture: $Architecture;
};

export const githubReleaseUrl =
  "https://github.com/BioforestChain/dweb_browser/releases";
/**
 * 该函数为资源函数，可以直接返回纯JSON。
 * 这里只是用代码做拼接，减少的字节数。提供了一些模板用来生成 $ReleaseAsset 结构。模板函数请使用 function 进行声明
 *
 * 如果有新的“稳定”版本，请往前拼接。越往前越推荐
 *
 * 非稳定版本请放在最后面。
 *
 */
export const allReleaseAssets = (): $ReleaseAsset[] => {
  const assets: $ReleaseAsset[] = [];
  /// android 3.240803.0
  assets.push(...tmp_android_2("3.240803.0"));
  /// android 3.240622.0
  assets.push(...tmp_android_2("3.240622.0"));
  /// android 3.240606.2
  assets.push(...tmp_android_1("3.240606.2"));
  /// desktop 3.8.1200
  assets.push(...tmp_dekstop_1("3.8.1200"));

  return assets;
};

export const latestReleaseAssets = (): $ReleaseAsset[] => {
  const assets: $ReleaseAsset[] = [];
  /// android 3.240803.0
  assets.push(...tmp_android_2("3.240913.0"));
  /// desktop 3.8.1200
  assets.push(...tmp_dekstop_1("3.8.1200"));

  return assets;
};
export const findReleaseAssets = (
  sources: $ReleaseAsset[],
  match: Partial<
    Omit<$ReleaseAsset, "supports"> & {
      supports: Partial<$AssetSupport> | Array<Partial<$AssetSupport>>;
    }
  >,
  limit = Number.MAX_SAFE_INTEGER
) => {
  const result = new Set<$ReleaseAsset>();
  const { supports: _supports = [], ...rest } = match;
  const supports = Array.isArray(_supports) ? _supports : [_supports];

  for (const support of supports) {
    for (const item of sources) {
      if ($contains(item, rest)) {
        if (item.supports.some((sup) => $contains(sup, support))) {
          result.add(item);
          if (result.size >= limit) {
            break;
          }
        }
      }
    }
  }
  return [...result];
};

const $contains = <T extends object>(src: T, match: Partial<T>) => {
  for (const [key, value] of $entries(match)) {
    if (value === undefined) {
      continue;
    }
    if (src[key] !== value) {
      return false;
    }
  }
  return true;
};

const $entries = <T extends object>(obj: T) => {
  type KT = {
    [K in keyof T]: readonly [K, T[K]];
  };
  type ENTRIES = Array<KT[keyof T]>;
  return Object.entries(obj) as unknown as ENTRIES;
};
