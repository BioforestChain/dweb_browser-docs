<script setup lang="ts">
import { onMounted, ref } from "vue";
function isAppleSilicon() {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl");
  // Best guess if the device is an Apple Silicon
  // https://stackoverflow.com/a/65412357
  return (
    // @ts-expect-error - Object is possibly 'null'
    gl.getSupportedExtensions().indexOf("WEBGL_compressed_texture_etc") !== -1
  );
}
async function detectArchByUserAgentData() {
  if ("userAgentData" in navigator) {
    const userAgentData = await navigator.userAgentData.getHighEntropyValues([
      "architecture",
      "platform",
    ]);

    if (userAgentData.platform === "Windows") {
      if (userAgentData.architecture === "arm") {
        return "-aarch64";
      } else {
        return "-x86-64";
      }
    } else if (userAgentData.platform === "macOS") {
      if (userAgentData.architecture === "arm") {
        return "-aarch64";
      } else {
        return "-x86-64";
      }
    }
  }

  return null;
}

async function detectPlatformArch() {
  let arch = await detectArchByUserAgentData();

  if (arch === null) {
    if (navigator.platform === "MacIntel") {
      if (isAppleSilicon()) {
        arch = "-aarch64";
      } else {
        arch = "-x86-64";
      }
    } else if (navigator.platform === "Win32") {
      arch = await detectArchByUserAgentData();
    }
  }
  return arch;
}

const githubSpeedUp = "https://mirror.ghproxy.com/?q=";
const githubReleaseUrl =
  "https://github.com/BioforestChain/dweb_browser/releases";
const android_link = `${githubSpeedUp}https://github.com/BioforestChain/dweb_browser/releases/download/android-release-3.240606.2/DwebBrowser_release_v3.240606.2.apk`;
let windows_link = ref<string>(githubSpeedUp);
let mac_link = ref<string>(githubSpeedUp);
onMounted(async () => {
  const arch = (await detectPlatformArch()) ?? "";

  if (arch.length > 0) {
    windows_link.value = `${windows_link.value}https://github.com/BioforestChain/dweb_browser/releases/download/desktop-release-3.6.0600/DwebBrowser-3.6.0600${arch}.msi`;
    mac_link.value = `${mac_link.value}https://github.com/BioforestChain/dweb_browser/releases/download/desktop-release-3.6.0600/DwebBrowser-3.6.0600${arch}.dmg`;
  } else {
    windows_link.value = githubReleaseUrl;
    mac_link.value = githubReleaseUrl;
  }
});
</script>

<template>
  <div class="download-content">
    <div class="flex button-download">
      <a class="button-download-item" :href="android_link">
        <i class="icon icon-android"></i>
        <span class="button-download-span">Android</span>
      </a>
      <a
        class="button-download-item"
        href="https://apps.apple.com/cn/app/6443558874"
        target="_blank"
      >
        <i class="icon icon-ios"></i>
        <span class="button-download-span">iOS</span>
      </a>
      <a class="button-download-item" :href="windows_link">
        <i class="icon icon-windows"></i>
        <span class="button-download-span">Windows</span>
      </a>
      <a class="button-download-item" :href="mac_link">
        <i class="icon icon-macos"></i>
        <span class="button-download-span">MacOS</span>
      </a>
    </div>
  </div>
  <div class="archive-download">
    <a :href="githubReleaseUrl" target="_blank">官方GitHub下载</a>
  </div>
</template>

<style>
.download-content {
  display: flex;
  height: 12rem;
  flex-direction: column;
  justify-content: space-around;
}
.archive-download {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: end;
}
.button-download {
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.button-download-item {
  width: 8rem;
  height: 8rem;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;
}
@media (max-width: 758px) {
  .button-download-item {
    width: 4rem;
    height: 4rem;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 50%;
  }
}

.icon-android {
  /* background-color: #42d383; */
  background-color: lightblue;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='40' height='40' viewBox='0 0 40 40'%3E  %3Cdefs%3E    %3Cpath id='a688108f-309f-4e18-a0dc-ed026741fa12-a' d='M0 0h33.684v18.947H0z'/%3E  %3C/defs%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath d='M0 0h40v40H0z'/%3E    %3Cg opacity='.8' transform='translate(3.158 11.158)'%3E      %3Cmask id='a688108f-309f-4e18-a0dc-ed026741fa12-b' fill='%23fff'%3E        %3Cuse xlink:href='%23a688108f-309f-4e18-a0dc-ed026741fa12-a'/%3E      %3C/mask%3E      %3Cpath fill='%23FFF' d='M24.594 14.156a1.402 1.402 0 1 1-.003-2.803 1.402 1.402 0 0 1 .003 2.803m-15.504 0a1.402 1.402 0 1 1-.002-2.803 1.402 1.402 0 0 1 .002 2.803M25.097 5.72L27.9.874a.584.584 0 0 0-1.01-.583L24.05 5.2c-2.17-.989-4.608-1.54-7.21-1.54-2.6 0-5.038.552-7.209 1.54L6.794.291a.584.584 0 0 0-1.01.582l2.803 4.848C3.774 8.335.482 13.2 0 18.947h33.684C33.202 13.2 29.91 8.335 25.097 5.721' mask='url(%23a688108f-309f-4e18-a0dc-ed026741fa12-b)'/%3E    %3C/g%3E  %3C/g%3E%3C/svg%3E");
}
.icon-ios {
  background-color: lightblue;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='40' height='40' viewBox='0 0 40 40'%3E  %3Cdefs%3E    %3Cpath id='47f1323c-993c-4d45-aab1-bebb1206c2bb-a' d='M.001.592h26.926v24.039H.001z'/%3E  %3C/defs%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath d='M0 0h40v40H0z'/%3E    %3Cg opacity='.8' transform='translate(6.316 2.737)'%3E      %3Cg transform='translate(0 7.045)'%3E        %3Cmask id='47f1323c-993c-4d45-aab1-bebb1206c2bb-b' fill='%23fff'%3E          %3Cuse xlink:href='%2347f1323c-993c-4d45-aab1-bebb1206c2bb-a'/%3E        %3C/mask%3E        %3Cpath fill='%23FFF' d='M20.005.608c-2.722-.193-5.031 1.456-6.32 1.456-1.308 0-3.324-1.415-5.461-1.376-2.806.04-5.393 1.564-6.84 3.972C-1.531 9.506.64 16.687 3.479 20.62c1.389 1.922 3.045 4.088 5.221 4.009 2.094-.08 2.887-1.298 5.418-1.298 2.53 0 3.243 1.298 5.458 1.259 2.254-.04 3.683-1.962 5.061-3.894 1.596-2.23 2.251-4.39 2.29-4.505-.05-.018-4.394-1.614-4.437-6.408-.04-4.008 3.415-5.935 3.573-6.028C24.102.989 21.073.684 20.005.608' mask='url(%2347f1323c-993c-4d45-aab1-bebb1206c2bb-b)'/%3E      %3C/g%3E      %3Cpath fill='%23FFF' d='M18.325 5.057C19.482 3.718 20.26 1.854 20.045 0c-1.663.063-3.676 1.062-4.87 2.4-1.07 1.185-2.008 3.083-1.753 4.899 1.855.137 3.748-.902 4.903-2.242'/%3E    %3C/g%3E  %3C/g%3E%3C/svg%3E");
}

.icon {
  display: inline-block;
  vertical-align: middle;
  width: 3rem;
  height: 3rem;
  background-size: cover;
  border-radius: 50%;
}

@media (max-width: 758px) {
  .icon {
    display: inline-block;
    vertical-align: middle;
    width: 1.5rem;
    height: 1.5rem;
    background-size: cover;
    border-radius: 50%;
  }

  .button-download-span {
    font-size: 0.5rem;
  }
}

.icon-windows {
  /* background-color: #3aa6f1; */
  background-color: lightblue;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E  %3Cg fill='%23FFF' fill-rule='evenodd'%3E    %3Cpath d='M6.316 21.826v9.025l10.99 1.539V21.826zm12.045 0v10.712l14.463 2.026V21.826zM6.316 11.767v9.004h10.99V10.205zM32.824 8l-14.463 2.055v10.716h14.463z' opacity='.8'/%3E    %3Cpath fill='none' d='M0 0h40v40H0z'/%3E  %3C/g%3E%3C/svg%3E");
}

.icon-macos {
  background-color: lightblue;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='40' height='40' viewBox='0 0 40 40'%3E  %3Cdefs%3E    %3Cpath id='47f1323c-993c-4d45-aab1-bebb1206c2bb-a' d='M.001.592h26.926v24.039H.001z'/%3E  %3C/defs%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Cpath d='M0 0h40v40H0z'/%3E    %3Cg opacity='.8' transform='translate(6.316 2.737)'%3E      %3Cg transform='translate(0 7.045)'%3E        %3Cmask id='47f1323c-993c-4d45-aab1-bebb1206c2bb-b' fill='%23fff'%3E          %3Cuse xlink:href='%2347f1323c-993c-4d45-aab1-bebb1206c2bb-a'/%3E        %3C/mask%3E        %3Cpath fill='%23FFF' d='M20.005.608c-2.722-.193-5.031 1.456-6.32 1.456-1.308 0-3.324-1.415-5.461-1.376-2.806.04-5.393 1.564-6.84 3.972C-1.531 9.506.64 16.687 3.479 20.62c1.389 1.922 3.045 4.088 5.221 4.009 2.094-.08 2.887-1.298 5.418-1.298 2.53 0 3.243 1.298 5.458 1.259 2.254-.04 3.683-1.962 5.061-3.894 1.596-2.23 2.251-4.39 2.29-4.505-.05-.018-4.394-1.614-4.437-6.408-.04-4.008 3.415-5.935 3.573-6.028C24.102.989 21.073.684 20.005.608' mask='url(%2347f1323c-993c-4d45-aab1-bebb1206c2bb-b)'/%3E      %3C/g%3E      %3Cpath fill='%23FFF' d='M18.325 5.057C19.482 3.718 20.26 1.854 20.045 0c-1.663.063-3.676 1.062-4.87 2.4-1.07 1.185-2.008 3.083-1.753 4.899 1.855.137 3.748-.902 4.903-2.242'/%3E    %3C/g%3E  %3C/g%3E%3C/svg%3E");
}
</style>
