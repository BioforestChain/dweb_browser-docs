<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  $Architecture,
  $Platform,
  allReleaseAssets,
  findReleaseAssets,
  githubReleaseUrl,
  $ReleaseAsset,
  latestReleaseAssets,
} from "./release-assets";
// function isAppleSilicon() {
//   const canvas = document.createElement("canvas");
//   const gl = canvas.getContext("webgl");
//   // Best guess if the device is an Apple Silicon
//   // https://stackoverflow.com/a/65412357
//   return (
//     // @ts-expect-error - Object is possibly 'null'
//     gl.getSupportedExtensions().indexOf("WEBGL_compressed_texture_etc") !== -1
//   );
// }
const getSupportsForQuery = async (defaultValue: {
  architecture: $Architecture;
  platform: $Platform;
}) => {
  const result = [
    defaultValue,
    {
      architecture: (defaultValue.architecture === "arm"
        ? "x86"
        : "arm") as $Architecture,
      platform: defaultValue.platform,
    },
  ];
  if ("userAgentData" in navigator) {
    const { platform, architecture } =
      await navigator.userAgentData.getHighEntropyValues([
        "architecture",
        "platform",
      ]);
    if (platform === defaultValue.platform) {
      if (architecture) {
        if (result[1].architecture === architecture) {
          result.unshift(result.pop()!);
        }
      }
    }
  }
  return result;
};
const query = new URLSearchParams(location.search);
const findQuery = (key: string) => {
  return (query.get(key) ?? query.get(key.toLowerCase())) || undefined;
};
const releaseAssets = latestReleaseAssets();
console.log("latestReleaseAssets", releaseAssets);

const download_channels = [
  { name: "原始", transfer: (url: string) => url },
  {
    name: "ghproxy",
    transfer: (url: string) => `https://mirror.ghproxy.com/?q=${url}`,
  },
];
const download_selected_channel = ref(download_channels[0]);
const android_links = ref<$ReleaseAsset[]>([]); // `${githubSpeedUp}${githubReleaseUrl}/download/android-release-${android_version}/DwebBrowser_release_v${android_version}.apk`;
const windows_links = ref<$ReleaseAsset[]>([]);
const macos_links = ref<$ReleaseAsset[]>([]);
const getFilename = (url: string) => url.split("/").pop();
const android_selected_link = ref<$ReleaseAsset>();
const windows_selected_link = ref<$ReleaseAsset>();
const macos_selected_link = ref<$ReleaseAsset>();
onMounted(async () => {
  android_links.value = findReleaseAssets(releaseAssets, {
    version: findQuery("Android"),
    supports: await getSupportsForQuery({
      platform: "Android",
      architecture: "arm",
    }),
  });
  android_selected_link.value = android_links.value[0];

  const desktop_version = findQuery("Desktop");
  windows_links.value = findReleaseAssets(releaseAssets, {
    version: findQuery("Windows") || desktop_version,
    supports: await getSupportsForQuery({
      platform: "Windows",
      architecture: "x86",
    }),
  });
  windows_selected_link.value = windows_links.value[0];

  macos_links.value = findReleaseAssets(releaseAssets, {
    version: findQuery("macOS") || desktop_version,
    supports: await getSupportsForQuery({
      platform: "macOS",
      architecture: "arm",
    }),
  });
  macos_selected_link.value = macos_links.value[0];
});
</script>

<template>
  <div class="download-content">
    <div class="downloads">
      <div class="download-platform android">
        <div class="platform-glass">
          <div class="platform-banner">
            <i class="icon icon-android"></i>
            <span class="platform-label">Android</span>
          </div>
          <div class="download-btn" v-if="android_selected_link">
            <a
              :download="getFilename(android_selected_link.link)"
              :href="
                download_selected_channel.transfer(android_selected_link.link)
              "
            >
              {{ getFilename(android_selected_link.link) }}
            </a>
          </div>
          <select class="download-selector" v-model="android_selected_link">
            <option v-for="item of android_links" :value="item">
              {{ getFilename(item.link) }}
            </option>
          </select>
        </div>
      </div>
      <div class="download-platform windows">
        <div class="platform-glass">
          <div class="platform-banner">
            <i class="icon icon-windows"></i>
            <span class="platform-label">Windows</span>
          </div>
          <div class="download-btn" v-if="windows_selected_link">
            <a
              :download="getFilename(windows_selected_link.link)"
              :href="
                download_selected_channel.transfer(windows_selected_link.link)
              "
            >
              {{ getFilename(windows_selected_link.link) }}
            </a>
          </div>
          <select class="download-selector" v-model="windows_selected_link">
            <option v-for="item of windows_links" :value="item">
              {{ getFilename(item.link) }}
            </option>
          </select>
        </div>
      </div>
      <div class="download-platform ios">
        <div class="platform-glass">
          <div class="platform-banner">
            <i class="icon icon-ios"></i>
            <span class="platform-label">iOS</span>
          </div>
          <div class="download-btn">
            <a href="https://apps.apple.com/cn/app/6443558874" target="_blank">
              App Store @Dweb Browser
            </a>
          </div>
        </div>
      </div>
      <div class="download-platform macos">
        <div
          class="platform-glass backdrop:blur-md backdrop:contrast-50 backdrop:saturate-150"
        >
          <div class="platform-banner">
            <i class="icon icon-macos"></i>
            <span class="platform-label">MacOS</span>
          </div>
          <div class="download-btn" v-if="macos_selected_link">
            <a
              :download="getFilename(macos_selected_link.link)"
              :href="
                download_selected_channel.transfer(macos_selected_link.link)
              "
            >
              {{ getFilename(macos_selected_link.link) }}
            </a>
          </div>
          <select class="download-selector" v-model="macos_selected_link">
            <option v-for="item of macos_links" :value="item">
              {{ getFilename(item.link) }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="archive-download">
    <div class="select-channel">
      <h3>选择下载线路</h3>
      <div class="flex flex-row gap-2 pt-2">
        <button
          class="bg-[#2196f3] rounded-md px-2 py-1"
          v-for="channel of download_channels"
          :class="
            download_selected_channel.name == channel.name
              ? 'bg-opacity-100'
              : 'bg-opacity-50'
          "
          @click="() => (download_selected_channel = channel)"
        >
          {{ channel.name }}
        </button>
      </div>
    </div>
    <div class="more-download">
      <h3>更多下载</h3>
      <ul>
        <li>
          <a :href="githubReleaseUrl" target="_blank">Github Releases</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.download-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.archive-download {
  @apply flex flex-row justify-end gap-3;
}
.more-download {
  @apply flex flex-col justify-end items-end;
}
.downloads {
  @apply flex flex-wrap flex-row justify-evenly items-center gap-4;
}
.download-platform {
  @apply flex-1 flex-grow-0 sm:w-full md:w-[50%] xl:w-[25%] rounded-xl shadow-md min-w-[16rem];
  &.android {
    background: linear-gradient(225deg, #3ddc84, #4285f4);
    a {
      color: #007c8c;
    }
    @media (prefers-color-scheme: dark) {
      a {
        color: #80deea;
      }
    }
  }
  &.ios {
    background: linear-gradient(315deg, #2196f3, #9c27b0);
    a {
      color: #3a00a1;
    }
    @media (prefers-color-scheme: dark) {
      a {
        color: #a8b1ff;
      }
    }
  }
  &.windows {
    /* background: linear-gradient(135deg, #77f3ff, #0c9eff);*/
    background: linear-gradient(
      135deg,
      #cedbe9 0%,
      #aac5de 17%,
      #6199c7 50%,
      #3a84c3 51%,
      #419ad6 59%,
      #4bb8f0 71%,
      #3a8bc2 84%,
      #26558b 100%
    );
    a {
      color: #3f51b5;
    }
  }
  &.macos {
    background: url("./macOS-wallpaper.webp") no-repeat;
    background-size: cover;
    background-position: top;
    a {
      color: #a49402;
    }
    @media (prefers-color-scheme: dark) {
      a {
        color: #ffeb3b;
      }
    }
  }
}
.platform-glass {
  @apply rounded-xl flex flex-row items-center no-underline m-2 justify-between gap-2 p-2;
  backdrop-filter: blur(12px) contrast(30%) saturate(200%) brightness(150%);
}
@media (prefers-color-scheme: dark) {
  .platform-glass {
    backdrop-filter: blur(12px) contrast(50%) saturate(150%);
  }
}
.platform-banner {
  @apply flex flex-col justify-end items-center;
  .icon {
    display: inline-block;
    vertical-align: middle;
    width: 3rem;
    height: 3rem;
    background-size: cover;
  }
}
.download-btn {
  @apply break-all text-right text-xs;
}
.download-selector {
  background: none;
  @apply relative w-8 h-8 text-transparent bg-white bg-opacity-10 rounded-lg cursor-pointer;
  background-image: url("./arrow-down.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  option {
    @apply p-1;
    background: #fff;
    color: #333;
  }
}

.icon-android {
  /* background-color: #42d383; */
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='40' height='40' viewBox='0 0 40 40'%3E  %3Cdefs%3E    %3Cpath id='a688108f-309f-4e18-a0dc-ed026741fa12-a' d='M0 0h33.684v18.947H0z'/%3E  %3C/defs%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath d='M0 0h40v40H0z'/%3E    %3Cg opacity='.8' transform='translate(3.158 11.158)'%3E      %3Cmask id='a688108f-309f-4e18-a0dc-ed026741fa12-b' fill='%23fff'%3E        %3Cuse xlink:href='%23a688108f-309f-4e18-a0dc-ed026741fa12-a'/%3E      %3C/mask%3E      %3Cpath fill='%23FFF' d='M24.594 14.156a1.402 1.402 0 1 1-.003-2.803 1.402 1.402 0 0 1 .003 2.803m-15.504 0a1.402 1.402 0 1 1-.002-2.803 1.402 1.402 0 0 1 .002 2.803M25.097 5.72L27.9.874a.584.584 0 0 0-1.01-.583L24.05 5.2c-2.17-.989-4.608-1.54-7.21-1.54-2.6 0-5.038.552-7.209 1.54L6.794.291a.584.584 0 0 0-1.01.582l2.803 4.848C3.774 8.335.482 13.2 0 18.947h33.684C33.202 13.2 29.91 8.335 25.097 5.721' mask='url(%23a688108f-309f-4e18-a0dc-ed026741fa12-b)'/%3E    %3C/g%3E  %3C/g%3E%3C/svg%3E");
}
.icon-ios {
  background-image: url("./iOS.svg");
}

.platform-label {
  font-size: 0.5rem;
}

.icon-windows {
  background-image: url("./windows11.svg");
}

.icon-macos {
  background-image: url("./macOS.svg");
}
</style>
